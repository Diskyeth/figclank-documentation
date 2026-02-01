"use client";

import { useState } from "react";
import { Sidebar } from "@/components/docs/Sidebar";
import { Header } from "@/components/docs/Header";
import { SearchModal } from "@/components/docs/SearchModal";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-dashboard">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="pl-64">
        {/* Header */}
        <Header onSearchClick={() => setSearchOpen(true)} />

        {/* Page content */}
        <main className="px-8 py-8">{children}</main>
      </div>

      {/* Search Modal */}
      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
