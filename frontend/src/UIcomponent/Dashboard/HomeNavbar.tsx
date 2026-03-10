import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import HomeSidebar from "./HomeSidebar";

const HomeNavbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const Opensidebar = () => {
    setSidebar(true);
  };

  return (
    <div className="h-16 w-full border-b flex items-center justify-between p-6 bg-muted">
      <Button
        className="bg-blue-600 hover:bg-blue-400 text-white"
        onClick={Opensidebar}
      >
        <Menu className="w-6 h-6 cursor-pointer" />
      </Button>
      {sidebar && <HomeSidebar />}

      <h1 className="text-lg font-semibold">Village Family Directory</h1>

      {/* Center */}
      <Input placeholder="Search members..." className="w-66 mx-6 " />

      {/* Right */}
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="/avatar.png" />
              <AvatarFallback className="rounded border bg-gray-300">
                AD
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default HomeNavbar;
