import { businessInfo } from "../content/business-info";

const dayLabels: Record<string, string> = {
  lunes: "Lun",
  martes: "Mar",
  miércoles: "Mié",
  jueves: "Jue",
  viernes: "Vie",
  sábado: "Sáb",
  domingo: "Dom",
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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-cream py-8 text-navy">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-2xl uppercase tracking-wide text-navy">
            Lucy&apos;s Kitchen
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-charcoal/80">
            {businessInfo.address}
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg uppercase tracking-wide text-navy">
            Contacto
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-charcoal/80">
            <li>
              <a href={`tel:${businessInfo.phone}`} className="transition-colors hover:text-battleRed">
                {businessInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${businessInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-battleRed"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg uppercase tracking-wide text-navy">
            Horario
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-charcoal/80">
            {businessInfo.hours.map((entry) => (
              <li key={entry.day} className="flex items-center justify-between gap-3">
                <span>{dayLabels[entry.day] ?? entry.day}</span>
                <span>
                  {entry.open && entry.close
                    ? `${formatTimeLabel(entry.open)} – ${formatTimeLabel(entry.close)}`
                    : "Cerrado"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-start justify-between gap-3 border-t border-navy/10 px-4 pt-4 text-sm text-charcoal/70 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <p>© {currentYear} Lucy&apos;s Kitchen</p>

        {businessInfo.socials && businessInfo.socials.length > 0 ? (
          <div className="flex flex-wrap items-center gap-4">
            {businessInfo.socials.map((social) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-battleRed"
              >
                {social.platform}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  );
}

export default Footer;
