"use client";

import dynamic from "next/dynamic";

const NotFound = dynamic(() => import("@/pages/not-found"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen w-full bg-background" aria-hidden="true" />
  ),
});

export default function NotFoundPage() {
  return <NotFound />;
}
