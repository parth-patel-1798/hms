import { Building2, LayoutDashboard, Settings, Users } from "lucide-react";

const MenuItems = [
  {
    title: "Dashboard",
    link: "dashboard",
    icon: <LayoutDashboard strokeWidth={1.5} />,
  },
  {
    title: "Organization",
    icon: <Building2 strokeWidth={1.5} />,
    child: [
      {
        title: "Locations",
        link: "organization/location",
      },
      {
        title: "Clients",
        link: "organization/clients",
      },
    ],
  },
  {
    title: "Employees",
    link: "employees",
    icon: <Users strokeWidth={1.5} />,
  },
  {
    title: "Settings",
    icon: <Settings strokeWidth={1.5} />,
    child: [
      {
        title: "General Settings",
        link: "settings/general",
      },
      {
        title: "System Settings",
        link: "settings/system",
      },
    ],
  },
];

export default MenuItems;
