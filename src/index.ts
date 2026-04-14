import { generateEmployees, generateAttendance, divisions } from "./data";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const profiles = generateEmployees();
const attendance = generateAttendance();

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

const server = Bun.serve({
  port: PORT,
  fetch(req) {
    const path = new URL(req.url).pathname.replace(/\/$/, "") || "/";

    if (path === "/") {
      return json({
        name: "Employee Dummy Data API",
        version: "1.0.0",
        endpoints: {
          "GET /employees": "All 82 employees (profile + government IDs)",
          "GET /attendance": "All attendance records",
          "GET /divisions": "Division reference data",
        },
      });
    }

    if (path === "/employees") {
      return json({ total: profiles.length, data: profiles });
    }

    if (path === "/attendance") {
      return json(attendance);
    }

    if (path === "/divisions") {
      return json(divisions);
    }

    return json({ error: "Not found" }, 404);
  },
});

console.log(`✅ Employee API running on http://localhost:${PORT}`);
console.log(`   /employees → 82 records | /attendance → ${attendance.length} records | /divisions → ${divisions.length} records`);
