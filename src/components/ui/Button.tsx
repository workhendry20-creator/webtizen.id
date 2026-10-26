import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      isLoading = false,
      icon,
      iconPosition = "right",
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-webtizen-accent focus:ring-offset-2 focus:ring-offset-webtizen-bg disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variantStyles = {
      // Primary: Jungle Teal (#548062), text Mint Cream (#F0F7EE), hover Muted Teal (#70A591)
      primary:
        "bg-webtizen-accent text-webtizen-text shadow-md hover:bg-webtizen-muted hover:shadow-[0_0_20px_rgba(84,128,98,0.35)]",
      // Secondary: Background transparan, border Muted Teal (#70A591), text Mint Cream (#F0F7EE), hover bg webtizen-card
      secondary:
        "bg-transparent text-webtizen-text border border-webtizen-muted/60 hover:bg-webtizen-card/80 hover:border-webtizen-accent hover:shadow-[0_0_15px_rgba(84,128,98,0.2)]",
      // Ghost: text Mint Cream, hover subtle bg
      ghost:
        "bg-transparent text-webtizen-text hover:bg-webtizen-card/50 hover:text-webtizen-muted",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-1" />
        )}
        {!isLoading && icon && iconPosition === "left" && (
          <span className="inline-flex shrink-0">{icon}</span>
        )}
        {children && <span>{children}</span>}
        {!isLoading && icon && iconPosition === "right" && (
          <span className="inline-flex shrink-0">{icon}</span>
        )}
      </>
    );

    if (href) {
      if (isExternal || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("https://wa.me")) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {content}
          </a>
        );
      }

      return (
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
