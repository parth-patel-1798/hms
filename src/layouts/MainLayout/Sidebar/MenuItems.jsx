import { Building2, LayoutDashboard, Users } from "lucide-react";

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
      {
        title: "Departments",
        child: [
          {
            title: "Locations1",
            link: "organization/departments/location1",
          },
        ],
      },
    ],
  },
  {
    title: "Employees",
    link: "employees",
    icon: <Users strokeWidth={1.5} />,
  },
];

export default MenuItems;
