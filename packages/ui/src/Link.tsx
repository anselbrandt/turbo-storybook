import * as React from "react";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

export const Link = (props: LinkProps) => {
  const { children, href, ...rest } = props;

  if (rest.target === "_blank") {
    rest.rel = "noopener noreferrer";
  }

  return (
    <a href={href} {...rest}>
      🚀{children}🚀
    </a>
  );
};

Link.displayName = "Link"

export default Link