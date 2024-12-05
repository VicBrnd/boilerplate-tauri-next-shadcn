"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { toast } from "sonner";

interface ToolbarItemProps {
  nav: {
    key: string;
    href?: string;
    gitUrl?: string;
    icon?: React.ReactNode;
    tooltip?: string;
  };
  isCurrentPath: boolean;
}

export function ToolbarItem({ nav, isCurrentPath }: ToolbarItemProps) {
  const handleCopy = async (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText(url);
    toast.success("Git copiée dans votre presse-papiers.");
  };

  const content = (
    <span
      className={cn(
        "text-[10px] uppercase tracking-wider transition-colors duration-300 flex items-center gap-2",
        isCurrentPath ? "text-primary font-medium" : "text-muted-foreground",
        nav.gitUrl && "cursor-pointer hover:text-primary"
      )}
      onClick={(e) => nav.gitUrl && handleCopy(nav.gitUrl, e)}
    >
      {nav.icon}
      {nav.key}
    </span>
  );

  const itemContent = nav.href ? (
    <Link
      href={nav.href}
      className={cn(
        "text-[10px] uppercase tracking-wider transition-colors duration-300 flex items-center gap-2",
        isCurrentPath ? "text-primary font-medium" : "text-muted-foreground"
      )}
    >
      {nav.icon}
      {nav.key}
    </Link>
  ) : (
    content
  );

  return (
    <li className="flex flex-col items-center gap-2">
      <Tooltip>
        <TooltipTrigger asChild>{itemContent}</TooltipTrigger>
        {nav.tooltip && (
          <TooltipContent>
            <p>{nav.tooltip}</p>
          </TooltipContent>
        )}
      </Tooltip>
      <div className="relative">
        <div
          className={cn(
            "h-1.5 w-20 rounded-full transition-all duration-300",
            isCurrentPath ? "bg-primary/50" : "bg-muted"
          )}
        />
        {isCurrentPath && (
          <div className="absolute inset-0 bg-primary/20 animate-pulse rounded-full" />
        )}
      </div>
    </li>
  );
}
