import { Building2, Gauge, LayoutDashboard, Users, Users2 } from "lucide-react";
import { TbBuilding, TbHome, TbUsersGroup } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";

const MenuItems = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboard strokeWidth={1.5} />,
  },
  {
    title: "Organization",
    icon: <Building2 strokeWidth={1.5} />,
    child: [
      {
        title: "Locations",
        link: "/organization/location",
      },
      {
        title: "Clients",
        link: "/organization/clients",
      },
      {
        title: "Departments",
        child: [
          {
            title: "Locations1",
            link: "/organization/departments/location1",
          },
          {
            title: "Departments",
            child: [
              {
                title: "Locations1",
                link: "/organization/departments/location1",
              },
              {
                title: "Departments",
                child: [
                  {
                    title: "Locations1",
                    link: "/organization/departments/location2",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Employees",
    link: "/employees",
    icon: <Users strokeWidth={1.5} />,
  },
];

export default MenuItems;
