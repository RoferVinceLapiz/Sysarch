(function () {
    const STORAGE_KEY = "ccs_dark_mode";

    const darkModeCSS = `
        /* =====================================================
           UNIVERSAL DARK MODE FIX FOR ALL PAGES
        ===================================================== */

        body.dark-mode,
        body.dark-mode * {
            transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease !important;
        }

        body.dark-mode {
            background:
                radial-gradient(circle at 10% 12%, rgba(253, 184, 19, 0.13), transparent 28%),
                radial-gradient(circle at 90% 10%, rgba(124, 58, 237, 0.28), transparent 32%),
                linear-gradient(135deg, #05030a 0%, #13071f 45%, #020617 100%) !important;
            color: #f8fafc !important;
        }

        body.dark-mode.student-dashboard-page,
        body.dark-mode.student-edit-page,
        body.dark-mode.student-history-page,
        body.dark-mode.student-reservation-page,
        body.dark-mode.student-summary-page,
        body.dark-mode.login-page,
        body.dark-mode.register-page,
        body.dark-mode.student-register-page {
            background:
                radial-gradient(circle at 10% 12%, rgba(253, 184, 19, 0.13), transparent 28%),
                radial-gradient(circle at 90% 10%, rgba(124, 58, 237, 0.28), transparent 32%),
                linear-gradient(135deg, #05030a 0%, #13071f 45%, #020617 100%) !important;
            color: #f8fafc !important;
        }

        /* =====================================================
           TEXT READABILITY
        ===================================================== */

        body.dark-mode h1,
        body.dark-mode h2,
        body.dark-mode h3,
        body.dark-mode h4,
        body.dark-mode h5,
        body.dark-mode h6,
        body.dark-mode strong,
        body.dark-mode label,
        body.dark-mode .hero-title h1,
        body.dark-mode .dashboard-title h1,
        body.dark-mode .students-title h1,
        body.dark-mode .sitin-title h1,
        body.dark-mode .records-title h1,
        body.dark-mode .report-title h1,
        body.dark-mode .feedback-title h2,
        body.dark-mode .reservation-title h1,
        body.dark-mode .summary-hero h1,
        body.dark-mode .profile-name,
        body.dark-mode .avatar-name,
        body.dark-mode .student-name,
        body.dark-mode .reviewer-name,
        body.dark-mode .rules-university,
        body.dark-mode .login-title h2,
        body.dark-mode .login-brand-card h1,
        body.dark-mode .form-title h3 {
            color: #ffffff !important;
            text-shadow: 0 0 14px rgba(253, 184, 19, 0.16) !important;
        }

        body.dark-mode p,
        body.dark-mode span,
        body.dark-mode small,
        body.dark-mode td,
        body.dark-mode li,
        body.dark-mode .hero-title p,
        body.dark-mode .dashboard-title p,
        body.dark-mode .records-title p,
        body.dark-mode .summary-hero p,
        body.dark-mode .profile-id,
        body.dark-mode .avatar-id,
        body.dark-mode .student-id,
        body.dark-mode .announcement-text,
        body.dark-mode .announcement-message,
        body.dark-mode .rules-scroll p,
        body.dark-mode .dash-rules p,
        body.dark-mode .card-feedback,
        body.dark-mode .upload-hint,
        body.dark-mode .muted-text,
        body.dark-mode .remember-me-container,
        body.dark-mode .remember-me-container label {
            color: #dbeafe !important;
        }

        body.dark-mode a {
            color: #fdb813 !important;
        }

        body.dark-mode a:hover {
            color: #fde68a !important;
        }

        /* =====================================================
           NAVBARS
        ===================================================== */

        body.dark-mode .student-navbar,
        body.dark-mode .admin-navbar,
        body.dark-mode .login-navbar,
        body.dark-mode .navbar,
        body.dark-mode .dash-navbar {
            background:
                radial-gradient(circle at top left, rgba(253, 184, 19, 0.16), transparent 30%),
                linear-gradient(135deg, #1e1038, #05030a) !important;
            box-shadow:
                0 12px 35px rgba(0, 0, 0, 0.65),
                0 0 26px rgba(253, 184, 19, 0.10) !important;
        }

        body.dark-mode .student-navbar-title,
        body.dark-mode .admin-navbar-title,
        body.dark-mode .login-navbar span,
        body.dark-mode .navbar span,
        body.dark-mode .dash-title {
            color: #ffffff !important;
        }

        body.dark-mode .student-nav-links a,
        body.dark-mode .admin-nav-links a,
        body.dark-mode .login-navbar .nav-menu a,
        body.dark-mode .nav-menu a,
        body.dark-mode .dash-menu a,
        body.dark-mode .dropdown-toggle {
            color: #f8fafc !important;
            background: transparent !important;
        }

        body.dark-mode .student-nav-links a:hover:not(.logout-btn),
        body.dark-mode .student-nav-links a.active,
        body.dark-mode .admin-nav-links a:hover:not(.admin-logout-btn),
        body.dark-mode .admin-nav-links a.active,
        body.dark-mode .login-navbar .nav-menu a:hover,
        body.dark-mode .login-navbar .nav-menu a.active-link,
        body.dark-mode .dropdown-toggle:hover {
            background: rgba(253, 184, 19, 0.15) !important;
            color: #fdb813 !important;
            box-shadow: inset 0 0 0 1px rgba(253, 184, 19, 0.22) !important;
        }

        body.dark-mode .logout-btn,
        body.dark-mode .admin-logout-btn {
            background: linear-gradient(135deg, #fdb813, #f59e0b) !important;
            color: #1e1038 !important;
            box-shadow: 0 0 20px rgba(253, 184, 19, 0.25) !important;
        }

        /* =====================================================
           CARDS / PANELS / DASHBOARD BOXES
        ===================================================== */

        body.dark-mode .student-card,
        body.dark-mode .admin-card,
        body.dark-mode .dashboard-card,
        body.dark-mode .history-card,
        body.dark-mode .reservation-card,
        body.dark-mode .records-card,
        body.dark-mode .report-card,
        body.dark-mode .student-table-card,
        body.dark-mode .rating-card,
        body.dark-mode .table-card,
        body.dark-mode .my-rank-card,
        body.dark-mode .top-leaderboard-card,
        body.dark-mode .lab-manager-card,
        body.dark-mode .students-card,
        body.dark-mode .profile-card,
        body.dark-mode .info-card,
        body.dark-mode .dash-card,
        body.dark-mode .login-box,
        body.dark-mode .login-brand-card,
        body.dark-mode .register-form,
        body.dark-mode .register-brand-card,
        body.dark-mode .announcement-card,
        body.dark-mode .rules-card {
            background:
                linear-gradient(180deg, rgba(30, 41, 59, 0.98), rgba(15, 23, 42, 0.98)) !important;
            border: 1px solid rgba(148, 163, 184, 0.26) !important;
            color: #f8fafc !important;
            box-shadow:
                0 24px 70px rgba(0, 0, 0, 0.50),
                0 0 24px rgba(124, 58, 237, 0.10) !important;
        }

        body.dark-mode .student-card-header,
        body.dark-mode .admin-card-header,
        body.dark-mode .history-card-header,
        body.dark-mode .reservation-card-header,
        body.dark-mode .records-card-header,
        body.dark-mode .report-card-header,
        body.dark-mode .table-header,
        body.dark-mode .my-rank-header,
        body.dark-mode .top-leaderboard-header,
        body.dark-mode .lab-manager-header,
        body.dark-mode .dash-card-header {
            background:
                radial-gradient(circle at top right, rgba(253, 184, 19, 0.18), transparent 32%),
                linear-gradient(135deg, #2d1a4d, #08040f) !important;
            color: #ffffff !important;
            border-bottom: 1px solid rgba(253, 184, 19, 0.16) !important;
        }

        body.dark-mode .student-card-body,
        body.dark-mode .admin-card-body,
        body.dark-mode .reservation-card-body,
        body.dark-mode .report-card-body,
        body.dark-mode .dash-card-body,
        body.dark-mode .info-card-body {
            background: transparent !important;
            color: #e2e8f0 !important;
        }

        /* Dashboard special items */
        body.dark-mode .profile-info-item,
        body.dark-mode .dash-info-item,
        body.dark-mode .announcement-item,
        body.dark-mode .leaderboard-item,
        body.dark-mode .stat-item,
        body.dark-mode .login-benefits span,
        body.dark-mode .register-benefits span,
        body.dark-mode .step-screen-header,
        body.dark-mode .reservation-note,
        body.dark-mode .lab-apps-preview,
        body.dark-mode .selected-pc-box,
        body.dark-mode .evaluation-box,
        body.dark-mode .evaluation-total {
            background: rgba(15, 23, 42, 0.92) !important;
            color: #e2e8f0 !important;
            border: 1px solid rgba(148, 163, 184, 0.24) !important;
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22) !important;
        }

        body.dark-mode .announcement-item {
            border-left-color: #fdb813 !important;
        }

        body.dark-mode .profile-info-icon,
        body.dark-mode .dash-info-icon,
        body.dark-mode .stat-item-icon {
            background: #1e1038 !important;
            color: #fdb813 !important;
        }

        body.dark-mode .hero-icon,
        body.dark-mode .dashboard-title-icon,
        body.dark-mode .students-title-icon,
        body.dark-mode .sitin-title-icon,
        body.dark-mode .records-title-icon,
        body.dark-mode .report-title-icon,
        body.dark-mode .feedback-title-icon,
        body.dark-mode .reservation-title-icon,
        body.dark-mode .summary-icon {
            background: linear-gradient(135deg, #fdb813, #f59e0b) !important;
            color: #1e1038 !important;
            box-shadow:
                0 0 22px rgba(253, 184, 19, 0.35),
                0 16px 32px rgba(0, 0, 0, 0.35) !important;
        }

        body.dark-mode .summary-card,
        body.dark-mode .stat-card,
        body.dark-mode .stat-badge,
        body.dark-mode .stats-card,
        body.dark-mode .session-summary {
            background:
                radial-gradient(circle at top right, rgba(253, 184, 19, 0.20), transparent 34%),
                linear-gradient(135deg, #3b1b6d, #111827) !important;
            border: 1px solid rgba(253, 184, 19, 0.22) !important;
            color: #ffffff !important;
            box-shadow:
                0 18px 45px rgba(0, 0, 0, 0.45),
                0 0 24px rgba(253, 184, 19, 0.13) !important;
        }

        body.dark-mode .summary-card p,
        body.dark-mode .summary-card span,
        body.dark-mode .summary-card strong,
        body.dark-mode .stat-card p,
        body.dark-mode .stat-card strong,
        body.dark-mode .session-summary p,
        body.dark-mode .session-summary strong {
            color: #ffffff !important;
        }

        /* =====================================================
           TABLES
        ===================================================== */

        body.dark-mode table {
            background: transparent !important;
            color: #e2e8f0 !important;
        }

        body.dark-mode thead th,
        body.dark-mode table th {
            background: #1e1038 !important;
            color: #ffffff !important;
            border-bottom: 1px solid rgba(253, 184, 19, 0.22) !important;
        }

        body.dark-mode tbody td,
        body.dark-mode table td {
            background: rgba(15, 23, 42, 0.86) !important;
            color: #e2e8f0 !important;
            border-bottom: 1px solid rgba(148, 163, 184, 0.18) !important;
        }

        body.dark-mode tbody tr:nth-child(even) td {
            background: rgba(30, 41, 59, 0.86) !important;
        }

        body.dark-mode tbody tr:hover td {
            background: rgba(75, 44, 128, 0.34) !important;
        }

        /* =====================================================
           FORMS / INPUTS
        ===================================================== */

        body.dark-mode input,
        body.dark-mode select,
        body.dark-mode textarea,
        body.dark-mode .form-control,
        body.dark-mode .field-input,
        body.dark-mode .profile-input,
        body.dark-mode .search-input {
            background: #020617 !important;
            color: #f8fafc !important;
            -webkit-text-fill-color: #f8fafc !important;
            border-color: rgba(148, 163, 184, 0.38) !important;
            box-shadow: 0 8px 22px rgba(0, 0, 0, 0.25) !important;
        }

        body.dark-mode input::placeholder,
        body.dark-mode textarea::placeholder {
            color: #94a3b8 !important;
            -webkit-text-fill-color: #94a3b8 !important;
            opacity: 1 !important;
        }

        body.dark-mode input:focus,
        body.dark-mode select:focus,
        body.dark-mode textarea:focus,
        body.dark-mode .form-control:focus,
        body.dark-mode .field-input:focus {
            border-color: #fdb813 !important;
            box-shadow:
                0 0 0 4px rgba(253, 184, 19, 0.14),
                0 0 20px rgba(253, 184, 19, 0.12) !important;
        }

        /* =====================================================
   LOGIN PAGE INPUT FIX - DARK MODE
===================================================== */

body.dark-mode.login-page #id_number,
body.dark-mode.login-page #password,
body.dark-mode.login-page .input-group-login input {
    background: #020617 !important;
    background-color: #020617 !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    caret-color: #f8fafc !important;
    border: 2px solid rgba(253, 184, 19, 0.75) !important;
    font-weight: 900 !important;
    box-shadow:
        0 0 0 4px rgba(253, 184, 19, 0.10),
        0 14px 28px rgba(0, 0, 0, 0.28) !important;
}

body.dark-mode.login-page #id_number::placeholder,
body.dark-mode.login-page #password::placeholder,
body.dark-mode.login-page .input-group-login input::placeholder {
    color: #94a3b8 !important;
    -webkit-text-fill-color: #94a3b8 !important;
    opacity: 1 !important;
    font-weight: 800 !important;
}

body.dark-mode.login-page .input-group-login label,
body.dark-mode.login-page .input-group-login input + label,
body.dark-mode.login-page .input-group-login input:focus + label,
body.dark-mode.login-page .input-group-login input:not(:placeholder-shown) + label {
    color: #fdb813 !important;
    -webkit-text-fill-color: #fdb813 !important;
    text-shadow: none !important;
    font-weight: 950 !important;
}

body.dark-mode.login-page #id_number:focus,
body.dark-mode.login-page #password:focus,
body.dark-mode.login-page .input-group-login input:focus {
    background: #020617 !important;
    background-color: #020617 !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    border-color: #fdb813 !important;
    outline: none !important;
    box-shadow:
        0 0 0 4px rgba(253, 184, 19, 0.22),
        0 0 25px rgba(253, 184, 19, 0.20) !important;
}

/* Browser autofill fix */
body.dark-mode.login-page input:-webkit-autofill,
body.dark-mode.login-page input:-webkit-autofill:hover,
body.dark-mode.login-page input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px #020617 inset !important;
    -webkit-text-fill-color: #f8fafc !important;
    caret-color: #f8fafc !important;
}

        /* =====================================================
           BUTTONS
        ===================================================== */

        body.dark-mode .login-btn,
        body.dark-mode .register-btn,
        body.dark-mode .save-btn,
        body.dark-mode .upload-btn,
        body.dark-mode .submit-post-btn,
        body.dark-mode .btn-search,
        body.dark-mode .modal-save-btn,
        body.dark-mode .btn-next-step,
        body.dark-mode .btn-confirm-logout {
            background: linear-gradient(135deg, #7c3aed, #4b2c80) !important;
            color: #ffffff !important;
            box-shadow: 0 14px 30px rgba(124, 58, 237, 0.28) !important;
        }

        body.dark-mode .login-btn:hover,
        body.dark-mode .register-btn:hover,
        body.dark-mode .save-btn:hover,
        body.dark-mode .upload-btn:hover,
        body.dark-mode .submit-post-btn:hover,
        body.dark-mode .btn-search:hover,
        body.dark-mode .modal-save-btn:hover,
        body.dark-mode .btn-next-step:hover,
        body.dark-mode .btn-confirm-logout:hover {
            background: linear-gradient(135deg, #fdb813, #f59e0b) !important;
            color: #1e1038 !important;
        }

        body.dark-mode .btn-reset,
        body.dark-mode .download-btn,
        body.dark-mode .add-student-btn,
        body.dark-mode .add-reservation-btn,
        body.dark-mode .btn-feedback,
        body.dark-mode .btn-submit-reservation {
            background: linear-gradient(135deg, #fdb813, #f59e0b) !important;
            color: #1e1038 !important;
        }

        body.dark-mode .btn-reject,
        body.dark-mode .btn-logout,
        body.dark-mode .delete-confirm-btn,
        body.dark-mode .delete-student-btn {
            background: #dc2626 !important;
            color: #ffffff !important;
        }

        body.dark-mode .btn-approve {
            background: #16a34a !important;
            color: #ffffff !important;
        }

        /* =====================================================
           BADGES
        ===================================================== */

        body.dark-mode .id-badge,
        body.dark-mode .lab-badge,
        body.dark-mode .badge-lab,
        body.dark-mode .pc-number-badge,
        body.dark-mode .course-badge,
        body.dark-mode .date-badge,
        body.dark-mode .time-badge,
        body.dark-mode .waiting-badge,
        body.dark-mode .criteria {
            background: rgba(124, 58, 237, 0.20) !important;
            color: #ddd6fe !important;
            border: 1px solid rgba(167, 139, 250, 0.22) !important;
        }

        body.dark-mode .purpose-badge,
        body.dark-mode .badge-purpose,
        body.dark-mode .badge-pending {
            background: rgba(253, 184, 19, 0.15) !important;
            color: #fde68a !important;
            border: 1px solid rgba(253, 184, 19, 0.24) !important;
        }

        body.dark-mode .badge-approved,
        body.dark-mode .status-active,
        body.dark-mode .status-complete,
        body.dark-mode .badge-done,
        body.dark-mode .badge-points,
        body.dark-mode .level-badge {
            background: rgba(22, 163, 74, 0.16) !important;
            color: #86efac !important;
            border: 1px solid rgba(134, 239, 172, 0.22) !important;
        }

        body.dark-mode .badge-rejected,
        body.dark-mode .active-badge {
            background: rgba(220, 38, 38, 0.18) !important;
            color: #fca5a5 !important;
            border: 1px solid rgba(252, 165, 165, 0.22) !important;
        }

        /* =====================================================
           NOTIFICATIONS / DROPDOWNS
        ===================================================== */

        body.dark-mode .dropdown-menu,
        body.dark-mode .notification-menu {
            background: #0f172a !important;
            border: 1px solid rgba(148, 163, 184, 0.26) !important;
            box-shadow: 0 20px 45px rgba(0, 0, 0, 0.55) !important;
        }

        body.dark-mode .dropdown-menu a,
        body.dark-mode .notif-item {
            background: #0f172a !important;
            color: #e2e8f0 !important;
            border-bottom: 1px solid rgba(148, 163, 184, 0.16) !important;
        }

        body.dark-mode .dropdown-menu a:hover,
        body.dark-mode .notif-item:hover {
            background: rgba(75, 44, 128, 0.35) !important;
            color: #fdb813 !important;
        }

        /* =====================================================
           MODALS
        ===================================================== */

        body.dark-mode .modal,
        body.dark-mode .modal-overlay,
        body.dark-mode .modal-bg,
        body.dark-mode .reservation-modal-overlay,
        body.dark-mode .admin-search-overlay,
        body.dark-mode .ccs-modal-overlay,
        body.dark-mode .delete-alert-overlay,
        body.dark-mode .add-modal-overlay {
            background: rgba(0, 0, 0, 0.78) !important;
            backdrop-filter: blur(10px) !important;
        }

        body.dark-mode .modal-content,
        body.dark-mode .modal-box,
        body.dark-mode .reservation-modal,
        body.dark-mode .add-modal,
        body.dark-mode .delete-alert-modal,
        body.dark-mode .admin-search-modal,
        body.dark-mode .ccs-modal-card {
            background: linear-gradient(180deg, #1e293b, #0f172a) !important;
            color: #f8fafc !important;
            border: 1px solid rgba(148, 163, 184, 0.28) !important;
        }

        body.dark-mode .modal-header,
        body.dark-mode .modal-box-header,
        body.dark-mode .reservation-modal-header,
        body.dark-mode .add-modal-header,
        body.dark-mode .admin-search-header,
        body.dark-mode .ccs-modal-header {
            background: linear-gradient(135deg, #2d1a4d, #08040f) !important;
            color: #ffffff !important;
        }
            /* =====================================================
   FIX: HISTORY PAGE DATATABLE DARK MODE
===================================================== */

body.dark-mode.student-history-page .history-card,
body.dark-mode.student-history-page .dataTables_wrapper,
body.dark-mode.student-history-page .table-wrap {
    background: linear-gradient(180deg, #151827, #0f172a) !important;
    color: #f8fafc !important;
}

body.dark-mode.student-history-page table.dataTable,
body.dark-mode.student-history-page table.dataTable tbody,
body.dark-mode.student-history-page table.dataTable tbody tr,
body.dark-mode.student-history-page table.dataTable.display tbody tr,
body.dark-mode.student-history-page table.dataTable.stripe tbody tr {
    background: #0f172a !important;
    color: #f8fafc !important;
}

body.dark-mode.student-history-page table.dataTable tbody tr.odd,
body.dark-mode.student-history-page table.dataTable.display tbody tr.odd,
body.dark-mode.student-history-page table.dataTable.stripe tbody tr.odd {
    background: #101827 !important;
}

body.dark-mode.student-history-page table.dataTable tbody tr.even,
body.dark-mode.student-history-page table.dataTable.display tbody tr.even,
body.dark-mode.student-history-page table.dataTable.stripe tbody tr.even {
    background: #182235 !important;
}

body.dark-mode.student-history-page table.dataTable tbody tr.odd td,
body.dark-mode.student-history-page table.dataTable tbody tr.even td,
body.dark-mode.student-history-page table.dataTable.display tbody tr.odd td,
body.dark-mode.student-history-page table.dataTable.display tbody tr.even td,
body.dark-mode.student-history-page table.dataTable.stripe tbody tr.odd td,
body.dark-mode.student-history-page table.dataTable.stripe tbody tr.even td {
    background: inherit !important;
    color: #f8fafc !important;
    border-bottom: 1px solid rgba(148, 163, 184, 0.22) !important;
}

body.dark-mode.student-history-page table.dataTable tbody tr:hover,
body.dark-mode.student-history-page table.dataTable tbody tr:hover td {
    background: rgba(75, 44, 128, 0.45) !important;
    color: #ffffff !important;
}

body.dark-mode.student-history-page .dataTables_length,
body.dark-mode.student-history-page .dataTables_filter,
body.dark-mode.student-history-page .dataTables_info,
body.dark-mode.student-history-page .dataTables_paginate {
    color: #f8fafc !important;
}

body.dark-mode.student-history-page .dataTables_length select,
body.dark-mode.student-history-page .dataTables_filter input {
    background: #020617 !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    border: 1px solid rgba(253, 184, 19, 0.45) !important;
}

body.dark-mode.student-history-page .dataTables_wrapper .dataTables_paginate .paginate_button {
    background: #374151 !important;
    color: #f8fafc !important;
    border: none !important;
}

body.dark-mode.student-history-page .dataTables_wrapper .dataTables_paginate .paginate_button.current {
    background: #fdb813 !important;
    color: #1e1038 !important;
    box-shadow: 0 0 18px rgba(253, 184, 19, 0.35) !important;
}

body.dark-mode.student-history-page .dataTables_wrapper .dataTables_paginate .paginate_button.disabled {
    background: #4b5563 !important;
    color: #cbd5e1 !important;
    opacity: 0.55 !important;
}

/* Fix pale badges inside history table */
body.dark-mode.student-history-page .id-badge,
body.dark-mode.student-history-page .lab-badge {
    background: rgba(124, 58, 237, 0.28) !important;
    color: #ffffff !important;
    border: 1px solid rgba(167, 139, 250, 0.35) !important;
}

body.dark-mode.student-history-page .purpose-badge {
    background: rgba(253, 184, 19, 0.20) !important;
    color: #fde68a !important;
    border: 1px solid rgba(253, 184, 19, 0.35) !important;
}

body.dark-mode.student-history-page .status-complete,
body.dark-mode.student-history-page .badge-done {
    background: rgba(22, 163, 74, 0.22) !important;
    color: #bbf7d0 !important;
    border: 1px solid rgba(134, 239, 172, 0.35) !important;
}


        /* =====================================================
        FIX: EDIT PROFILE INPUTS + PHOTO CARD DARK MODE
        ===================================================== */

        body.dark-mode.student-edit-page .edit-profile-layout,
        body.dark-mode.student-edit-page .info-card,
        body.dark-mode.student-edit-page .student-card {
            background: transparent !important;
            color: #f8fafc !important;
        }

        body.dark-mode.student-edit-page .info-card,
        body.dark-mode.student-edit-page .student-card {
            background: linear-gradient(180deg, #1e293b, #0f172a) !important;
            border: 1px solid rgba(148, 163, 184, 0.28) !important;
            box-shadow:
                0 24px 70px rgba(0, 0, 0, 0.50),
                0 0 24px rgba(124, 58, 237, 0.12) !important;
        }

        body.dark-mode.student-edit-page .info-card-header,
        body.dark-mode.student-edit-page .student-card-header {
            background:
                radial-gradient(circle at top right, rgba(253, 184, 19, 0.18), transparent 32%),
                linear-gradient(135deg, #2d1a4d, #08040f) !important;
            color: #ffffff !important;
            border-bottom: 1px solid rgba(253, 184, 19, 0.20) !important;
        }

        body.dark-mode.student-edit-page .info-card-body,
        body.dark-mode.student-edit-page .student-card-body {
            background: linear-gradient(180deg, rgba(30, 41, 59, 0.45), rgba(15, 23, 42, 0.70)) !important;
            color: #f8fafc !important;
        }

        /* Fix ALL edit profile inputs */
        body.dark-mode.student-edit-page input,
        body.dark-mode.student-edit-page select,
        body.dark-mode.student-edit-page textarea,
        body.dark-mode.student-edit-page .field-input,
        body.dark-mode.student-edit-page .profile-input {
            background: #020617 !important;
            color: #f8fafc !important;
            -webkit-text-fill-color: #f8fafc !important;
            caret-color: #f8fafc !important;
            border: 1.8px solid rgba(148, 163, 184, 0.42) !important;
            box-shadow: none !important;
        }

        /* Make readonly ID number readable, not white */
        body.dark-mode.student-edit-page input[readonly],
        body.dark-mode.student-edit-page .field-input[readonly],
        body.dark-mode.student-edit-page .readonly-input {
            background: #111827 !important;
            color: #cbd5e1 !important;
            -webkit-text-fill-color: #cbd5e1 !important;
            border: 1.8px solid rgba(253, 184, 19, 0.35) !important;
            cursor: not-allowed !important;
        }

        body.dark-mode.student-edit-page input:focus,
        body.dark-mode.student-edit-page select:focus,
        body.dark-mode.student-edit-page textarea:focus,
        body.dark-mode.student-edit-page .field-input:focus,
        body.dark-mode.student-edit-page .profile-input:focus {
            border-color: #fdb813 !important;
            box-shadow:
                0 0 0 4px rgba(253, 184, 19, 0.12),
                0 0 20px rgba(253, 184, 19, 0.12) !important;
        }

        body.dark-mode.student-edit-page .field-label,
        body.dark-mode.student-edit-page label {
            color: #ffffff !important;
            text-shadow: 0 0 8px rgba(253, 184, 19, 0.16) !important;
        }

        body.dark-mode.student-edit-page .avatar-name,
        body.dark-mode.student-edit-page .profile-name {
            color: #ffffff !important;
        }

        body.dark-mode.student-edit-page .avatar-id,
        body.dark-mode.student-edit-page .upload-hint {
            color: #dbeafe !important;
        }

        /* Fix choose photo button */
        body.dark-mode.student-edit-page .upload-label {
            background: #ffffff !important;
            color: #4b2c80 !important;
            border: 2px dashed #7c3aed !important;
            font-weight: 950 !important;
        }

        body.dark-mode.student-edit-page .upload-label:hover {
            background: #f7f2ff !important;
            color: #2d1a4d !important;
        }

        /* Save/upload buttons */
        body.dark-mode.student-edit-page .upload-btn,
        body.dark-mode.student-edit-page .save-btn {
            background: linear-gradient(135deg, #7c3aed, #4b2c80) !important;
            color: #ffffff !important;
            box-shadow: 0 14px 30px rgba(124, 58, 237, 0.28) !important;
        }

        body.dark-mode.student-edit-page .upload-btn:hover,
        body.dark-mode.student-edit-page .save-btn:hover {
            background: linear-gradient(135deg, #fdb813, #f59e0b) !important;
            color: #1e1038 !important;
        }
        /* =====================================================
        TRUE FINAL FIX - RESERVATION PC CARDS DARK MODE
        Put inside darkmode.js darkModeCSS, not only style.css
        ===================================================== */

        body.dark-mode.student-reservation-page .pc-selection-header h3,
        body.dark-mode.student-reservation-page .pc-selection-header p {
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
        }

        body.dark-mode.student-reservation-page .pc-legend,
        body.dark-mode.student-reservation-page .pc-legend span {
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
        }

        /* Main PC card - available */
        body.dark-mode.student-reservation-page .pc-grid .pc-card,
        body.dark-mode.student-reservation-page .pc-card {
            background: rgba(22, 163, 74, 0.24) !important;
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
            border: 2px solid #22c55e !important;
            opacity: 1 !important;
            box-shadow:
                0 10px 22px rgba(0, 0, 0, 0.25),
                0 0 14px rgba(34, 197, 94, 0.20) !important;
        }

        /* Force icon + PC text readable */
        body.dark-mode.student-reservation-page .pc-grid .pc-card *,
        body.dark-mode.student-reservation-page .pc-card *,
        body.dark-mode.student-reservation-page .pc-card i,
        body.dark-mode.student-reservation-page .pc-card span {
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
            opacity: 1 !important;
            visibility: visible !important;
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.35) !important;
        }

        /* Hover */
        body.dark-mode.student-reservation-page .pc-card:hover {
            background: rgba(22, 163, 74, 0.36) !important;
            border-color: #86efac !important;
            transform: translateY(-2px) !important;
        }

        /* Unavailable */
        body.dark-mode.student-reservation-page .pc-card.unavailable {
            background: rgba(220, 38, 38, 0.25) !important;
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
            border: 2px solid #ef4444 !important;
            opacity: 1 !important;
            cursor: not-allowed !important;
        }

        body.dark-mode.student-reservation-page .pc-card.unavailable *,
        body.dark-mode.student-reservation-page .pc-card.unavailable i,
        body.dark-mode.student-reservation-page .pc-card.unavailable span {
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
        }

        /* Selected */
        body.dark-mode.student-reservation-page .pc-card.selected {
            background: linear-gradient(135deg, #7c3aed, #4b2c80) !important;
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
            border: 2px solid #fdb813 !important;
            box-shadow:
                0 14px 30px rgba(124, 58, 237, 0.34),
                0 0 24px rgba(253, 184, 19, 0.28) !important;
        }

        body.dark-mode.student-reservation-page .pc-card.selected *,
        body.dark-mode.student-reservation-page .pc-card.selected i,
        body.dark-mode.student-reservation-page .pc-card.selected span {
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
        }

        /* Purpose / application select readability */
        body.dark-mode.student-reservation-page #reservationPurpose,
        body.dark-mode.student-reservation-page #reservationLab {
            background-color: #020617 !important;
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
            border: 2px solid #fdb813 !important;
        }

        body.dark-mode.student-reservation-page #reservationPurpose option,
        body.dark-mode.student-reservation-page #reservationLab option {
            background: #020617 !important;
            color: #ffffff !important;
        }

        /* Bottom footer still dark */
        body.dark-mode.student-reservation-page .modal-footer-actions {
            background: #111827 !important;
            border-top: 1px solid rgba(148, 163, 184, 0.24) !important;
        }

        /* =====================================================
   GLOBAL MODAL DARK MODE FIX
   Applies to all modals when body has .dark-mode
===================================================== */

/* Modal overlays */
body.dark-mode .modal,
body.dark-mode .modal-overlay,
body.dark-mode .modal-bg,
body.dark-mode .ccs-modal-overlay,
body.dark-mode .admin-search-overlay,
body.dark-mode .delete-alert-overlay,
body.dark-mode .add-modal-overlay,
body.dark-mode .reservation-modal-overlay,
body.dark-mode .reservation-success-overlay {
    background: rgba(0, 0, 0, 0.78) !important;
    backdrop-filter: blur(10px) !important;
}

/* Modal cards / boxes */
body.dark-mode .modal-content,
body.dark-mode .modal-box,
body.dark-mode .ccs-modal-card,
body.dark-mode .admin-search-modal,
body.dark-mode .delete-alert-modal,
body.dark-mode .add-modal,
body.dark-mode .reservation-modal,
body.dark-mode .reservation-success-card {
    background: linear-gradient(180deg, #1e293b, #0f172a) !important;
    color: #f8fafc !important;
    border: 1px solid rgba(148, 163, 184, 0.30) !important;
    box-shadow:
        0 30px 90px rgba(0, 0, 0, 0.62),
        0 0 30px rgba(124, 58, 237, 0.16) !important;
}

/* Modal headers */
body.dark-mode .modal-header,
body.dark-mode .modal-box-header,
body.dark-mode .ccs-modal-header,
body.dark-mode .admin-search-header,
body.dark-mode .add-modal-header,
body.dark-mode .reservation-modal-header {
    background:
        radial-gradient(circle at top right, rgba(253, 184, 19, 0.18), transparent 32%),
        linear-gradient(135deg, #2d1a4d, #08040f) !important;
    color: #ffffff !important;
    border-bottom: 1px solid rgba(253, 184, 19, 0.20) !important;
}

/* Modal body */
body.dark-mode .modal-body,
body.dark-mode .modal-box-body,
body.dark-mode .ccs-modal-body,
body.dark-mode .admin-search-body,
body.dark-mode .add-modal-body,
body.dark-mode .reservation-modal-body {
    background: transparent !important;
    color: #f8fafc !important;
}

/* Modal titles and text */
body.dark-mode .modal-content h1,
body.dark-mode .modal-content h2,
body.dark-mode .modal-content h3,
body.dark-mode .modal-box h1,
body.dark-mode .modal-box h2,
body.dark-mode .modal-box h3,
body.dark-mode .ccs-modal-card h1,
body.dark-mode .ccs-modal-card h2,
body.dark-mode .ccs-modal-card h3,
body.dark-mode .reservation-success-card h1,
body.dark-mode .reservation-success-card h2,
body.dark-mode .reservation-success-card h3,
body.dark-mode .reservation-modal h1,
body.dark-mode .reservation-modal h2,
body.dark-mode .reservation-modal h3 {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    text-shadow: 0 0 14px rgba(253, 184, 19, 0.16) !important;
}

body.dark-mode .modal-content p,
body.dark-mode .modal-content span,
body.dark-mode .modal-content small,
body.dark-mode .modal-box p,
body.dark-mode .modal-box span,
body.dark-mode .modal-box small,
body.dark-mode .ccs-modal-card p,
body.dark-mode .ccs-modal-card span,
body.dark-mode .ccs-modal-card small,
body.dark-mode .reservation-success-card p,
body.dark-mode .reservation-success-card span,
body.dark-mode .reservation-success-card small {
    color: #dbeafe !important;
    -webkit-text-fill-color: #dbeafe !important;
}

/* Success modal icon */
body.dark-mode .reservation-success-icon,
body.dark-mode .ccs-modal-header i {
    background: rgba(22, 163, 74, 0.18) !important;
    color: #22c55e !important;
    -webkit-text-fill-color: #22c55e !important;
    box-shadow:
        0 0 24px rgba(34, 197, 94, 0.24),
        0 14px 30px rgba(0, 0, 0, 0.30) !important;
}

/* Inputs inside modals */
body.dark-mode .modal-content input,
body.dark-mode .modal-content select,
body.dark-mode .modal-content textarea,
body.dark-mode .modal-box input,
body.dark-mode .modal-box select,
body.dark-mode .modal-box textarea,
body.dark-mode .reservation-modal input,
body.dark-mode .reservation-modal select,
body.dark-mode .reservation-modal textarea,
body.dark-mode .add-modal input,
body.dark-mode .add-modal select,
body.dark-mode .add-modal textarea,
body.dark-mode .admin-search-modal input,
body.dark-mode .admin-search-modal select,
body.dark-mode .admin-search-modal textarea {
    background: #020617 !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    border: 1.8px solid rgba(148, 163, 184, 0.42) !important;
    caret-color: #f8fafc !important;
}

body.dark-mode .modal-content input::placeholder,
body.dark-mode .modal-content textarea::placeholder,
body.dark-mode .modal-box input::placeholder,
body.dark-mode .modal-box textarea::placeholder,
body.dark-mode .reservation-modal input::placeholder,
body.dark-mode .reservation-modal textarea::placeholder {
    color: #94a3b8 !important;
    -webkit-text-fill-color: #94a3b8 !important;
}

/* Modal footer */
body.dark-mode .modal-footer,
body.dark-mode .modal-box-footer,
body.dark-mode .add-modal-footer,
body.dark-mode .delete-alert-footer,
body.dark-mode .modal-footer-actions {
    background: #111827 !important;
    color: #f8fafc !important;
    border-top: 1px solid rgba(148, 163, 184, 0.24) !important;
}

/* Primary modal buttons */
body.dark-mode .reservation-success-btn,
body.dark-mode .ccs-btn-proceed,
body.dark-mode .btn-confirm-logout,
body.dark-mode .modal-save-btn,
body.dark-mode .btn-next-step,
body.dark-mode .btn-submit-reservation,
body.dark-mode .submit-btn {
    background: linear-gradient(135deg, #7c3aed, #4b2c80) !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    border: none !important;
    box-shadow: 0 14px 30px rgba(124, 58, 237, 0.28) !important;
}

body.dark-mode .reservation-success-btn:hover,
body.dark-mode .ccs-btn-proceed:hover,
body.dark-mode .btn-confirm-logout:hover,
body.dark-mode .modal-save-btn:hover,
body.dark-mode .btn-next-step:hover,
body.dark-mode .btn-submit-reservation:hover,
body.dark-mode .submit-btn:hover {
    background: linear-gradient(135deg, #fdb813, #f59e0b) !important;
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
}

/* Cancel / close buttons */
body.dark-mode .close-btn,
body.dark-mode .close-modal,
body.dark-mode .modal-close-btn,
body.dark-mode .reservation-modal-close,
body.dark-mode .add-modal-close,
body.dark-mode .admin-search-close,
body.dark-mode .delete-cancel-btn,
body.dark-mode .btn-cancel,
body.dark-mode .modal-cancel-btn,
body.dark-mode .btn-back-step {
    background: rgba(255, 255, 255, 0.12) !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
}

body.dark-mode .close-btn:hover,
body.dark-mode .close-modal:hover,
body.dark-mode .modal-close-btn:hover,
body.dark-mode .reservation-modal-close:hover,
body.dark-mode .add-modal-close:hover,
body.dark-mode .admin-search-close:hover,
body.dark-mode .delete-cancel-btn:hover,
body.dark-mode .btn-cancel:hover,
body.dark-mode .modal-cancel-btn:hover,
body.dark-mode .btn-back-step:hover {
    background: #fdb813 !important;
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
}
    /* =====================================================
   ADMIN SEARCH MODAL DARK MODE FIX
===================================================== */

body.dark-mode .admin-search-overlay,
body.dark-mode #searchModal {
    background: rgba(0, 0, 0, 0.78) !important;
    backdrop-filter: blur(10px) !important;
}

body.dark-mode .admin-search-modal,
body.dark-mode #searchModal .admin-search-modal {
    background: linear-gradient(180deg, #1e293b, #0f172a) !important;
    color: #f8fafc !important;
    border: 1px solid rgba(148, 163, 184, 0.30) !important;
    box-shadow:
        0 30px 90px rgba(0, 0, 0, 0.62),
        0 0 30px rgba(124, 58, 237, 0.16) !important;
}

body.dark-mode .admin-search-header,
body.dark-mode #searchModal .admin-search-header {
    background:
        radial-gradient(circle at top right, rgba(253, 184, 19, 0.18), transparent 32%),
        linear-gradient(135deg, #2d1a4d, #08040f) !important;
    color: #ffffff !important;
    border-bottom: 1px solid rgba(253, 184, 19, 0.20) !important;
}

body.dark-mode .admin-search-header *,
body.dark-mode #searchModal .admin-search-header * {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
}

body.dark-mode .admin-search-body,
body.dark-mode #searchModal .admin-search-body {
    background: #111827 !important;
    color: #f8fafc !important;
}

body.dark-mode .admin-search-label,
body.dark-mode #searchModal .admin-search-label {
    color: #fdb813 !important;
    -webkit-text-fill-color: #fdb813 !important;
    font-weight: 950 !important;
    letter-spacing: 0.8px !important;
}

body.dark-mode #idSearchInput,
body.dark-mode #searchModal #idSearchInput {
    background: #020617 !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    caret-color: #f8fafc !important;
    border: 2px solid rgba(253, 184, 19, 0.60) !important;
    box-shadow:
        0 0 0 4px rgba(253, 184, 19, 0.10),
        0 14px 28px rgba(0, 0, 0, 0.28) !important;
}

body.dark-mode #idSearchInput::placeholder,
body.dark-mode #searchModal #idSearchInput::placeholder {
    color: #94a3b8 !important;
    -webkit-text-fill-color: #94a3b8 !important;
    opacity: 1 !important;
}

body.dark-mode #idSearchInput:focus,
body.dark-mode #searchModal #idSearchInput:focus {
    border-color: #fdb813 !important;
    box-shadow:
        0 0 0 4px rgba(253, 184, 19, 0.18),
        0 0 24px rgba(253, 184, 19, 0.16) !important;
}

/* Student cards inside admin search */
body.dark-mode #studentsList,
body.dark-mode #searchModal #studentsList {
    background: transparent !important;
}

body.dark-mode .student-result-card,
body.dark-mode .student-card-option,
body.dark-mode .search-student-card,
body.dark-mode #studentsList .student-card,
body.dark-mode #studentsList > div,
body.dark-mode #searchModal #studentsList > div {
    background: #0f172a !important;
    color: #f8fafc !important;
    border: 1px solid rgba(148, 163, 184, 0.28) !important;
    box-shadow:
        0 18px 38px rgba(0, 0, 0, 0.35),
        0 0 18px rgba(124, 58, 237, 0.10) !important;
}

/* Student names */
body.dark-mode #studentsList h1,
body.dark-mode #studentsList h2,
body.dark-mode #studentsList h3,
body.dark-mode #studentsList h4,
body.dark-mode #studentsList strong,
body.dark-mode #studentsList .student-name,
body.dark-mode #studentsList .student-card-name,
body.dark-mode #studentsList .search-student-name {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    text-shadow: none !important;
}

/* Student card small text */
body.dark-mode #studentsList p,
body.dark-mode #studentsList span,
body.dark-mode #studentsList small,
body.dark-mode #studentsList .student-id,
body.dark-mode #studentsList .student-sessions,
body.dark-mode #studentsList .remaining-sessions {
    color: #cbd5e1 !important;
    -webkit-text-fill-color: #cbd5e1 !important;
}

/* Student ID pill */
body.dark-mode #studentsList .id-badge,
body.dark-mode #studentsList .student-id-badge,
body.dark-mode #studentsList .search-id-badge {
    background: rgba(253, 184, 19, 0.16) !important;
    color: #fde68a !important;
    -webkit-text-fill-color: #fde68a !important;
    border: 1px solid rgba(253, 184, 19, 0.32) !important;
}

/* Avatar circle */
body.dark-mode #studentsList .student-avatar,
body.dark-mode #studentsList .avatar,
body.dark-mode #studentsList .student-initials,
body.dark-mode #studentsList .search-avatar {
    background: linear-gradient(135deg, #4b2c80, #fdb813) !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    border: 3px solid #fdb813 !important;
    box-shadow: 0 0 18px rgba(253, 184, 19, 0.22) !important;
}

/* Avatar image */
body.dark-mode #studentsList img {
    border: 3px solid #fdb813 !important;
    box-shadow: 0 0 18px rgba(253, 184, 19, 0.22) !important;
}

/* Select student button */
body.dark-mode #studentsList button,
body.dark-mode #studentsList .select-student-btn,
body.dark-mode #studentsList .admin-select-student-btn {
    background: linear-gradient(135deg, #7c3aed, #4b2c80) !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    border: none !important;
    box-shadow: 0 12px 26px rgba(124, 58, 237, 0.24) !important;
}

body.dark-mode #studentsList button:hover,
body.dark-mode #studentsList .select-student-btn:hover,
body.dark-mode #studentsList .admin-select-student-btn:hover {
    background: linear-gradient(135deg, #fdb813, #f59e0b) !important;
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
}

/* Close button */
body.dark-mode .admin-search-close,
body.dark-mode #searchModal .admin-search-close {
    background: rgba(255, 255, 255, 0.12) !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
}

body.dark-mode .admin-search-close:hover,
body.dark-mode #searchModal .admin-search-close:hover {
    background: #fdb813 !important;
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
}

/* No results */
body.dark-mode .admin-no-results,
body.dark-mode #noResults {
    color: #cbd5e1 !important;
    -webkit-text-fill-color: #cbd5e1 !important;
    background: #0f172a !important;
    border: 1px solid rgba(148, 163, 184, 0.24) !important;
}

body.dark-mode .admin-no-results i,
body.dark-mode #noResults i {
    color: #fdb813 !important;
    -webkit-text-fill-color: #fdb813 !important;
}
/* =====================================================
   ADMIN STUDENTS PAGE DARK MODE FIX
===================================================== */

/* Main students card/table container */
body.dark-mode.admin-students-page .students-card,
body.dark-mode.admin-students-page .student-table-card,
body.dark-mode.admin-students-page .records-card,
body.dark-mode.admin-students-page .dataTables_wrapper {
    background: linear-gradient(180deg, #1e293b, #0f172a) !important;
    color: #f8fafc !important;
    border: 1px solid rgba(148, 163, 184, 0.28) !important;
    box-shadow:
        0 24px 70px rgba(0, 0, 0, 0.50),
        0 0 24px rgba(124, 58, 237, 0.12) !important;
}

/* Student Records label */
body.dark-mode.admin-students-page .section-label,
body.dark-mode.admin-students-page .table-label,
body.dark-mode.admin-students-page .student-records-label,
body.dark-mode.admin-students-page .students-card-title {
    background: rgba(253, 184, 19, 0.16) !important;
    color: #fde68a !important;
    -webkit-text-fill-color: #fde68a !important;
    border: 1px solid rgba(253, 184, 19, 0.30) !important;
}

/* DataTables controls */
body.dark-mode.admin-students-page .dataTables_length,
body.dark-mode.admin-students-page .dataTables_filter,
body.dark-mode.admin-students-page .dataTables_info,
body.dark-mode.admin-students-page .dataTables_paginate,
body.dark-mode.admin-students-page .dataTables_length label,
body.dark-mode.admin-students-page .dataTables_filter label {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    font-weight: 900 !important;
}

body.dark-mode.admin-students-page .dataTables_length select,
body.dark-mode.admin-students-page .dataTables_filter input,
body.dark-mode.admin-students-page #studentsTable_filter input {
    background: #020617 !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    border: 1.8px solid rgba(253, 184, 19, 0.45) !important;
    border-radius: 12px !important;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.25) !important;
}

body.dark-mode.admin-students-page .dataTables_filter input::placeholder,
body.dark-mode.admin-students-page #studentsTable_filter input::placeholder {
    color: #94a3b8 !important;
    -webkit-text-fill-color: #94a3b8 !important;
}

/* Table */
body.dark-mode.admin-students-page table,
body.dark-mode.admin-students-page #studentsTable,
body.dark-mode.admin-students-page table.dataTable {
    background: #0f172a !important;
    color: #f8fafc !important;
    border-collapse: separate !important;
    border-spacing: 0 !important;
}

/* Header */
body.dark-mode.admin-students-page #studentsTable thead th,
body.dark-mode.admin-students-page table.dataTable thead th,
body.dark-mode.admin-students-page table thead th {
    background: #1e1038 !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    border-bottom: 1px solid rgba(253, 184, 19, 0.22) !important;
    font-weight: 950 !important;
}

/* Sort arrows */
body.dark-mode.admin-students-page table.dataTable thead .sorting:before,
body.dark-mode.admin-students-page table.dataTable thead .sorting:after,
body.dark-mode.admin-students-page table.dataTable thead .sorting_asc:before,
body.dark-mode.admin-students-page table.dataTable thead .sorting_asc:after,
body.dark-mode.admin-students-page table.dataTable thead .sorting_desc:before,
body.dark-mode.admin-students-page table.dataTable thead .sorting_desc:after {
    color: #fdb813 !important;
    opacity: 0.65 !important;
}

/* Table body cells */
body.dark-mode.admin-students-page #studentsTable tbody td,
body.dark-mode.admin-students-page table.dataTable tbody td,
body.dark-mode.admin-students-page table tbody td {
    background: #0f172a !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    border-bottom: 1px solid rgba(148, 163, 184, 0.18) !important;
}

/* Alternate rows */
body.dark-mode.admin-students-page #studentsTable tbody tr:nth-child(even) td,
body.dark-mode.admin-students-page table.dataTable tbody tr:nth-child(even) td {
    background: #1e293b !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
}

/* Hover rows */
body.dark-mode.admin-students-page #studentsTable tbody tr:hover td,
body.dark-mode.admin-students-page table.dataTable tbody tr:hover td {
    background: rgba(75, 44, 128, 0.42) !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
}

/* Fix names that became black */
body.dark-mode.admin-students-page #studentsTable tbody td strong,
body.dark-mode.admin-students-page #studentsTable tbody td span,
body.dark-mode.admin-students-page #studentsTable tbody td div,
body.dark-mode.admin-students-page .student-name-cell,
body.dark-mode.admin-students-page .student-name,
body.dark-mode.admin-students-page .name-cell {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    text-shadow: none !important;
}

/* ID badge */
body.dark-mode.admin-students-page .id-badge {
    background: rgba(124, 58, 237, 0.28) !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    border: 1px solid rgba(167, 139, 250, 0.35) !important;
}

/* Level badge */
body.dark-mode.admin-students-page .level-badge {
    background: rgba(22, 163, 74, 0.20) !important;
    color: #bbf7d0 !important;
    -webkit-text-fill-color: #bbf7d0 !important;
    border: 1px solid rgba(134, 239, 172, 0.30) !important;
}

/* Active status */
body.dark-mode.admin-students-page .status-badge,
body.dark-mode.admin-students-page .active-badge,
body.dark-mode.admin-students-page .badge-active {
    background: rgba(37, 99, 235, 0.16) !important;
    color: #bfdbfe !important;
    -webkit-text-fill-color: #bfdbfe !important;
    border: 1px solid rgba(147, 197, 253, 0.30) !important;
}

body.dark-mode.admin-students-page .status-badge *,
body.dark-mode.admin-students-page .active-badge *,
body.dark-mode.admin-students-page .badge-active * {
    color: #bfdbfe !important;
    -webkit-text-fill-color: #bfdbfe !important;
}

/* Delete button */
body.dark-mode.admin-students-page .delete-student-btn,
body.dark-mode.admin-students-page .btn-delete,
body.dark-mode.admin-students-page .delete-btn {
    background: #dc2626 !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    border: none !important;
    box-shadow: 0 10px 22px rgba(220, 38, 38, 0.22) !important;
}

body.dark-mode.admin-students-page .delete-student-btn *,
body.dark-mode.admin-students-page .btn-delete *,
body.dark-mode.admin-students-page .delete-btn * {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
}

/* Top buttons */
body.dark-mode.admin-students-page .leaderboard-btn,
body.dark-mode.admin-students-page .add-student-btn,
body.dark-mode.admin-students-page .reset-session-btn {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
}

body.dark-mode.admin-students-page .add-student-btn {
    background: linear-gradient(135deg, #fdb813, #f59e0b) !important;
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
}

body.dark-mode.admin-students-page .reset-session-btn {
    background: #dc2626 !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
}

/* Pagination */
body.dark-mode.admin-students-page .dataTables_wrapper .dataTables_paginate .paginate_button {
    background: #1e293b !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    border: 1px solid rgba(148, 163, 184, 0.25) !important;
    border-radius: 10px !important;
}

body.dark-mode.admin-students-page .dataTables_wrapper .dataTables_paginate .paginate_button.current {
    background: #fdb813 !important;
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
    box-shadow: 0 0 18px rgba(253, 184, 19, 0.35) !important;
}

body.dark-mode.admin-students-page .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
    background: #4b2c80 !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
}

/* Empty / no matching records */
body.dark-mode.admin-students-page table.dataTable tbody tr td.dataTables_empty {
    background: #0f172a !important;
    color: #cbd5e1 !important;
    -webkit-text-fill-color: #cbd5e1 !important;
}

/* =====================================================
   ADMIN SIT-IN RECORDS PAGE DARK MODE FIX
===================================================== */

/* Main page containers */
body.dark-mode.admin-sitin-page .sitin-wrapper,
body.dark-mode.admin-sitin-records-page .sitin-wrapper {
    color: #f8fafc !important;
}

/* Statistic cards */
body.dark-mode.admin-sitin-page .stat-badge,
body.dark-mode.admin-sitin-records-page .stat-badge,
body.dark-mode.admin-sitin-page .stat-current,
body.dark-mode.admin-sitin-page .stat-total,
body.dark-mode.admin-sitin-page .stat-out {
    background:
        radial-gradient(circle at top right, rgba(253, 184, 19, 0.14), transparent 35%),
        linear-gradient(135deg, #3b1b6d, #1e293b) !important;
    color: #ffffff !important;
    border: 1px solid rgba(253, 184, 19, 0.22) !important;
    box-shadow:
        0 18px 45px rgba(0, 0, 0, 0.45),
        0 0 22px rgba(253, 184, 19, 0.10) !important;
}

body.dark-mode.admin-sitin-page .stat-icon,
body.dark-mode.admin-sitin-records-page .stat-icon {
    background: rgba(253, 184, 19, 0.14) !important;
    color: #fdb813 !important;
}

body.dark-mode.admin-sitin-page .stat-num,
body.dark-mode.admin-sitin-records-page .stat-num {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
}

body.dark-mode.admin-sitin-page .stat-label,
body.dark-mode.admin-sitin-records-page .stat-label {
    color: #dbeafe !important;
    -webkit-text-fill-color: #dbeafe !important;
}

/* Laboratory Applications card */
body.dark-mode.admin-sitin-page .lab-manager-card,
body.dark-mode.admin-sitin-records-page .lab-manager-card {
    background: linear-gradient(180deg, #1e293b, #0f172a) !important;
    color: #f8fafc !important;
    border: 1px solid rgba(148, 163, 184, 0.28) !important;
    box-shadow:
        0 24px 70px rgba(0, 0, 0, 0.50),
        0 0 24px rgba(124, 58, 237, 0.12) !important;
}

body.dark-mode.admin-sitin-page .lab-manager-header,
body.dark-mode.admin-sitin-records-page .lab-manager-header {
    background:
        radial-gradient(circle at top right, rgba(253, 184, 19, 0.18), transparent 32%),
        linear-gradient(135deg, #2d1a4d, #08040f) !important;
    color: #ffffff !important;
    border-bottom: 1px solid rgba(253, 184, 19, 0.20) !important;
}

body.dark-mode.admin-sitin-page .lab-manager-header *,
body.dark-mode.admin-sitin-records-page .lab-manager-header * {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
}

/* Lab cards */
body.dark-mode.admin-sitin-page .lab-grid,
body.dark-mode.admin-sitin-records-page .lab-grid {
    background: #111827 !important;
}

body.dark-mode.admin-sitin-page .lab-card-btn,
body.dark-mode.admin-sitin-records-page .lab-card-btn {
    background: #0f172a !important;
    color: #f8fafc !important;
    border: 1px solid rgba(148, 163, 184, 0.28) !important;
    box-shadow:
        0 14px 32px rgba(0, 0, 0, 0.30),
        0 0 16px rgba(124, 58, 237, 0.10) !important;
}

body.dark-mode.admin-sitin-page .lab-card-btn:hover,
body.dark-mode.admin-sitin-records-page .lab-card-btn:hover {
    background: rgba(75, 44, 128, 0.42) !important;
    border-color: rgba(253, 184, 19, 0.35) !important;
    transform: translateY(-3px) !important;
}

body.dark-mode.admin-sitin-page .lab-card-title,
body.dark-mode.admin-sitin-records-page .lab-card-title {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
}

body.dark-mode.admin-sitin-page .lab-card-title i,
body.dark-mode.admin-sitin-records-page .lab-card-title i {
    color: #fdb813 !important;
    -webkit-text-fill-color: #fdb813 !important;
}

body.dark-mode.admin-sitin-page .lab-card-count,
body.dark-mode.admin-sitin-records-page .lab-card-count {
    color: #cbd5e1 !important;
    -webkit-text-fill-color: #cbd5e1 !important;
}

/* Active Students in Lab card */
body.dark-mode.admin-sitin-page .records-card,
body.dark-mode.admin-sitin-records-page .records-card {
    background: linear-gradient(180deg, #1e293b, #0f172a) !important;
    color: #f8fafc !important;
    border: 1px solid rgba(148, 163, 184, 0.28) !important;
    box-shadow:
        0 24px 70px rgba(0, 0, 0, 0.50),
        0 0 24px rgba(124, 58, 237, 0.12) !important;
}

body.dark-mode.admin-sitin-page .records-card-header,
body.dark-mode.admin-sitin-records-page .records-card-header {
    background:
        radial-gradient(circle at top right, rgba(253, 184, 19, 0.18), transparent 32%),
        linear-gradient(135deg, #2d1a4d, #08040f) !important;
    color: #ffffff !important;
    border-bottom: 1px solid rgba(253, 184, 19, 0.20) !important;
}

body.dark-mode.admin-sitin-page .records-card-header *,
body.dark-mode.admin-sitin-records-page .records-card-header * {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
}

/* Search bar area */
body.dark-mode.admin-sitin-page .filter-bar,
body.dark-mode.admin-sitin-records-page .filter-bar {
    background: #111827 !important;
    color: #f8fafc !important;
    border-bottom: 1px solid rgba(148, 163, 184, 0.20) !important;
}

body.dark-mode.admin-sitin-page .search-box,
body.dark-mode.admin-sitin-records-page .search-box {
    background: transparent !important;
}

body.dark-mode.admin-sitin-page .search-box i,
body.dark-mode.admin-sitin-records-page .search-box i {
    color: #fdb813 !important;
    -webkit-text-fill-color: #fdb813 !important;
}

body.dark-mode.admin-sitin-page #searchInput,
body.dark-mode.admin-sitin-records-page #searchInput {
    background: #020617 !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    caret-color: #f8fafc !important;
    border: 1.8px solid rgba(253, 184, 19, 0.45) !important;
    border-radius: 14px !important;
    box-shadow:
        0 10px 26px rgba(0, 0, 0, 0.28),
        0 0 18px rgba(253, 184, 19, 0.08) !important;
}

body.dark-mode.admin-sitin-page #searchInput::placeholder,
body.dark-mode.admin-sitin-records-page #searchInput::placeholder {
    color: #94a3b8 !important;
    -webkit-text-fill-color: #94a3b8 !important;
}

/* Table if active students exist */
body.dark-mode.admin-sitin-page table,
body.dark-mode.admin-sitin-records-page table {
    background: #0f172a !important;
    color: #f8fafc !important;
}

body.dark-mode.admin-sitin-page table thead th,
body.dark-mode.admin-sitin-records-page table thead th {
    background: #1e1038 !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    border-bottom: 1px solid rgba(253, 184, 19, 0.22) !important;
}

body.dark-mode.admin-sitin-page table tbody td,
body.dark-mode.admin-sitin-records-page table tbody td {
    background: #0f172a !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    border-bottom: 1px solid rgba(148, 163, 184, 0.18) !important;
}

body.dark-mode.admin-sitin-page table tbody tr:nth-child(even) td,
body.dark-mode.admin-sitin-records-page table tbody tr:nth-child(even) td {
    background: #1e293b !important;
}

body.dark-mode.admin-sitin-page table tbody tr:hover td,
body.dark-mode.admin-sitin-records-page table tbody tr:hover td {
    background: rgba(75, 44, 128, 0.42) !important;
}

/* Empty state */
body.dark-mode.admin-sitin-page .empty-state,
body.dark-mode.admin-sitin-records-page .empty-state {
    background: #0f172a !important;
    color: #cbd5e1 !important;
    -webkit-text-fill-color: #cbd5e1 !important;
}

body.dark-mode.admin-sitin-page .empty-state i,
body.dark-mode.admin-sitin-records-page .empty-state i {
    color: #fdb813 !important;
    -webkit-text-fill-color: #fdb813 !important;
}
    /* =====================================================
   FINAL FIX - ADMIN SIT-IN WHITE STRIP + LAB APP MODAL
===================================================== */

/* ===== FIX WHITE STRIP IN ACTIVE STUDENTS IN LAB ===== */

body.dark-mode.admin-sitin-page .records-card,
body.dark-mode.admin-sitin-page .records-card *,
body.dark-mode.admin-sitin-records-page .records-card,
body.dark-mode.admin-sitin-records-page .records-card * {
    border-color: rgba(148, 163, 184, 0.22) !important;
}

body.dark-mode.admin-sitin-page .records-card,
body.dark-mode.admin-sitin-records-page .records-card {
    background: #0f172a !important;
    color: #f8fafc !important;
}

body.dark-mode.admin-sitin-page .records-card-header,
body.dark-mode.admin-sitin-records-page .records-card-header {
    background:
        radial-gradient(circle at top right, rgba(253, 184, 19, 0.18), transparent 32%),
        linear-gradient(135deg, #2d1a4d, #08040f) !important;
    color: #ffffff !important;
}

body.dark-mode.admin-sitin-page .records-card > .filter-bar,
body.dark-mode.admin-sitin-records-page .records-card > .filter-bar,
body.dark-mode.admin-sitin-page .filter-bar,
body.dark-mode.admin-sitin-records-page .filter-bar {
    background: #111827 !important;
    background-color: #111827 !important;
    color: #f8fafc !important;
    border-bottom: 1px solid rgba(148, 163, 184, 0.22) !important;
}

body.dark-mode.admin-sitin-page .records-card .filter-bar::before,
body.dark-mode.admin-sitin-records-page .records-card .filter-bar::before,
body.dark-mode.admin-sitin-page .records-card .filter-bar::after,
body.dark-mode.admin-sitin-records-page .records-card .filter-bar::after {
    background: #111827 !important;
}

body.dark-mode.admin-sitin-page .records-card .search-box,
body.dark-mode.admin-sitin-records-page .records-card .search-box {
    background: transparent !important;
}

body.dark-mode.admin-sitin-page .records-card .search-box i,
body.dark-mode.admin-sitin-records-page .records-card .search-box i {
    color: #fdb813 !important;
    -webkit-text-fill-color: #fdb813 !important;
}

body.dark-mode.admin-sitin-page .records-card #searchInput,
body.dark-mode.admin-sitin-records-page .records-card #searchInput {
    background: #020617 !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    border: 1.8px solid rgba(253, 184, 19, 0.50) !important;
    box-shadow:
        0 10px 26px rgba(0, 0, 0, 0.30),
        0 0 18px rgba(253, 184, 19, 0.10) !important;
}

body.dark-mode.admin-sitin-page .records-card #searchInput::placeholder,
body.dark-mode.admin-sitin-records-page .records-card #searchInput::placeholder {
    color: #94a3b8 !important;
    -webkit-text-fill-color: #94a3b8 !important;
}

/* Strong catch for the white strip */
body.dark-mode.admin-sitin-page .records-card div[style*="background"],
body.dark-mode.admin-sitin-records-page .records-card div[style*="background"] {
    background: #111827 !important;
}


/* ===== FIX MANAGE LABORATORY APPLICATIONS MODAL ===== */

body.dark-mode.admin-sitin-page #labModal,
body.dark-mode.admin-sitin-records-page #labModal,
body.dark-mode #labModal {
    background: rgba(0, 0, 0, 0.78) !important;
    backdrop-filter: blur(10px) !important;
}

body.dark-mode.admin-sitin-page #labModal .modal-box,
body.dark-mode.admin-sitin-records-page #labModal .modal-box,
body.dark-mode #labModal .modal-box,
body.dark-mode #labModal .lab-modal-box {
    background: linear-gradient(180deg, #1e293b, #0f172a) !important;
    color: #f8fafc !important;
    border: 1px solid rgba(148, 163, 184, 0.30) !important;
    box-shadow:
        0 30px 90px rgba(0, 0, 0, 0.62),
        0 0 30px rgba(124, 58, 237, 0.16) !important;
}

body.dark-mode #labModal .modal-box-header {
    background:
        radial-gradient(circle at top right, rgba(253, 184, 19, 0.18), transparent 32%),
        linear-gradient(135deg, #2d1a4d, #08040f) !important;
    color: #ffffff !important;
    border-bottom: 1px solid rgba(253, 184, 19, 0.20) !important;
}

body.dark-mode #labModal .modal-box-header *,
body.dark-mode #labModal .modal-box-header span,
body.dark-mode #labModal .modal-box-header i {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
}

body.dark-mode #labModal .modal-box-body {
    background: #111827 !important;
    color: #f8fafc !important;
}

body.dark-mode #labModal .modal-box-footer {
    background: #111827 !important;
    color: #f8fafc !important;
    border-top: 1px solid rgba(148, 163, 184, 0.24) !important;
}

/* Lab number pill */
body.dark-mode #labModal .lab-number-display {
    background: rgba(253, 184, 19, 0.16) !important;
    color: #fde68a !important;
    -webkit-text-fill-color: #fde68a !important;
    border: 1px solid rgba(253, 184, 19, 0.32) !important;
}

body.dark-mode #labModal .lab-number-display *,
body.dark-mode #labModal #labModalNumber {
    color: #fde68a !important;
    -webkit-text-fill-color: #fde68a !important;
}

/* Add application input */
body.dark-mode #labModal #labApplicationName,
body.dark-mode #labModal .lab-add-form input,
body.dark-mode #labModal input[type="text"] {
    background: #020617 !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    caret-color: #f8fafc !important;
    border: 1.8px solid rgba(253, 184, 19, 0.45) !important;
    box-shadow:
        0 8px 22px rgba(0, 0, 0, 0.25),
        0 0 16px rgba(253, 184, 19, 0.08) !important;
}

body.dark-mode #labModal #labApplicationName::placeholder,
body.dark-mode #labModal .lab-add-form input::placeholder {
    color: #94a3b8 !important;
    -webkit-text-fill-color: #94a3b8 !important;
    opacity: 1 !important;
}

/* Add button */
body.dark-mode #labModal .btn-add-application {
    background: linear-gradient(135deg, #7c3aed, #4b2c80) !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    border: none !important;
    box-shadow: 0 12px 26px rgba(124, 58, 237, 0.24) !important;
}

body.dark-mode #labModal .btn-add-application:hover {
    background: linear-gradient(135deg, #fdb813, #f59e0b) !important;
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
}

/* Application list box */
body.dark-mode #labModal .application-list,
body.dark-mode #labModal #labApplicationsList {
    background: #0f172a !important;
    color: #f8fafc !important;
    border: 1px solid rgba(148, 163, 184, 0.28) !important;
    border-radius: 16px !important;
    overflow: hidden !important;
}

/* Application rows */
body.dark-mode #labModal .application-item,
body.dark-mode #labModal #labApplicationsList > div,
body.dark-mode #labModal #labApplicationsList li {
    background: #111827 !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    border-bottom: 1px solid rgba(148, 163, 184, 0.22) !important;
}

body.dark-mode #labModal .application-item:nth-child(even),
body.dark-mode #labModal #labApplicationsList > div:nth-child(even),
body.dark-mode #labModal #labApplicationsList li:nth-child(even) {
    background: #1e293b !important;
}

/* Application text */
body.dark-mode #labModal .application-item *,
body.dark-mode #labModal #labApplicationsList *,
body.dark-mode #labModal #labApplicationsList span,
body.dark-mode #labModal #labApplicationsList p,
body.dark-mode #labModal #labApplicationsList strong {
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    opacity: 1 !important;
    text-shadow: none !important;
}

/* Delete buttons */
body.dark-mode #labModal .btn-delete-application,
body.dark-mode #labModal .delete-application-btn,
body.dark-mode #labModal #labApplicationsList button {
    background: #dc2626 !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    border: none !important;
    box-shadow: 0 10px 22px rgba(220, 38, 38, 0.22) !important;
}

body.dark-mode #labModal .btn-delete-application *,
body.dark-mode #labModal .delete-application-btn *,
body.dark-mode #labModal #labApplicationsList button * {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
}

/* Close buttons */
body.dark-mode #labModal .modal-close-btn,
body.dark-mode #labModal .btn-cancel {
    background: rgba(255, 255, 255, 0.12) !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    border: none !important;
}

body.dark-mode #labModal .modal-close-btn:hover,
body.dark-mode #labModal .btn-cancel:hover {
    background: #fdb813 !important;
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
}

/* =====================================================
   ADMIN VIEW SIT-IN RECORDS DARK MODE FIX
===================================================== */

/* Main card/footer area */
body.dark-mode.admin-records-page .records-card,
body.dark-mode.admin-view-sitin-records-page .records-card {
    background: linear-gradient(180deg, #1e293b, #0f172a) !important;
    color: #f8fafc !important;
    border: 1px solid rgba(148, 163, 184, 0.28) !important;
}

/* Pagination white strip */
body.dark-mode.admin-records-page .pagination-wrap,
body.dark-mode.admin-view-sitin-records-page .pagination-wrap,
body.dark-mode.admin-records-page .records-card .pagination-wrap,
body.dark-mode.admin-view-sitin-records-page .records-card .pagination-wrap {
    background: #111827 !important;
    color: #f8fafc !important;
    border-top: 1px solid rgba(148, 163, 184, 0.22) !important;
    box-shadow: none !important;
}

/* Pagination text */
body.dark-mode.admin-records-page .pagination-info,
body.dark-mode.admin-records-page .pagination-info *,
body.dark-mode.admin-view-sitin-records-page .pagination-info,
body.dark-mode.admin-view-sitin-records-page .pagination-info * {
    color: #cbd5e1 !important;
    -webkit-text-fill-color: #cbd5e1 !important;
    opacity: 1 !important;
}

/* Pagination buttons */
body.dark-mode.admin-records-page .pagination-btn,
body.dark-mode.admin-records-page .pagination-number,
body.dark-mode.admin-view-sitin-records-page .pagination-btn,
body.dark-mode.admin-view-sitin-records-page .pagination-number {
    background: #0f172a !important;
    color: #fdb813 !important;
    -webkit-text-fill-color: #fdb813 !important;
    border: 1px solid rgba(253, 184, 19, 0.25) !important;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.22) !important;
}

/* Active page */
body.dark-mode.admin-records-page .pagination-number.active,
body.dark-mode.admin-view-sitin-records-page .pagination-number.active {
    background: linear-gradient(135deg, #7c3aed, #4b2c80) !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    border-color: rgba(167, 139, 250, 0.45) !important;
}

/* Disabled prev */
body.dark-mode.admin-records-page .pagination-btn.disabled,
body.dark-mode.admin-view-sitin-records-page .pagination-btn.disabled {
    background: #1e293b !important;
    color: #64748b !important;
    -webkit-text-fill-color: #64748b !important;
    border-color: rgba(148, 163, 184, 0.16) !important;
    opacity: 0.65 !important;
}

/* Hover */
body.dark-mode.admin-records-page .pagination-btn:not(.disabled):hover,
body.dark-mode.admin-records-page .pagination-number:not(.active):hover,
body.dark-mode.admin-view-sitin-records-page .pagination-btn:not(.disabled):hover,
body.dark-mode.admin-view-sitin-records-page .pagination-number:not(.active):hover {
    background: linear-gradient(135deg, #fdb813, #f59e0b) !important;
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
}

/* Extra catch if the white area is a direct div inside records-card */
body.dark-mode.admin-records-page .records-card > div:last-child,
body.dark-mode.admin-view-sitin-records-page .records-card > div:last-child {
    background-color: #111827 !important;
}

/* Table rows and text */
body.dark-mode.admin-records-page table tbody td,
body.dark-mode.admin-view-sitin-records-page table tbody td {
    background: #0f172a !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    border-bottom: 1px solid rgba(148, 163, 184, 0.18) !important;
}

body.dark-mode.admin-records-page table tbody tr:nth-child(even) td,
body.dark-mode.admin-view-sitin-records-page table tbody tr:nth-child(even) td {
    background: #1e293b !important;
}

body.dark-mode.admin-records-page table tbody tr:hover td,
body.dark-mode.admin-view-sitin-records-page table tbody tr:hover td {
    background: rgba(75, 44, 128, 0.42) !important;
}

/* =====================================================
   ADMIN VIEW SIT-IN RECORDS SEARCH INPUT FIX
===================================================== */

body.dark-mode.admin-records-page .filter-bar,
body.dark-mode.admin-view-sitin-records-page .filter-bar {
    background: #111827 !important;
    color: #f8fafc !important;
    border-bottom: 1px solid rgba(148, 163, 184, 0.22) !important;
}

body.dark-mode.admin-records-page .filter-bar input,
body.dark-mode.admin-view-sitin-records-page .filter-bar input,
body.dark-mode.admin-records-page input[name="search_id"],
body.dark-mode.admin-view-sitin-records-page input[name="search_id"] {
    background: #020617 !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    caret-color: #f8fafc !important;
    border: 2px solid rgba(253, 184, 19, 0.55) !important;
    box-shadow:
        0 0 0 4px rgba(253, 184, 19, 0.10),
        0 10px 24px rgba(0, 0, 0, 0.28) !important;
}

body.dark-mode.admin-records-page .filter-bar input::placeholder,
body.dark-mode.admin-view-sitin-records-page .filter-bar input::placeholder,
body.dark-mode.admin-records-page input[name="search_id"]::placeholder,
body.dark-mode.admin-view-sitin-records-page input[name="search_id"]::placeholder {
    color: #94a3b8 !important;
    -webkit-text-fill-color: #94a3b8 !important;
    opacity: 1 !important;
}

body.dark-mode.admin-records-page .filter-bar input:focus,
body.dark-mode.admin-view-sitin-records-page .filter-bar input:focus,
body.dark-mode.admin-records-page input[name="search_id"]:focus,
body.dark-mode.admin-view-sitin-records-page input[name="search_id"]:focus {
    border-color: #fdb813 !important;
    box-shadow:
        0 0 0 4px rgba(253, 184, 19, 0.18),
        0 0 24px rgba(253, 184, 19, 0.16) !important;
}

/* Search and reset buttons */
body.dark-mode.admin-records-page .btn-search,
body.dark-mode.admin-view-sitin-records-page .btn-search {
    background: linear-gradient(135deg, #7c3aed, #4b2c80) !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    border: none !important;
}

body.dark-mode.admin-records-page .btn-reset,
body.dark-mode.admin-view-sitin-records-page .btn-reset {
    background: linear-gradient(135deg, #fdb813, #f59e0b) !important;
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
    border: none !important;
}

body.dark-mode.admin-records-page .btn-search *,
body.dark-mode.admin-view-sitin-records-page .btn-search * {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
}

body.dark-mode.admin-records-page .btn-reset *,
body.dark-mode.admin-view-sitin-records-page .btn-reset * {
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
}

/* =====================================================
   ADMIN STUDENTS LEADERBOARD MODAL DARK MODE FIX
===================================================== */

/* Overlay */
body.dark-mode.admin-students-page #leaderboardModal,
body.dark-mode.admin-students-page .leaderboard-modal-overlay,
body.dark-mode.admin-students-page .ranking-modal-overlay {
    background: rgba(0, 0, 0, 0.78) !important;
    backdrop-filter: blur(10px) !important;
}

/* Main modal */
body.dark-mode.admin-students-page #leaderboardModal .modal-content,
body.dark-mode.admin-students-page #leaderboardModal .leaderboard-modal,
body.dark-mode.admin-students-page #leaderboardModal .ranking-modal,
body.dark-mode.admin-students-page .leaderboard-modal,
body.dark-mode.admin-students-page .ranking-modal {
    background: linear-gradient(180deg, #1e293b, #0f172a) !important;
    color: #f8fafc !important;
    border: 1px solid rgba(148, 163, 184, 0.30) !important;
    box-shadow:
        0 30px 90px rgba(0, 0, 0, 0.62),
        0 0 30px rgba(124, 58, 237, 0.16) !important;
}

/* Header */
body.dark-mode.admin-students-page #leaderboardModal .modal-header,
body.dark-mode.admin-students-page #leaderboardModal .leaderboard-modal-header,
body.dark-mode.admin-students-page #leaderboardModal .ranking-modal-header {
    background:
        radial-gradient(circle at top right, rgba(253, 184, 19, 0.18), transparent 32%),
        linear-gradient(135deg, #2d1a4d, #08040f) !important;
    color: #ffffff !important;
    border-bottom: 1px solid rgba(253, 184, 19, 0.20) !important;
}

body.dark-mode.admin-students-page #leaderboardModal .modal-header *,
body.dark-mode.admin-students-page #leaderboardModal .leaderboard-modal-header *,
body.dark-mode.admin-students-page #leaderboardModal .ranking-modal-header * {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
}

/* Modal body */
body.dark-mode.admin-students-page #leaderboardModal .modal-body,
body.dark-mode.admin-students-page #leaderboardModal .leaderboard-modal-body,
body.dark-mode.admin-students-page #leaderboardModal .ranking-modal-body {
    background: #111827 !important;
    color: #f8fafc !important;
}

/* Ranking note */
body.dark-mode.admin-students-page #leaderboardModal .ranking-note,
body.dark-mode.admin-students-page #leaderboardModal .leaderboard-note,
body.dark-mode.admin-students-page #leaderboardModal .alert,
body.dark-mode.admin-students-page #leaderboardModal .info-box {
    background: rgba(253, 184, 19, 0.12) !important;
    color: #fde68a !important;
    -webkit-text-fill-color: #fde68a !important;
    border: 1px solid rgba(253, 184, 19, 0.32) !important;
    border-left: 5px solid #fdb813 !important;
}

body.dark-mode.admin-students-page #leaderboardModal .ranking-note *,
body.dark-mode.admin-students-page #leaderboardModal .leaderboard-note *,
body.dark-mode.admin-students-page #leaderboardModal .alert *,
body.dark-mode.admin-students-page #leaderboardModal .info-box * {
    color: #fde68a !important;
    -webkit-text-fill-color: #fde68a !important;
}

/* Table */
body.dark-mode.admin-students-page #leaderboardModal table,
body.dark-mode.admin-students-page #leaderboardModal .leaderboard-table {
    background: #0f172a !important;
    color: #f8fafc !important;
    border-collapse: separate !important;
    border-spacing: 0 !important;
}

/* Table header */
body.dark-mode.admin-students-page #leaderboardModal table thead th,
body.dark-mode.admin-students-page #leaderboardModal .leaderboard-table thead th {
    background: #1e1038 !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    border-bottom: 1px solid rgba(253, 184, 19, 0.22) !important;
    font-weight: 950 !important;
}

/* Table cells */
body.dark-mode.admin-students-page #leaderboardModal table tbody td,
body.dark-mode.admin-students-page #leaderboardModal .leaderboard-table tbody td {
    background: #0f172a !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    border-bottom: 1px solid rgba(148, 163, 184, 0.18) !important;
}

body.dark-mode.admin-students-page #leaderboardModal table tbody tr:nth-child(even) td,
body.dark-mode.admin-students-page #leaderboardModal .leaderboard-table tbody tr:nth-child(even) td {
    background: #111827 !important;
}

body.dark-mode.admin-students-page #leaderboardModal table tbody tr:hover td,
body.dark-mode.admin-students-page #leaderboardModal .leaderboard-table tbody tr:hover td {
    background: rgba(75, 44, 128, 0.42) !important;
}

/* Student name/id text */
body.dark-mode.admin-students-page #leaderboardModal table tbody td strong,
body.dark-mode.admin-students-page #leaderboardModal table tbody td span,
body.dark-mode.admin-students-page #leaderboardModal table tbody td small,
body.dark-mode.admin-students-page #leaderboardModal .student-name,
body.dark-mode.admin-students-page #leaderboardModal .student-id,
body.dark-mode.admin-students-page #leaderboardModal .leaderboard-name {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    text-shadow: none !important;
}

/* Rank circles */
body.dark-mode.admin-students-page #leaderboardModal .rank-badge,
body.dark-mode.admin-students-page #leaderboardModal .rank-circle,
body.dark-mode.admin-students-page #leaderboardModal .rank-number {
    background: rgba(148, 163, 184, 0.20) !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    border: 1px solid rgba(148, 163, 184, 0.32) !important;
}

body.dark-mode.admin-students-page #leaderboardModal .rank-badge.rank-1,
body.dark-mode.admin-students-page #leaderboardModal .rank-circle.rank-1,
body.dark-mode.admin-students-page #leaderboardModal .rank-number.rank-1,
body.dark-mode.admin-students-page #leaderboardModal tbody tr:first-child .rank-badge,
body.dark-mode.admin-students-page #leaderboardModal tbody tr:first-child .rank-circle,
body.dark-mode.admin-students-page #leaderboardModal tbody tr:first-child .rank-number {
    background: linear-gradient(135deg, #fdb813, #f59e0b) !important;
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
    box-shadow: 0 0 18px rgba(253, 184, 19, 0.30) !important;
}

/* Crown icon */
body.dark-mode.admin-students-page #leaderboardModal .rank-badge i,
body.dark-mode.admin-students-page #leaderboardModal .rank-circle i,
body.dark-mode.admin-students-page #leaderboardModal .rank-number i {
    color: inherit !important;
    -webkit-text-fill-color: inherit !important;
}

/* Raw points badge */
body.dark-mode.admin-students-page #leaderboardModal .points-badge,
body.dark-mode.admin-students-page #leaderboardModal .raw-points-badge,
body.dark-mode.admin-students-page #leaderboardModal .badge-points {
    background: rgba(253, 184, 19, 0.16) !important;
    color: #fde68a !important;
    -webkit-text-fill-color: #fde68a !important;
    border: 1px solid rgba(253, 184, 19, 0.30) !important;
}

body.dark-mode.admin-students-page #leaderboardModal .points-badge *,
body.dark-mode.admin-students-page #leaderboardModal .raw-points-badge *,
body.dark-mode.admin-students-page #leaderboardModal .badge-points * {
    color: #fde68a !important;
    -webkit-text-fill-color: #fde68a !important;
}

/* Extra sessions badge */
body.dark-mode.admin-students-page #leaderboardModal .extra-badge,
body.dark-mode.admin-students-page #leaderboardModal .extra-session-badge,
body.dark-mode.admin-students-page #leaderboardModal .badge-extra {
    background: rgba(124, 58, 237, 0.20) !important;
    color: #ddd6fe !important;
    -webkit-text-fill-color: #ddd6fe !important;
    border: 1px solid rgba(167, 139, 250, 0.30) !important;
}

body.dark-mode.admin-students-page #leaderboardModal .extra-badge *,
body.dark-mode.admin-students-page #leaderboardModal .extra-session-badge *,
body.dark-mode.admin-students-page #leaderboardModal .badge-extra * {
    color: #ddd6fe !important;
    -webkit-text-fill-color: #ddd6fe !important;
}

/* Close button */
body.dark-mode.admin-students-page #leaderboardModal .close-btn,
body.dark-mode.admin-students-page #leaderboardModal .modal-close,
body.dark-mode.admin-students-page #leaderboardModal .leaderboard-close {
    background: rgba(255, 255, 255, 0.12) !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    border: none !important;
}

body.dark-mode.admin-students-page #leaderboardModal .close-btn:hover,
body.dark-mode.admin-students-page #leaderboardModal .modal-close:hover,
body.dark-mode.admin-students-page #leaderboardModal .leaderboard-close:hover {
    background: #fdb813 !important;
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
}

/* Scrollbar */
body.dark-mode.admin-students-page #leaderboardModal ::-webkit-scrollbar {
    width: 8px !important;
}

body.dark-mode.admin-students-page #leaderboardModal ::-webkit-scrollbar-track {
    background: #111827 !important;
    border-radius: 999px !important;
}

body.dark-mode.admin-students-page #leaderboardModal ::-webkit-scrollbar-thumb {
    background: #fdb813 !important;
    border-radius: 999px !important;
}

/* =====================================================
   FINAL READABILITY FIX - ADMIN LEADERBOARD POINTS / SESSIONS
===================================================== */

/* Raw Points badge - make darker gold with readable text */
body.dark-mode.admin-students-page #leaderboardModal .points-badge,
body.dark-mode.admin-students-page #leaderboardModal .raw-points-badge,
body.dark-mode.admin-students-page #leaderboardModal .badge-points,
body.dark-mode.admin-students-page #leaderboardModal td:nth-child(4) span,
body.dark-mode.admin-students-page #leaderboardModal td:nth-child(4) .badge {
    background: linear-gradient(135deg, #fdb813, #f59e0b) !important;
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
    border: 1px solid rgba(255, 255, 255, 0.40) !important;
    font-weight: 950 !important;
    text-shadow: none !important;
    box-shadow:
        0 0 16px rgba(253, 184, 19, 0.28),
        0 8px 18px rgba(0, 0, 0, 0.24) !important;
}

body.dark-mode.admin-students-page #leaderboardModal .points-badge *,
body.dark-mode.admin-students-page #leaderboardModal .raw-points-badge *,
body.dark-mode.admin-students-page #leaderboardModal .badge-points *,
body.dark-mode.admin-students-page #leaderboardModal td:nth-child(4) span *,
body.dark-mode.admin-students-page #leaderboardModal td:nth-child(4) .badge * {
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
    font-weight: 950 !important;
    text-shadow: none !important;
}

/* Completed and Current Active numbers */
body.dark-mode.admin-students-page #leaderboardModal td:nth-child(5),
body.dark-mode.admin-students-page #leaderboardModal td:nth-child(6),
body.dark-mode.admin-students-page #leaderboardModal td:nth-child(5) *,
body.dark-mode.admin-students-page #leaderboardModal td:nth-child(6) * {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    font-weight: 950 !important;
    text-shadow: 0 0 10px rgba(253, 184, 19, 0.14) !important;
}

/* Extra Sessions badge */
body.dark-mode.admin-students-page #leaderboardModal .extra-badge,
body.dark-mode.admin-students-page #leaderboardModal .extra-session-badge,
body.dark-mode.admin-students-page #leaderboardModal .badge-extra,
body.dark-mode.admin-students-page #leaderboardModal td:nth-child(7) span,
body.dark-mode.admin-students-page #leaderboardModal td:nth-child(7) .badge {
    background: linear-gradient(135deg, #7c3aed, #4b2c80) !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    border: 1px solid rgba(167, 139, 250, 0.45) !important;
    font-weight: 950 !important;
    text-shadow: none !important;
    box-shadow:
        0 0 16px rgba(124, 58, 237, 0.28),
        0 8px 18px rgba(0, 0, 0, 0.24) !important;
}

body.dark-mode.admin-students-page #leaderboardModal .extra-badge *,
body.dark-mode.admin-students-page #leaderboardModal .extra-session-badge *,
body.dark-mode.admin-students-page #leaderboardModal .badge-extra *,
body.dark-mode.admin-students-page #leaderboardModal td:nth-child(7) span *,
body.dark-mode.admin-students-page #leaderboardModal td:nth-child(7) .badge * {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    font-weight: 950 !important;
    text-shadow: none !important;
}

/* Student IDs under names */
body.dark-mode.admin-students-page #leaderboardModal td:nth-child(2) small,
body.dark-mode.admin-students-page #leaderboardModal td:nth-child(2) .student-id {
    color: #dbeafe !important;
    -webkit-text-fill-color: #dbeafe !important;
    font-weight: 900 !important;
}

/* Course / level text */
body.dark-mode.admin-students-page #leaderboardModal td:nth-child(3),
body.dark-mode.admin-students-page #leaderboardModal td:nth-child(3) * {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    font-weight: 900 !important;
}
    /* =====================================================
   TRUE FINAL FIX - ADMIN LEADERBOARD EXTRA SESSIONS READABILITY
===================================================== */

/* Target the Extra Sessions column directly */
body.dark-mode.admin-students-page #leaderboardModal table tbody td:nth-child(7),
body.dark-mode.admin-students-page #leaderboardModal table tbody td:nth-child(7) * {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    opacity: 1 !important;
    visibility: visible !important;
    text-shadow: none !important;
}

/* Target the pill/badge inside Extra Sessions */
body.dark-mode.admin-students-page #leaderboardModal table tbody td:nth-child(7) span,
body.dark-mode.admin-students-page #leaderboardModal table tbody td:nth-child(7) div,
body.dark-mode.admin-students-page #leaderboardModal table tbody td:nth-child(7) .badge,
body.dark-mode.admin-students-page #leaderboardModal table tbody td:nth-child(7) .extra-badge,
body.dark-mode.admin-students-page #leaderboardModal table tbody td:nth-child(7) .extra-session-badge,
body.dark-mode.admin-students-page #leaderboardModal table tbody td:nth-child(7) .badge-extra {
    background: #fdb813 !important;
    background-color: #fdb813 !important;
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
    border: 2px solid #fde68a !important;
    font-weight: 950 !important;
    opacity: 1 !important;
    text-shadow: none !important;
    box-shadow:
        0 0 18px rgba(253, 184, 19, 0.40),
        0 8px 18px rgba(0, 0, 0, 0.28) !important;
}

/* Target gift icon and number inside the Extra Sessions pill */
body.dark-mode.admin-students-page #leaderboardModal table tbody td:nth-child(7) span *,
body.dark-mode.admin-students-page #leaderboardModal table tbody td:nth-child(7) div *,
body.dark-mode.admin-students-page #leaderboardModal table tbody td:nth-child(7) .badge *,
body.dark-mode.admin-students-page #leaderboardModal table tbody td:nth-child(7) i {
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
    opacity: 1 !important;
    font-weight: 950 !important;
    text-shadow: none !important;
}

/* If the extra session value is just plain text */
body.dark-mode.admin-students-page #leaderboardModal table tbody td:nth-child(7) {
    font-size: 14px !important;
    font-weight: 950 !important;
}
    /* =====================================================
   TRUE FINAL FIX - ADMIN SIT-IN REPORT WHITE MINI ITEMS
===================================================== */

body.dark-mode.admin-sitin-report-page {
    background:
        radial-gradient(circle at 10% 12%, rgba(253, 184, 19, 0.13), transparent 28%),
        radial-gradient(circle at 90% 10%, rgba(124, 58, 237, 0.28), transparent 32%),
        linear-gradient(135deg, #05030a 0%, #13071f 45%, #020617 100%) !important;
    color: #f8fafc !important;
}

body.dark-mode.admin-sitin-report-page .report-card,
body.dark-mode.admin-sitin-report-page .report-card-body,
body.dark-mode.admin-sitin-report-page .mini-list {
    background: #0f172a !important;
    color: #f8fafc !important;
}

body.dark-mode.admin-sitin-report-page .mini-item {
    background: #111827 !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    border: 1px solid rgba(148, 163, 184, 0.28) !important;
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.24) !important;
}

body.dark-mode.admin-sitin-report-page .mini-item span {
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    font-weight: 950 !important;
}

body.dark-mode.admin-sitin-report-page .mini-item strong {
    background: linear-gradient(135deg, #fdb813, #f59e0b) !important;
    color: #1e1038 !important;
    -webkit-text-fill-color: #1e1038 !important;
    padding: 5px 10px !important;
    border-radius: 999px !important;
    font-weight: 950 !important;
    box-shadow: 0 0 16px rgba(253, 184, 19, 0.25) !important;
}

body.dark-mode.admin-sitin-report-page .report-table-scroll,
body.dark-mode.admin-sitin-report-page .table-wrap {
    background: #0f172a !important;
}

body.dark-mode.admin-sitin-report-page .report-table-scroll tbody td,
body.dark-mode.admin-sitin-report-page .table-wrap tbody td {
    background: #0f172a !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    border-bottom: 1px solid rgba(148, 163, 184, 0.18) !important;
}

body.dark-mode.admin-sitin-report-page .report-table-scroll tbody tr:nth-child(even) td,
body.dark-mode.admin-sitin-report-page .table-wrap tbody tr:nth-child(even) td {
    background: #1e293b !important;
}

body.dark-mode.admin-sitin-report-page .report-table-scroll tbody tr:hover td,
body.dark-mode.admin-sitin-report-page .table-wrap tbody tr:hover td {
    background: rgba(75, 44, 128, 0.42) !important;
}

/* =========================================================
   TRUE FINAL FIX - SIT-IN FORM INPUTS DARK MODE
========================================================= */

body.dark-mode .modal input,
body.dark-mode .modal select,
body.dark-mode .modal textarea,
body.dark-mode .modal-content input,
body.dark-mode .modal-content select,
body.dark-mode .modal-content textarea,
body.dark-mode #sitInModal input,
body.dark-mode #sitInModal select,
body.dark-mode #sitInModal textarea,
body.dark-mode .sit-in-modal input,
body.dark-mode .sit-in-modal select,
body.dark-mode .sit-in-modal textarea,
body.dark-mode .sitin-modal input,
body.dark-mode .sitin-modal select,
body.dark-mode .sitin-modal textarea {
    background-color: #020617 !important;
    background: #020617 !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    caret-color: #f8fafc !important;
    border: 1.8px solid rgba(253, 184, 19, 0.45) !important;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28) !important;
    opacity: 1 !important;
}

/* Placeholder */
body.dark-mode .modal input::placeholder,
body.dark-mode .modal textarea::placeholder,
body.dark-mode .modal-content input::placeholder,
body.dark-mode .modal-content textarea::placeholder,
body.dark-mode #sitInModal input::placeholder,
body.dark-mode #sitInModal textarea::placeholder {
    color: #94a3b8 !important;
    -webkit-text-fill-color: #94a3b8 !important;
    opacity: 1 !important;
}

/* Readonly / disabled fields */
body.dark-mode .modal input[readonly],
body.dark-mode .modal input:disabled,
body.dark-mode .modal select:disabled,
body.dark-mode .modal-content input[readonly],
body.dark-mode .modal-content input:disabled,
body.dark-mode .modal-content select:disabled,
body.dark-mode #sitInModal input[readonly],
body.dark-mode #sitInModal input:disabled,
body.dark-mode #sitInModal select:disabled {
    background-color: #020617 !important;
    background: #020617 !important;
    color: #f8fafc !important;
    -webkit-text-fill-color: #f8fafc !important;
    opacity: 1 !important;
}

/* Select options */
body.dark-mode .modal select option,
body.dark-mode .modal-content select option,
body.dark-mode #sitInModal select option {
    background: #020617 !important;
    color: #f8fafc !important;
}

/* Fix browser autofill forcing white background */
body.dark-mode input:-webkit-autofill,
body.dark-mode input:-webkit-autofill:hover,
body.dark-mode input:-webkit-autofill:focus,
body.dark-mode textarea:-webkit-autofill,
body.dark-mode select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #020617 inset !important;
    -webkit-text-fill-color: #f8fafc !important;
    caret-color: #f8fafc !important;
}

/* Focus glow */
body.dark-mode .modal input:focus,
body.dark-mode .modal select:focus,
body.dark-mode .modal textarea:focus,
body.dark-mode .modal-content input:focus,
body.dark-mode .modal-content select:focus,
body.dark-mode .modal-content textarea:focus,
body.dark-mode #sitInModal input:focus,
body.dark-mode #sitInModal select:focus,
body.dark-mode #sitInModal textarea:focus {
    border-color: #fdb813 !important;
    box-shadow:
        0 0 0 4px rgba(253, 184, 19, 0.16),
        0 0 24px rgba(253, 184, 19, 0.16) !important;
    outline: none !important;
}
        /* =====================================================
           DARK MODE FLOATING BUTTON
        ===================================================== */

        .dark-mode-toggle {
            position: fixed !important;
            right: 24px !important;
            bottom: 24px !important;
            width: 58px !important;
            height: 58px !important;
            border: none !important;
            border-radius: 50% !important;
            z-index: 999999 !important;
            background: linear-gradient(135deg, #4b2c80, #2d1a4d) !important;
            color: #fdb813 !important;
            font-size: 25px !important;
            line-height: 58px !important;
            text-align: center !important;
            cursor: pointer !important;
            box-shadow:
                0 14px 35px rgba(0, 0, 0, 0.35),
                0 0 18px rgba(253, 184, 19, 0.25) !important;
            transition: all 0.25s ease !important;
        }

        .dark-mode-toggle:hover {
            transform: translateY(-4px) scale(1.05) !important;
            background: linear-gradient(135deg, #fdb813, #f59e0b) !important;
            color: #2d1a4d !important;
        }

        body.dark-mode .dark-mode-toggle {
            background: linear-gradient(135deg, #fdb813, #f59e0b) !important;
            color: #1e1038 !important;
            box-shadow:
                0 16px 40px rgba(0, 0, 0, 0.45),
                0 0 28px rgba(253, 184, 19, 0.36) !important;
        }

        @media (max-width: 600px) {
            .dark-mode-toggle {
                right: 15px !important;
                bottom: 15px !important;
                width: 50px !important;
                height: 50px !important;
                line-height: 50px !important;
                font-size: 21px !important;
            }
        }
    `;

    function injectDarkStyles() {
        if (document.getElementById("ccs-darkmode-style")) return;

        const style = document.createElement("style");
        style.id = "ccs-darkmode-style";
        style.textContent = darkModeCSS;
        document.head.appendChild(style);
    }
    function fixLoginInputs(isDark) {
        if (!document.body.classList.contains("login-page")) return;

        const inputs = document.querySelectorAll(
            ".input-group-login input, #id_number, #password"
        );

        inputs.forEach(function (input) {
            if (isDark) {
                input.style.setProperty("background", "#020617", "important");
                input.style.setProperty("background-color", "#020617", "important");
                input.style.setProperty("color", "#f8fafc", "important");
                input.style.setProperty("-webkit-text-fill-color", "#f8fafc", "important");
                input.style.setProperty("caret-color", "#f8fafc", "important");
                input.style.setProperty("border", "2px solid rgba(253, 184, 19, 0.75)", "important");
                input.style.setProperty(
                    "box-shadow",
                    "0 0 0 4px rgba(253, 184, 19, 0.10), 0 14px 28px rgba(0, 0, 0, 0.28)",
                    "important"
                );
            } else {
                input.style.removeProperty("background");
                input.style.removeProperty("background-color");
                input.style.removeProperty("color");
                input.style.removeProperty("-webkit-text-fill-color");
                input.style.removeProperty("caret-color");
                input.style.removeProperty("border");
                input.style.removeProperty("box-shadow");
            }
        });

        const labels = document.querySelectorAll(".input-group-login label");

        labels.forEach(function (label) {
            if (isDark) {
                label.style.setProperty("color", "#fdb813", "important");
                label.style.setProperty("-webkit-text-fill-color", "#fdb813", "important");
            } else {
                label.style.removeProperty("color");
                label.style.removeProperty("-webkit-text-fill-color");
            }
        });
    }

    function applyTheme(isDark) {
        document.body.classList.toggle("dark-mode", isDark);
        localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");

        fixLoginInputs(isDark);

        setTimeout(function () {
            fixLoginInputs(isDark);
        }, 50);

        setTimeout(function () {
            fixLoginInputs(isDark);
        }, 250);

        const btn = document.getElementById("darkModeToggle");

        if (btn) {
            btn.innerHTML = isDark ? "☀️" : "🌙";
            btn.title = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
            btn.setAttribute("aria-label", btn.title);
        }
    }
    function createToggleButton() {
        if (document.getElementById("darkModeToggle")) return;

        const btn = document.createElement("button");
        btn.id = "darkModeToggle";
        btn.type = "button";
        btn.className = "dark-mode-toggle";
        btn.innerHTML = "🌙";
        btn.title = "Switch Theme";

        btn.addEventListener("click", function () {
            applyTheme(!document.body.classList.contains("dark-mode"));
        });

        document.body.appendChild(btn);
    }

    document.addEventListener("DOMContentLoaded", function () {
        injectDarkStyles();
        createToggleButton();

        const savedTheme = localStorage.getItem(STORAGE_KEY);
        applyTheme(savedTheme === "dark");
    });
})();