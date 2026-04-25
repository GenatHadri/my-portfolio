"use client";

import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/pages/home"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen w-full bg-background" aria-hidden="true" />
  ),
});

export default function Page() {
  return <Home />;
}
