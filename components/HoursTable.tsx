import { businessInfo } from "../content/business-info";

const dayLabels: Record<string, string> = {
  lunes: "Lunes",
  martes: "Martes",
  miércoles: "Miércoles",
  jueves: "Jueves",
  viernes: "Viernes",
  sábado: "Sábado",
  domingo: "Domingo",
};

function formatTimeLabel(time: string | null) {
  if (!time) {
    return "Cerrado";
  }

  const [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const normalizedHours = hours % 12 || 12;

  return `${normalizedHours}:${String(minutes).padStart(2, "0")} ${period}`;
}

export function HoursTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
      <table className="min-w-full text-left">
        <thead className="bg-cream text-navy">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">
              Día
            </th>
            <th className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">
              Horario
            </th>
          </tr>
        </thead>
        <tbody>
          {businessInfo.hours.map((entry) => (
            <tr key={entry.day} className="border-t border-navy/10">
              <td className="px-4 py-3 text-sm font-medium text-navy">
                {dayLabels[entry.day] ?? entry.day}
              </td>
              <td className="px-4 py-3 text-sm text-charcoal/80">
                {entry.open && entry.close
                  ? `${formatTimeLabel(entry.open)} – ${formatTimeLabel(entry.close)}`
                  : "Cerrado"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HoursTable;
