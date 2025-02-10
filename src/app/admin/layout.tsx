"use client";

export const dynamic = "force-dynamic";

import { SessionProvider } from "next-auth/react";
import AdminLayoutClient from "@/components/Admin/AdminLayoutClient";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AdminLayoutClient>{children}</AdminLayoutClient>
    </SessionProvider>
  );
}
