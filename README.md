# Employee Dummy Data API

A lightweight REST API built with **Bun + TypeScript** that serves dummy data for 82 Philippine government employees.

---

## 🚀 Local Development

```bash
# Install Bun (if not installed)
curl -fsSL https://bun.sh/install | bash

# Install dependencies
bun install

# Run in dev mode (with hot reload)
bun run dev

# Run in production mode
bun run start
```

API will be available at `http://localhost:3000`

---

## 📡 Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API info and endpoint list |
| GET | `/divisions` | All divisions |
| GET | `/employees` | All 82 employees (profile + gov IDs) |
| GET | `/employees/:id` | Single employee |
| GET | `/employees/:id/attendance` | Employee's attendance records |
| GET | `/attendance` | All attendance records |

### Query Parameters

**`GET /employees`**
- `division_id` — filter by division (1–8)
- `employment_status` — `Permanent`, `Casual`, `Contractual`, `Job Order`
- `salary_grade` — filter by SG number

**`GET /attendance`** and **`GET /employees/:id/attendance`**
- `period` — e.g. `2025-01` (YYYY-MM)
- `cutoff` — `1st` or `2nd`

---

## 🗂 Data Fields

### Employee Profile
`employee_id`, `employee_no`, `last_name`, `first_name`, `middle_name`, `position_title`, `plantilla_item_no`, `salary_grade`, `step`, `basic_monthly_salary`, `division_id`, `division_name`, `employment_status`, `official_station`, `date_original_appointment`, `last_promotion_date`

### Government IDs
`gsis_bp_no`, `gsis_crn`, `pagibig_mid_no`, `philhealth_no`, `tin`

### Attendance
`employee_id`, `period`, `cutoff`, `days_present`, `total_late_minutes`, `total_undertime_minutes`, `without_pay_days`

---

## ☁️ Deploy to Render

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → New → Web Service
3. Connect your repo — Render will auto-detect `render.yaml`
4. Click **Deploy**

> **Note:** Render's free tier spins down after inactivity. The first request after sleep may take ~30s.
