import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground flex items-center justify-center px-6">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl bg-gradient-accent" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl bg-gradient-accent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-12 h-[2px] bg-gradient-accent inline-block" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Error 404
          </span>
          <span className="w-12 h-[2px] bg-gradient-accent inline-block" />
        </div>

        <h1 className="text-[8rem] md:text-[12rem] font-black leading-none tracking-tighter bg-gradient-accent bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4 mb-6">
          This page wandered off.
        </h2>

        <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg mx-auto">
          The link you followed may be broken, or the page may have been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-accent text-white border-0 hover:opacity-90 h-14 px-8 text-base font-medium group"
          >
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Back to home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 px-8 text-base font-medium border-border hover:border-primary/50 group"
          >
            <a href="javascript:history.back()">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Go back
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
