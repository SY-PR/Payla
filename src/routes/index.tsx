import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, ArrowUpRight, CalendarClock, ChevronRight, PackageCheck, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHeader, StatusBadge } from "@/components/payla";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Accueil — Paylà" }, { name: "description", content: "Solde, réservations et commandes du jour sur Paylà." }, { property: "og:title", content: "Accueil — Paylà" }, { property: "og:description", content: "Pilotez votre activité et vos paiements depuis Paylà." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: HomePage,
});

function HomePage() {
  const [open, setOpen] = useState(false);
  return <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
    <PageHeader eyebrow="Jeudi 24 septembre" title="Bonjour, Yassine" action={<div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">YA</div>} />
    <div className="mt-6 flex items-start gap-3 rounded-lg bg-warning-soft p-4 text-warning"><AlertTriangle className="mt-0.5 h-5 w-5 shrink-0"/><div className="min-w-0"><p className="text-sm font-semibold">Pièce KYC à mettre à jour</p><p className="mt-0.5 text-xs opacity-80">Votre extrait du registre de commerce expire dans 12 jours.</p></div><ChevronRight className="h-5 w-5 shrink-0"/></div>
    <section className="mt-4 rounded-xl bg-primary p-5 text-primary-foreground shadow-card sm:p-7">
      <div className="flex items-center justify-between"><p className="text-sm opacity-75">Solde disponible</p><span className="rounded-full bg-card/10 px-2.5 py-1 text-xs">Disponible</span></div>
      <p className="mt-5 text-4xl font-bold sm:text-5xl">24 680,50 <span className="text-lg font-semibold opacity-70">MAD</span></p>
      <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-primary-foreground/20 pt-4"><div className="min-w-0"><p className="text-xs opacity-70">Prochain versement automatique</p><p className="mt-1 text-sm font-semibold">Lundi 28 septembre · 18 420,50 MAD</p></div><ArrowUpRight className="h-5 w-5"/></div>
    </section>
    <Button size="lg" className="mt-4 w-full sm:w-auto" onClick={() => setOpen(true)}><Plus className="h-4 w-4"/>Créer un lien de paiement</Button>
    {open && <div className="mt-3 rounded-lg bg-success-soft p-3 text-sm font-medium text-success">Le bouton flottant « + » ouvre la création rapide du lien.</div>}
    <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,.8fr)]">
      <section><div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-bold">Aujourd’hui</h2><span className="text-xs text-muted-foreground">4 rendez-vous</span></div>
        <div className="overflow-hidden rounded-xl bg-card shadow-card">
          {[['09:00','Salma Benjelloun','Terrain 1','Capturée','green','450,00'],['11:30','Amine El Fassi','Terrain 2','Autorisée','blue','300,00'],['15:00','Kenza Alaoui','Salle A','Capturée','green','650,00'],['18:30','Omar Tazi','Terrain 1','Autorisée','blue','450,00']].map(([time,name,resource,status,tone,amount],i)=><div key={name} className="grid grid-cols-[3.5rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-border/60 p-4 last:border-0"><div className="text-sm font-bold">{time}</div><div className="min-w-0"><p className="truncate text-sm font-semibold">{name}</p><p className="mt-1 text-xs text-muted-foreground">{resource} · {amount} MAD</p></div><StatusBadge tone={tone as 'green'|'blue'}>{status}</StatusBadge></div>)}
        </div>
      </section>
      <section><div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-bold">À retirer</h2><span className="text-xs text-muted-foreground">2 commandes</span></div><div className="rounded-xl bg-card p-4 shadow-card"><div className="flex gap-3"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary"><PackageCheck className="h-5 w-5"/></div><div><p className="text-sm font-semibold">Commande #1048 · Imane</p><p className="mt-1 text-xs text-muted-foreground">Raquette Pro · 1 290,00 MAD</p></div></div><div className="my-4 h-px bg-border/70"/><div className="flex gap-3"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary"><CalendarClock className="h-5 w-5"/></div><div><p className="text-sm font-semibold">Commande #1046 · Mehdi</p><p className="mt-1 text-xs text-muted-foreground">Balles x2 · 240,00 MAD</p></div></div></div></section>
    </div>
  </div>;
}
