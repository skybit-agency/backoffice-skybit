import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

import data from "./data.json";

export default function ClientsPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />

      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-4 p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">Clients</h2>
                <p className="text-sm text-muted-foreground">
                  Manage your client portfolio and projects.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.map((client) => (
                <Card key={client.id} className="flex flex-col">
                  <div className="relative">
                    <img
                      src={client.imageUrl}
                      alt={client.name}
                      className="aspect-[3/2] w-full rounded-t-lg object-cover brightness-90 dark:brightness-60"
                    />
                    <div className="absolute inset-0 rounded-t-lg bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <Badge
                      variant="secondary"
                      className="absolute bottom-2 left-3 text-xs"
                    >
                      {client.projectCount} project{client.projectCount !== 1 ? "s" : ""}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-base">{client.name}</CardTitle>
                    <CardDescription className="text-xs">
                      {client.company} · {client.email}
                    </CardDescription>
                  </CardHeader>
                  <div className="flex-1" />
                  <CardFooter className="flex flex-col gap-2">
                    <Link
                      href={`/clients/${client.id}`}
                      className="inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground transition-all h-8 gap-1.5 hover:bg-primary/80"
                    >
                      Modify
                    </Link>
                    <Button className="w-full" variant="destructive">
                      Delete
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
