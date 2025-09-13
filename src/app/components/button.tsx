import Link from "next/link";

type Props = {
  as?: "button" | "a";
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ as = "button", href, variant = "primary", className = "", children, ...props }: Props) {
  const style = variant === "primary" ? "btn-primary" : "btn-outline";
  if (as === "a" && href) return <Link href={href} className={`${style} ${className}`}>{children}</Link>;
  return <button className={`${style} ${className}`} {...props}>{children}</button>;
}
