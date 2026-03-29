import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import { SettingsForm } from "@/components/settings-form";

import data from "./data.json";

export default function SettingsPage() {
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
            <div>
              <h2 className="text-lg font-bold">Settings</h2>
              <p className="text-sm text-muted-foreground">
                Manage social media links and website metadata.
              </p>
            </div>
            <SettingsForm initialData={data} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
