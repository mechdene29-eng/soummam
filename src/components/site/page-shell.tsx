import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export function PageShell({
  children,
  overlayNav = false,
}: {
  children: ReactNode;
  overlayNav?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav overlay={overlayNav} />
      <main id="contenu">{children}</main>
      <SiteFooter />
    </div>
  );
}
