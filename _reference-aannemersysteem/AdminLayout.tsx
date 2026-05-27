import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Settings,
  Lightbulb,
  BookOpen,
  Library,
  Webhook,
  Users,
  Mail,
  Zap,
  Briefcase,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

const mainNav = [
  { title: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { title: "CRM", href: "/admin/crm", icon: Users },
  { title: "Klanten", href: "/admin/projects", icon: Briefcase },
  { title: "Automations", href: "/admin/automations", icon: Zap },
  { title: "E-mail", href: "/admin/email", icon: Mail },
];

const settingsNav = [
  { title: "Configurator", href: "/admin/configurator", icon: Settings },
  { title: "Braindump", href: "/admin/braindump", icon: Lightbulb },
  { title: "Kennisbank", href: "/admin/kennisbank", icon: BookOpen },
  { title: "Wiki", href: "/admin/wiki", icon: Library },
  { title: "Webhooks", href: "/admin/webhooks", icon: Webhook },
];

const AdminLayout = () => {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/admin") return location.pathname === "/admin";
    return location.pathname.startsWith(href);
  };

  const renderItems = (items: typeof mainNav) =>
    items.map((item) => (
      <SidebarMenuItem key={item.href}>
        <SidebarMenuButton asChild isActive={isActive(item.href)} tooltip={item.title}>
          <Link to={item.href}>
            <item.icon />
            <span>{item.title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ));

  return (
    <SidebarProvider>
      <Sidebar variant="sidebar" collapsible="icon">
        <SidebarHeader className="p-4">
          <Link to="/admin" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
              AS
            </div>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
              <span className="text-sm font-semibold text-sidebar-foreground">
                Aannemer Systeem
              </span>
              <span className="text-xs text-sidebar-foreground/60">Admin</span>
            </div>
          </Link>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Beheer</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>{renderItems(mainNav)}</SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <Collapsible defaultOpen={settingsNav.some((i) => isActive(i.href))} className="group/settings">
            <SidebarGroup>
              <CollapsibleTrigger asChild>
                <SidebarGroupLabel className="cursor-pointer hover:text-sidebar-foreground transition-colors">
                  Instellingen
                  <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/settings:rotate-90" />
                </SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>{renderItems(settingsNav)}</SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarContent>

        <SidebarFooter className="p-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Bekijk website">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink />
                  <span>Bekijk website</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
        </header>
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
