import { Link, LinkProps, Outlet } from "@tanstack/react-router";
import {
  containerStyle,
  mainStyle,
  navLinkStyle,
  navStyle,
} from "./rootLayout.css";
import { Button } from "@headlessui/react";
import { PropsWithChildren } from "react";

interface NavLinkProps extends PropsWithChildren {
  to: LinkProps["to"];
}
function NavLink({ to, children }: NavLinkProps) {
  return (
    <Button
      className={navLinkStyle}
      as={Link}
      to={to}
      activeProps={{
        "data-active": "",
      }}
    >
      {children}
    </Button>
  );
}

export function RootLayout() {
  return (
    <div className={containerStyle}>
      <nav className={navStyle}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/chess">Chess</NavLink>
        <NavLink to="/interval-refresh">Interval refresh</NavLink>
      </nav>
      <main className={mainStyle}>
        <Outlet />
      </main>
    </div>
  );
}
