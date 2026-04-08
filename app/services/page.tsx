import { AppSidebar } from "@/components/app-sidebar";
import { SidebarHeader, SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { CardImage } from "@/components/ui/CardImage";
import { Database } from "@/config/db";
import { getSessionUser } from "@/lib/session";

export default async function ServicesPage() {
  const user = await getSessionUser();
  const db = Database.getInstance().getClient();
  await db.connect();
  const collection = db.db('skybit').collection('services');
  const services = await collection.find({}).toArray();

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" user={user} />

      <SidebarInset>
        <SidebarHeader/>
        {/* list of services */}
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Services</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                    <CardImage
                        key={service._id.toString()}
                        id={service._id.toString()}
                        title={service.title}
                        description={service.description}
                        imageUrl={service.ImageUrl || service.imageUrl}
                        linkTo={`/services/${service._id.toString()}`}
                        badgeText={service.featured ? "Featured" : undefined}
                    />
                ))}
            </ul>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}