import { Link, useRouterState } from "@tanstack/react-router";
import { BadgeCent, CalendarDays, Home, Package, Plus, UserRound, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Accueil", to: "/", icon: Home },
  { label: "Réservations", to: "/reservations", icon: CalendarDays },
  { label: "Boutique", to: "/boutique", icon: Package },
  { label: "Finances", to: "/finances", icon: BadgeCent },
  { label: "Compte", to: "/compte", icon: UserRound },
] as const;

export function PaylaShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [paymentOpen, setPaymentOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 border-r border-border/70 bg-sidebar px-4 py-6 lg:flex lg:flex-col">
        <div className="px-3 text-2xl font-bold tracking-normal">Paylà<span className="text-primary">.</span></div>
        <div className="mt-2 px-3 text-xs text-muted-foreground">Espace marchand</div>
        <nav className="mt-10 space-y-1">
          {nav.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return <Link key={item.to} to={item.to} className={cn("flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors", active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground")}><item.icon className="h-4 w-4" />{item.label}</Link>;
          })}
        </nav>
        <div className="mt-auto rounded-lg bg-secondary p-4">
          <p className="text-xs text-muted-foreground">Compte marchand</p>
          <p className="mt-1 text-sm font-semibold">Atlas Sports SARL</p>
          <p className="mt-1 text-xs text-success">Compte vérifié</p>
        </div>
      </aside>
      <main className="min-h-screen pb-24 lg:ml-60 lg:pb-8">{children}</main>
      {pathname === "/" && <Button aria-label="Créer un lien de paiement" onClick={() => setPaymentOpen(true)} className="fixed bottom-24 right-5 z-40 h-14 w-14 rounded-full p-0 shadow-float lg:bottom-8 lg:right-8"><Plus className="h-6 w-6" /></Button>}
      <nav className="fixed inset-x-0 bottom-0 z-30 grid h-20 grid-cols-5 border-t border-border/70 bg-card/95 px-1 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur lg:hidden">
        {nav.map((item) => {
          const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
          return <Link key={item.to} to={item.to} className={cn("flex min-w-0 flex-col items-center justify-center gap-1 text-[10px] font-medium", active ? "text-primary" : "text-muted-foreground")}><item.icon className="h-5 w-5 shrink-0" /><span className="truncate">{item.label}</span></Link>;
        })}
      </nav>
      {paymentOpen && <PaymentModal onClose={() => setPaymentOpen(false)} />}
    </div>
  );
}

function PaymentModal({ onClose }: { onClose: () => void }) {
  const [sent, setSent] = useState(false);
  return <div className="fixed inset-0 z-50 grid place-items-end bg-overlay p-0 sm:place-items-center sm:p-4" role="dialog" aria-modal="true" aria-labelledby="payment-title">
    <div className="w-full rounded-t-2xl bg-card p-5 shadow-float sm:max-w-md sm:rounded-xl">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4"><div><p className="text-xs font-semibold uppercase text-primary">Paiement rapide</p><h2 id="payment-title" className="mt-1 text-xl font-bold">Créer un lien</h2></div><Button variant="ghost" size="icon" onClick={onClose} aria-label="Fermer"><X className="h-5 w-5" /></Button></div>
      {sent ? <div className="py-10 text-center"><div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-success-soft text-success">✓</div><p className="mt-4 font-semibold">Lien prêt à être partagé</p><p className="mt-1 text-sm text-muted-foreground">payla.ma/p/AT7K2</p><Button className="mt-6 w-full" onClick={onClose}>Copier le lien</Button></div> : <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}><label className="block text-sm font-medium">Montant<input required inputMode="decimal" placeholder="0,00" className="mt-2 h-12 w-full rounded-lg bg-secondary px-3 text-lg font-semibold outline-none ring-ring focus:ring-2" /></label><label className="block text-sm font-medium">Motif<input required placeholder="Ex. Acompte réservation" className="mt-2 h-12 w-full rounded-lg bg-secondary px-3 outline-none ring-ring focus:ring-2" /></label><Button type="submit" size="lg" className="w-full">Créer le lien · MAD</Button></form>}
    </div>
  </div>;
}

export function PageHeader({ eyebrow, title, action }: { eyebrow: string; title: string; action?: ReactNode }) {
  return <header className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><div className="min-w-0"><p className="text-xs font-semibold uppercase text-muted-foreground">{eyebrow}</p><h1 className="mt-1 truncate text-2xl font-bold sm:text-3xl">{title}</h1></div>{action}</header>;
}

export function StatusBadge({ children, tone }: { children: ReactNode; tone: "blue" | "green" | "gray" | "orange" | "red" | "amber" }) {
  const tones = { blue: "bg-info-soft text-info", green: "bg-success-soft text-success", gray: "bg-muted text-muted-foreground", orange: "bg-warning-soft text-warning", red: "bg-danger-soft text-destructive", amber: "bg-warning-soft text-warning" };
  return <span className={cn("inline-flex rounded-full px-2 py-1 text-[11px] font-semibold", tones[tone])}>{children}</span>;
}

export function EmptyState({ title, text }: { title: string; text: string }) {
  return <div className="py-10 text-center"><div className="mx-auto flex h-14 w-14 items-end justify-center gap-1 rounded-full bg-secondary pb-3"><span className="h-3 w-1.5 rounded-full bg-primary/35"/><span className="h-6 w-1.5 rounded-full bg-primary/60"/><span className="h-4 w-1.5 rounded-full bg-primary"/></div><p className="mt-4 font-semibold">{title}</p><p className="mx-auto mt-1 max-w-xs text-sm text-muted-foreground">{text}</p></div>;
}
