"use client";

import { usePathname } from "next/navigation";
import { ToolbarItem } from "./toolbar-item";

interface Navigation {
  key: string;
  href?: string;
  gitUrl?: string;
  tooltip?: string;
}

const navigation: Navigation[] = [
  {
    key: "welcome",
    href: "/",
  },
  {
    key: "code",
    href: "/code",
    tooltip: "Open Github Repo",
  },
  {
    key: "git clone",
    gitUrl: "https://github.com/votre-repo/votre-projet.git",
    tooltip: "Copy Git Url",
  },
  {
    key: "tauri",
    href: "https://tauri.app/",
    tooltip: "Tauri Web",
  },
  {
    key: "next",
    href: "https://tauri.app/",
    tooltip: "Next Web",
  },
  {
    key: "shadcn",
    href: "https://tauri.app/",
    tooltip: "Shadcn Web",
  },
];

export function Toolbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm border rounded-full px-6 py-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-background/90">
      <ul className="flex gap-3">
        {navigation.map((nav) => {
          const isCurrentPath = nav.href ? pathname === nav.href : false;

          return (
            <ToolbarItem
              key={nav.key}
              nav={nav}
              isCurrentPath={isCurrentPath}
            />
          );
        })}
      </ul>
    </nav>
  );
}