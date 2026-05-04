from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify
import sqlite3
import os
from datetime import date
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'

DB_PATH = 'database.db'
UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def add_notification(id_number, message):
    conn = get_db()
    conn.execute('''
        INSERT INTO notifications (id_number, message)
        VALUES (?, ?)
    ''', (id_number, message))
    conn.commit()
    conn.close()


def get_student_notifications(id_number):
    conn = get_db()

    notifications = conn.execute('''
        SELECT *
        FROM notifications
        WHERE id_number = ?
          AND (
              message LIKE 'You have been logged in for sit-in%'
              OR message LIKE 'You have been logged out from sit-in%'
          )
        ORDER BY created_at DESC
        LIMIT 1
    ''', (id_number,)).fetchall()

    notification_count = 0

    if notifications and notifications[0]['is_read'] == 0:
        notification_count = 1

    conn.close()

    return notifications, notification_count


def init_db():
    conn = get_db()
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_number TEXT UNIQUE NOT NULL,
            last_name TEXT NOT NULL,
            first_name TEXT NOT NULL,
            middle_name TEXT,
            course TEXT NOT NULL,
            course_level TEXT NOT NULL,
            password TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            address TEXT
        )
    ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS admins (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS announcements (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            message TEXT NOT NULL,
            posted_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS sitin_records (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_number TEXT NOT NULL,
            purpose TEXT NOT NULL,
            lab TEXT NOT NULL,
            login_time DATETIME DEFAULT CURRENT_TIMESTAMP,
            logout_time DATETIME,
            rating INTEGER,
            feedback TEXT
        )
    ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS notifications (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_number TEXT NOT NULL,
            message TEXT NOT NULL,
            is_read INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS reservations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_number TEXT NOT NULL,
            purpose TEXT NOT NULL,
            lab TEXT NOT NULL,
            pc_number INTEGER,
            time_in TIME NOT NULL,
            date DATE NOT NULL,
            status TEXT DEFAULT 'Pending',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    cursor.execute("PRAGMA table_info(reservations)")
    reservation_columns = [column[1] for column in cursor.fetchall()]

    if 'pc_number' not in reservation_columns:
        cursor.execute('ALTER TABLE reservations ADD COLUMN pc_number INTEGER')

    cursor.execute('''
        INSERT OR IGNORE INTO admins (username, password) VALUES (?, ?)
    ''', ('admin', 'admin123'))

    conn.commit()
    conn.close()


# =============================================================
# STUDENT ROUTES
# =============================================================

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        id_number = request.form['id_number']
        password = request.form['password']

        conn = get_db()

        admin = conn.execute(
            'SELECT * FROM admins WHERE username = ? AND password = ?',
            (id_number, password)
        ).fetchone()

        if admin:
            session['admin_id'] = admin['id']
            session['admin_user'] = admin['username']
            conn.close()
            flash('Welcome back, Administrator!', 'success')
            return redirect(url_for('admin_dashboard'))

        student = conn.execute(
            'SELECT * FROM students WHERE id_number = ? AND password = ?',
            (id_number, password)
        ).fetchone()

        conn.close()

        if student:
            session['student_id'] = student['id_number']
            session['student_name'] = student['first_name']

            flash(f"Welcome! {student['first_name']} {student['last_name']}", 'success')
            return redirect(url_for('dashboard'))

        flash('Invalid ID number or password.', 'error')

    return render_template('login.html')


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        id_number = request.form['id_number']
        last_name = request.form['last_name']
        first_name = request.form['first_name']
        middle_name = request.form['middle_name']
        course = request.form['course']
        course_level = request.form['course_level']
        password = request.form['password']
        repeat_password = request.form['repeat_password']
        email = request.form['email']
        address = request.form['address']

        if password != repeat_password:
            flash('Passwords do not match.', 'error')
            return redirect(url_for('register'))

        try:
            conn = get_db()
            conn.execute('''
                INSERT INTO students
                (id_number, last_name, first_name, middle_name, course, course_level, password, email, address)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (id_number, last_name, first_name, middle_name, course, course_level, password, email, address))
            conn.commit()
            conn.close()
            flash('Registration successful! Please login.', 'success')
            return redirect(url_for('login'))

        except sqlite3.IntegrityError:
            flash('ID Number or Email already exists.', 'error')
            return redirect(url_for('register'))

    return render_template('register.html')


@app.route('/dashboard')
def dashboard():
    if 'student_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()

    student = conn.execute(
        'SELECT * FROM students WHERE id_number = ?',
        (session['student_id'],)
    ).fetchone()

    used_sessions = conn.execute(
        'SELECT COUNT(*) as count FROM sitin_records WHERE id_number = ? AND logout_time IS NOT NULL',
        (session['student_id'],)
    ).fetchone()['count']

    remaining = 30 - used_sessions

    announcements = conn.execute(
        'SELECT * FROM announcements ORDER BY posted_at DESC'
    ).fetchall()

    conn.close()

    notifications, notification_count = get_student_notifications(session['student_id'])

    return render_template(
        'dashboard.html',
        student=student,
        announcements=announcements,
        remaining=remaining,
        notifications=notifications,
        notification_count=notification_count
    )


@app.route('/edit-profile', methods=['GET', 'POST'])
def edit_profile():
    if 'student_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()

    student = conn.execute(
        'SELECT * FROM students WHERE id_number = ?',
        (session['student_id'],)
    ).fetchone()

    photo_path = f"uploads/{session['student_id']}.png"
    has_photo = os.path.exists(os.path.join('static', photo_path))

    if request.method == 'POST':
        last_name = request.form['last_name']
        first_name = request.form['first_name']
        middle_name = request.form['middle_name']
        course_level = request.form['course_level']
        email = request.form['email']
        course = request.form['course']
        address = request.form['address']

        conn.execute('''
            UPDATE students SET
                last_name = ?, first_name = ?, middle_name = ?,
                course_level = ?, email = ?, course = ?, address = ?
            WHERE id_number = ?
        ''', (last_name, first_name, middle_name, course_level, email, course, address, session['student_id']))

        conn.commit()
        conn.close()

        flash('Profile updated successfully!', 'success')
        return redirect(url_for('edit_profile'))

    conn.close()

    notifications, notification_count = get_student_notifications(session['student_id'])

    return render_template(
        'edit_profile.html',
        student=student,
        photo_path=photo_path,
        has_photo=has_photo,
        notifications=notifications,
        notification_count=notification_count
    )


@app.route('/upload-photo', methods=['POST'])
def upload_photo():
    if 'student_id' not in session:
        return redirect(url_for('login'))

    file = request.files.get('photo')

    if file and allowed_file(file.filename):
        filename = f"{session['student_id']}.png"
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        flash('Profile photo updated successfully!', 'success')
    else:
        flash('Invalid file. Please upload a JPG, PNG, or GIF.', 'error')

    return redirect(url_for('edit_profile'))


@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))

@app.route('/students')
def students():
    if 'student_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()
    students = conn.execute('SELECT * FROM students').fetchall()
    conn.close()

    notifications, notification_count = get_student_notifications(session['student_id'])

    return render_template(
        'students.html',
        students=students,
        notifications=notifications,
        notification_count=notification_count
    )


# =============================================================
# RESERVATION ROUTES
# =============================================================

@app.route('/reservation', methods=['GET', 'POST'])
def reservation():
    if 'student_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()

    student = conn.execute(
        'SELECT * FROM students WHERE id_number = ?',
        (session['student_id'],)
    ).fetchone()

    used_sessions = conn.execute(
        'SELECT COUNT(*) as count FROM sitin_records WHERE id_number = ? AND logout_time IS NOT NULL',
        (session['student_id'],)
    ).fetchone()['count']

    remaining = 30 - used_sessions

    if request.method == 'POST':
        purpose = request.form.get('purpose', '').strip()
        lab = request.form.get('lab', '').strip()
        time_in = request.form.get('time_in', '').strip()
        reservation_date = request.form.get('date', '').strip()
        pc_number = request.form.get('pc_number', '').strip()

        if not purpose or not lab or not time_in or not reservation_date or not pc_number:
            flash('Please complete all reservation steps, including PC number.', 'error')
            conn.close()
            return redirect(url_for('reservation'))

        try:
            pc_number_int = int(pc_number)
        except ValueError:
            flash('Invalid PC number selected.', 'error')
            conn.close()
            return redirect(url_for('reservation'))

        if pc_number_int < 1 or pc_number_int > 50:
            flash('PC number must be between 1 and 50.', 'error')
            conn.close()
            return redirect(url_for('reservation'))

        if remaining <= 0:
            flash('You have no remaining sessions to reserve.', 'error')
            conn.close()
            return redirect(url_for('reservation'))

        existing_pc = conn.execute('''
            SELECT id
            FROM reservations
            WHERE lab = ?
              AND date = ?
              AND time_in = ?
              AND pc_number = ?
              AND status IN ('Pending', 'Approved')
        ''', (lab, reservation_date, time_in, pc_number_int)).fetchone()

        if existing_pc:
            flash(f'PC {pc_number_int} is already reserved for that lab, date, and time.', 'error')
            conn.close()
            return redirect(url_for('reservation'))

        conn.execute('''
            INSERT INTO reservations (id_number, purpose, lab, pc_number, time_in, date, status)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (
            session['student_id'],
            purpose,
            lab,
            pc_number_int,
            time_in,
            reservation_date,
            'Pending'
        ))

        conn.commit()
        conn.close()

        flash('Reservation submitted successfully! Please wait for admin approval.', 'success')
        return redirect(url_for('reservation'))

    reservations = conn.execute(
        'SELECT * FROM reservations WHERE id_number = ? ORDER BY created_at DESC',
        (session['student_id'],)
    ).fetchall()

    conn.close()

    notifications, notification_count = get_student_notifications(session['student_id'])

    return render_template(
        'reservation.html',
        student=student,
        remaining=remaining,
        reservations=reservations,
        notifications=notifications,
        notification_count=notification_count
    )


@app.route('/reservation/pc-status')
def reservation_pc_status():
    if 'student_id' not in session:
        return jsonify({"success": False, "message": "Unauthorized"}), 401

    lab = request.args.get('lab', '').strip()
    reservation_date = request.args.get('date', '').strip()
    time_in = request.args.get('time_in', '').strip()

    if not lab or not reservation_date or not time_in:
        return jsonify({"success": True, "unavailable": []})

    conn = get_db()

    rows = conn.execute('''
        SELECT pc_number
        FROM reservations
        WHERE lab = ?
          AND date = ?
          AND time_in = ?
          AND pc_number IS NOT NULL
          AND status IN ('Pending', 'Approved')
    ''', (lab, reservation_date, time_in)).fetchall()

    conn.close()

    unavailable = []

    for row in rows:
        if row['pc_number'] is not None:
            unavailable.append(int(row['pc_number']))

    return jsonify({
        "success": True,
        "unavailable": unavailable
    })


# =============================================================
# ADMIN ROUTES
# =============================================================

@app.route('/admin/dashboard')
def admin_dashboard():
    if 'admin_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()

    students = conn.execute('SELECT * FROM students').fetchall()
    total_students = len(students)

    announcements = conn.execute(
        'SELECT * FROM announcements ORDER BY posted_at DESC'
    ).fetchall()

    course_stats = [
        {"course": row["course"], "count": row["count"]}
        for row in conn.execute(
            'SELECT course, COUNT(*) as count FROM students GROUP BY course'
        ).fetchall()
    ]

    total_sitin = conn.execute(
        'SELECT COUNT(*) as c FROM sitin_records'
    ).fetchone()['c']

    current_sitin = conn.execute(
        'SELECT COUNT(*) as c FROM sitin_records WHERE logout_time IS NULL'
    ).fetchone()['c']

    conn.close()

    return render_template(
        'admin_dashboard.html',
        students=students,
        total_students=total_students,
        announcements=announcements,
        course_stats=course_stats,
        total_sitin=total_sitin,
        current_sitin=current_sitin,
        admin_user=session['admin_user']
    )


@app.route('/admin/announce', methods=['POST'])
def admin_announce():
    if 'admin_id' not in session:
        return redirect(url_for('login'))

    message = request.form['message']

    conn = get_db()
    conn.execute(
        "INSERT INTO announcements (message, posted_at) VALUES (?, datetime('now'))",
        (message,)
    )
    conn.commit()
    conn.close()

    flash("Announcement posted!", "success")
    return redirect(url_for('admin_dashboard'))


@app.route('/admin/delete-announcement/<int:ann_id>', methods=['POST'])
def delete_announcement(ann_id):
    if 'admin_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()
    conn.execute('DELETE FROM announcements WHERE id = ?', (ann_id,))
    conn.commit()
    conn.close()

    flash('Announcement deleted.', 'success')
    return redirect(url_for('admin_dashboard'))


@app.route('/admin/delete-student/<id_number>', methods=['POST'])
def delete_student(id_number):
    if 'admin_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()
    conn.execute('DELETE FROM students WHERE id_number = ?', (id_number,))
    conn.commit()
    conn.close()

    flash(f'Student {id_number} deleted successfully.', 'success')
    return redirect(url_for('admin_dashboard'))


@app.route('/admin/logout')
def admin_logout():
    session.clear()
    return redirect(url_for('login'))


@app.route('/admin/get-student/<id_number>')
def get_student(id_number):
    if 'admin_id' not in session:
        return jsonify({"success": False, "message": "Unauthorized"}), 401

    conn = get_db()

    student = conn.execute(
        'SELECT * FROM students WHERE id_number = ?',
        (id_number,)
    ).fetchone()

    used_sessions = conn.execute(
        'SELECT COUNT(*) as c FROM sitin_records WHERE id_number = ? AND logout_time IS NOT NULL',
        (id_number,)
    ).fetchone()['c']

    remaining = 30 - used_sessions

    conn.close()

    if student:
        return jsonify({
            "success": True,
            "id_number": student['id_number'],
            "name": f"{student['first_name']} {student['last_name']}",
            "remaining": remaining
        })

    return jsonify({"success": False, "message": "Student not found"})


@app.route('/admin/search-students')
def search_students():
    if 'admin_id' not in session:
        return jsonify({"success": False, "message": "Unauthorized"}), 401

    query = request.args.get('q', '').strip()

    conn = get_db()

    if not query:
        students = conn.execute('''
            SELECT 
                s.id_number, s.first_name, s.middle_name, s.last_name, 
                s.course, s.course_level,
                COUNT(CASE WHEN sr.logout_time IS NOT NULL THEN 1 END) as used_sessions
            FROM students s
            LEFT JOIN sitin_records sr ON s.id_number = sr.id_number
            GROUP BY s.id_number
            ORDER BY s.last_name, s.first_name
            LIMIT 50
        ''').fetchall()
    else:
        students = conn.execute('''
            SELECT 
                s.id_number, s.first_name, s.middle_name, s.last_name, 
                s.course, s.course_level,
                COUNT(CASE WHEN sr.logout_time IS NOT NULL THEN 1 END) as used_sessions
            FROM students s
            LEFT JOIN sitin_records sr ON s.id_number = sr.id_number
            WHERE s.id_number LIKE ? 
               OR s.first_name LIKE ? 
               OR s.last_name LIKE ?
            GROUP BY s.id_number
            ORDER BY s.last_name, s.first_name
            LIMIT 20
        ''', (f'%{query}%', f'%{query}%', f'%{query}%')).fetchall()

    results = []

    for student in students:
        remaining = 30 - (student['used_sessions'] or 0)
        profile_pic_path = os.path.join(app.root_path, 'static', 'uploads', f"{student['id_number']}.png")
        profile_pic = os.path.exists(profile_pic_path)

        results.append({
            'id_number': student['id_number'],
            'first_name': student['first_name'],
            'middle_name': student['middle_name'],
            'last_name': student['last_name'],
            'course': student['course'],
            'course_level': student['course_level'],
            'remaining': remaining,
            'profile_pic': profile_pic
        })

    conn.close()

    return jsonify({"students": results})


@app.route('/admin/sit-in', methods=['POST'])
def admin_sitin():
    if 'admin_id' not in session:
        return redirect(url_for('login'))

    id_number = request.form.get('id_number')
    purpose = request.form.get('purpose')
    lab = request.form.get('lab')

    if id_number and purpose and lab:
        conn = get_db()

        existing = conn.execute(
            'SELECT id FROM sitin_records WHERE id_number = ? AND logout_time IS NULL',
            (id_number,)
        ).fetchone()

        if existing:
            conn.close()
            flash(f'Student {id_number} is already sitting in! Log them out first.', 'error')
            return redirect(url_for('admin_sitin_records'))

        conn.execute('''
            INSERT INTO sitin_records (id_number, purpose, lab)
            VALUES (?, ?, ?)
        ''', (id_number, purpose, lab))

        student = conn.execute(
            'SELECT first_name, last_name FROM students WHERE id_number = ?',
            (id_number,)
        ).fetchone()

        conn.commit()
        conn.close()

        if student:
            add_notification(
                id_number,
                f"You have been logged in for sit-in by admin. Purpose: {purpose}, Lab: {lab}."
            )

        flash(f'Student {id_number} successfully sat-in!', 'success')
    else:
        flash('Please complete all Sit-In fields.', 'error')

    return redirect(url_for('admin_sitin_records'))

@app.route('/admin/sitin-records')
def admin_sitin_records():
    if 'admin_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()
    today = date.today().isoformat()

    active_records = conn.execute('''
        SELECT sr.id, sr.id_number, sr.purpose, sr.lab, sr.login_time,
               s.first_name, s.last_name, s.course, s.course_level
        FROM sitin_records sr
        JOIN students s ON sr.id_number = s.id_number
        WHERE sr.logout_time IS NULL
        ORDER BY sr.login_time ASC
    ''').fetchall()

    total_sitin = conn.execute(
        "SELECT COUNT(*) as c FROM sitin_records WHERE DATE(login_time) = ?",
        (today,)
    ).fetchone()['c']

    total_logout = conn.execute(
        "SELECT COUNT(*) as c FROM sitin_records WHERE DATE(logout_time) = ?",
        (today,)
    ).fetchone()['c']

    conn.close()

    return render_template(
        'admin_sitin_records.html',
        active_records=active_records,
        total_sitin=total_sitin,
        total_logout=total_logout,
        admin_user=session['admin_user']
    )


@app.route('/admin/sitin-logout/<int:record_id>', methods=['POST'])
def admin_sitin_logout(record_id):
    if 'admin_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()

    conn.execute('''
        UPDATE sitin_records
        SET logout_time = CURRENT_TIMESTAMP
        WHERE id = ? AND logout_time IS NULL
    ''', (record_id,))

    conn.commit()

    record = conn.execute(
        '''
        SELECT sr.id_number, s.first_name, s.last_name
        FROM sitin_records sr
        JOIN students s ON sr.id_number = s.id_number
        WHERE sr.id = ?
        ''',
        (record_id,)
    ).fetchone()

    conn.close()

    if record:
        add_notification(
            record['id_number'],
            "You have been logged out from sit-in by admin. 1 session has been deducted."
        )

        flash(
            f'{record["first_name"]} {record["last_name"]} ({record["id_number"]}) '
            f'has been logged out. 1 session deducted.',
            'success'
        )
    else:
        flash('Record not found or already logged out.', 'error')

    return redirect(url_for('admin_sitin_records'))

@app.route('/admin/reservations')
def admin_reservations():
    if 'admin_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()

    reservations = conn.execute('''
        SELECT r.*, s.first_name, s.last_name
        FROM reservations r
        JOIN students s ON r.id_number = s.id_number
        ORDER BY r.date ASC, r.time_in ASC
    ''').fetchall()

    conn.close()

    return render_template(
        'admin_reservations.html',
        reservations=reservations,
        admin_user=session['admin_user']
    )


@app.route('/admin/reservation/approve/<int:res_id>', methods=['POST'])
def approve_reservation(res_id):
    if 'admin_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()

    conn.execute(
        "UPDATE reservations SET status = 'Approved' WHERE id = ?",
        (res_id,)
    )

    conn.commit()
    conn.close()

    flash('Reservation approved.', 'success')
    return redirect(url_for('admin_reservations'))


@app.route('/admin/reservation/reject/<int:res_id>', methods=['POST'])
def reject_reservation(res_id):
    if 'admin_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()

    conn.execute(
        "UPDATE reservations SET status = 'Rejected' WHERE id = ?",
        (res_id,)
    )

    conn.commit()
    conn.close()

    flash('Reservation rejected.', 'success')
    return redirect(url_for('admin_reservations'))


@app.route('/admin/students')
def admin_students():
    if 'admin_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()

    students = conn.execute(
        'SELECT * FROM students ORDER BY last_name, first_name'
    ).fetchall()

    total_students = len(students)

    conn.close()

    return render_template(
        'admin_students.html',
        students=students,
        total_students=total_students,
        admin_user=session['admin_user']
    )


@app.route('/admin/sitin-reports')
def admin_sitin_reports():
    if 'admin_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()

    total_sitin = conn.execute(
        'SELECT COUNT(*) as c FROM sitin_records'
    ).fetchone()['c']

    total_completed = conn.execute(
        'SELECT COUNT(*) as c FROM sitin_records WHERE logout_time IS NOT NULL'
    ).fetchone()['c']

    purpose_stats = conn.execute('''
        SELECT purpose, COUNT(*) as count 
        FROM sitin_records 
        GROUP BY purpose 
        ORDER BY count DESC
    ''').fetchall()

    lab_stats = conn.execute('''
        SELECT lab, COUNT(*) as count 
        FROM sitin_records 
        GROUP BY lab 
        ORDER BY count DESC
    ''').fetchall()

    conn.close()

    return render_template(
        'admin_sitin_reports.html',
        total_sitin=total_sitin,
        total_completed=total_completed,
        purpose_stats=purpose_stats,
        lab_stats=lab_stats,
        admin_user=session['admin_user']
    )


@app.route('/admin/feedback-reports')
def admin_feedback_reports():
    if 'admin_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()

    feedbacks = conn.execute('''
        SELECT sr.id, sr.id_number, sr.purpose, sr.lab, sr.login_time,
               sr.logout_time, sr.rating, sr.feedback,
               s.first_name, s.last_name, s.course
        FROM sitin_records sr
        JOIN students s ON sr.id_number = s.id_number
        WHERE sr.feedback IS NOT NULL
        ORDER BY sr.login_time DESC
    ''').fetchall()

    avg_rating = conn.execute('''
        SELECT AVG(rating) as avg_rating 
        FROM sitin_records 
        WHERE rating IS NOT NULL
    ''').fetchone()['avg_rating']

    total_feedbacks = len(feedbacks)

    conn.close()

    return render_template(
        'admin_feedback_reports.html',
        feedbacks=feedbacks,
        avg_rating=avg_rating,
        total_feedbacks=total_feedbacks,
        admin_user=session['admin_user']
    )


@app.route('/history')
def history():
    if 'student_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()

    records = conn.execute('''
        SELECT *
        FROM sitin_records
        WHERE id_number = ?
        ORDER BY login_time DESC
    ''', (session['student_id'],)).fetchall()

    conn.close()

    notifications, notification_count = get_student_notifications(session['student_id'])

    return render_template(
        'history.html',
        records=records,
        notifications=notifications,
        notification_count=notification_count
    )


@app.route('/submit-feedback', methods=['POST'])
def submit_feedback():
    if 'student_id' not in session:
        return redirect(url_for('login'))

    record_id = request.form.get('record_id')
    rating = request.form.get('rating')
    feedback = request.form.get('feedback', '').strip()

    if not record_id or not rating or not feedback:
        flash('Please complete the feedback form.', 'error')
        return redirect(url_for('history'))

    conn = get_db()

    record = conn.execute('''
        SELECT * FROM sitin_records
        WHERE id = ? AND id_number = ?
    ''', (record_id, session['student_id'])).fetchone()

    if not record:
        conn.close()
        flash('Invalid sit-in record.', 'error')
        return redirect(url_for('history'))

    conn.execute('''
        UPDATE sitin_records
        SET rating = ?, feedback = ?
        WHERE id = ?
    ''', (rating, feedback, record_id))

    conn.commit()
    conn.close()

    flash('Feedback submitted successfully!', 'success')
    return redirect(url_for('history'))


@app.route('/admin/view-sitin-records')
def view_sitin_records():
    if 'admin_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()

    search_id = request.args.get('search_id', '')

    query = '''
        SELECT 
            sr.id,
            sr.id_number,
            sr.purpose,
            sr.lab,
            sr.login_time,
            sr.logout_time,
            s.first_name,
            s.last_name,
            s.course
        FROM sitin_records sr
        JOIN students s ON sr.id_number = s.id_number
    '''

    params = []

    if search_id:
        query += " WHERE sr.id_number LIKE ?"
        params.append(f"%{search_id}%")

    query += " ORDER BY sr.login_time DESC"

    records = conn.execute(query, params).fetchall()

    conn.close()

    return render_template(
        'admin_view_sitin_records.html',
        records=records,
        admin_user=session['admin_user']
    )


@app.route('/notification/read/<int:notif_id>')
def read_notification(notif_id):
    if 'student_id' not in session:
        return redirect(url_for('login'))

    conn = get_db()

    conn.execute('''
        UPDATE notifications
        SET is_read = 1
        WHERE id = ?
          AND id_number = ?
    ''', (notif_id, session['student_id']))

    conn.commit()
    conn.close()

    return redirect(request.referrer or url_for('dashboard'))


if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=1234, debug=True)