import React from "react";

export default function Tasks() {
  const tasks = [
    { id: 1, task: "Review tenant feedback", status: "In Progress" },
    { id: 2, task: "Prepare April rent report", status: "Pending" },
    { id: 3, task: "Inspect Charlottenburg property", status: "Resolved" },
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
      <div className="bg-white p-4 rounded shadow space-y-2">
        {tasks.map((t) => (
          <div key={t.id} className="flex justify-between">
            <span>{t.task}</span>
            <span
              className={
                t.status === "Pending"
                  ? "text-red-600"
                  : t.status === "In Progress"
                  ? "text-yellow-600"
                  : "text-green-600"
              }
            >
              {t.status}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
