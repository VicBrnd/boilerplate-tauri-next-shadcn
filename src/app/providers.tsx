// src/app/providers.tsx
"use client";
import { Toolbar } from "@/components/toolbar/toolbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <TooltipProvider>
      {children}
      <Toolbar />
      <Toaster />
    </TooltipProvider>
  );
}
