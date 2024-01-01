import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Bell } from "lucide-react";

const Notif = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className=" cursor-pointer">
            <Bell />
       
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Nouveau message reçu</MenubarItem>
          <MenubarItem>Problème de sécurité détecté</MenubarItem>
          <MenubarSeparator />
          <MenubarItem> Mise à jour du système requise</MenubarItem>
          <MenubarSeparator />
          <MenubarItem> Rappel de réunion</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Notif;
