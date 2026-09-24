import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { PaylaShell } from "@/components/payla";
import { Button } from "@/components/ui/button";

function NotFoundComponent() { return <div className="grid min-h-screen place-items-center px-6 text-center"><div><h1 className="text-6xl font-bold">404</h1><p className="mt-3 text-muted-foreground">Cette page n’existe pas.</p><Button asChild className="mt-6"><Link to="/">Retour à l’accueil</Link></Button></div></div>; }
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) { const router = useRouter(); useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]); return <div className="grid min-h-screen place-items-center px-6 text-center"><div><h1 className="text-2xl font-bold">Cette page n’a pas chargé</h1><p className="mt-2 text-sm text-muted-foreground">Veuillez réessayer dans un instant.</p><Button className="mt-6" onClick={() => { router.invalidate(); reset(); }}>Réessayer</Button></div></div>; }

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" }], links: [{ rel: "stylesheet", href: appCss }, { rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap" }, { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }] }),
  shellComponent: RootShell, component: RootComponent, notFoundComponent: NotFoundComponent, errorComponent: ErrorComponent,
});
function RootShell({ children }: { children: ReactNode }) { return <html lang="fr"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><PaylaShell><Outlet /></PaylaShell></QueryClientProvider>; }
