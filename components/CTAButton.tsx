import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-battleRed";

const variants = {
  primary:
    "bg-battleRed text-cream shadow-sm hover:-translate-y-0.5 hover:bg-[#8f1629]",
  secondary:
    "border border-navy bg-transparent text-navy hover:-translate-y-0.5 hover:border-navy hover:bg-navy/5",
} as const;

function isExternalLink(href: string) {
  return /^([a-z]+:)?\/\//i.test(href) || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#");
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const classes = `${baseClasses} ${variants[variant]} ${className}`.trim();

  if (isExternalLink(href)) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export default CTAButton;
