import { NavLink } from "react-router-dom";

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { LayoutDashboard, UserPlus, Search, LogOut } from "lucide-react";

const HomeSidebar = () => {
  return (
    <SidebarProvider>
      <Sidebar className="bg-blue-600 text-muted w-54">
        {/* Header */}
        <SidebarHeader>
          <h2 className="text-lg font-semibold text-muted">Village Directory</h2>
        </SidebarHeader>

        {/* Main Menu */}
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-base text-black">Main</SidebarGroupLabel>

            <SidebarMenu>
              <SidebarMenuItem>
                <NavLink to="/home/dashboard">
                  <SidebarMenuButton>
                    <LayoutDashboard />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </NavLink>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <NavLink to="/home/add-member">
                  <SidebarMenuButton>
                    <UserPlus />
                    <span>Add Member</span>
                  </SidebarMenuButton>
                </NavLink>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <NavLink to="/home/search">
                  <SidebarMenuButton>
                    <Search />
                    <span>Search</span>
                  </SidebarMenuButton>
                </NavLink>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <LogOut />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
     </SidebarProvider>
  );
};
export default HomeSidebar;
