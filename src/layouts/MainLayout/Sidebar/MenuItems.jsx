import { Building2, LayoutDashboard, Users } from "lucide-react";

const MenuItems = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboard strokeWidth={1.25} />,
  },
  {
    title: "Organization",
    icon: <Building2 strokeWidth={1.25} />,
    child: [
      {
        title: "Locations",
        link: "/organization/location",
      },
      {
        title: "Clients",
        link: "/organization/clients",
      },
    ],
  },
  {
    title: "Employees",
    link: "/employees",
    icon: <Users strokeWidth={1.25} />,
  },
];

export default MenuItems;
