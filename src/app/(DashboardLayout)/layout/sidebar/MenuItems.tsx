import { uniqueId } from "lodash";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: "Pro";
  chipColor?: string;
  variant?: string;
  external?: boolean;
}

import {
  IconBoxMultiple,
  IconChartPie,
  IconLogin,
  IconPoint,
  IconServer,
  IconShoppingBag,
  IconUserPlus,
  IconKeyframes,
  IconHome,
  IconLayoutGrid,
  IconUser,
  IconInfoCircle,
  IconTable,
  IconCircleDot,
  IconTypography,
  IconCheckbox,
  IconRadar,
  IconSlideshow,
  IconCaretUpDown,
  IconAperture,
} from "@tabler/icons-react";

const Menuitems: MenuitemsType[] = [
  
  {
    navlabel: true,
    subheader: "HOME",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconHome,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Icons",
    icon: IconChartPie,
    href: "/icons",
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: "Frontend Pages",
    icon: IconKeyframes,
    children: [
      {
        id: uniqueId(),
        title: "Login",
        icon: IconLogin,
        href: "/authentication/login",
      },
      {
        id: uniqueId(),
        title: "Register",
        icon: IconUserPlus,
        href: "/authentication/register",
      }
    ],
  },




  {
    navlabel: true,
    subheader: "UTILITIES",
  },

  {
    id: uniqueId(),
    title: 'Autocomplete',
    icon: IconTypography,
    href: '/utilities/autocomplete',
  },
  {
    id: uniqueId(),
    title: 'Checkbox',
    icon: IconCheckbox,
    href: '/utilities/checkbox',
  },
  {
    id: uniqueId(),
    title: 'Radio',
    icon: IconRadar,
    href: '/utilities/radio',
  },
  {
    id: uniqueId(),
    title: 'Slider',
    icon: IconSlideshow,
    href: '/utilities/slider',
  },

  {
    id: uniqueId(),
    title: 'Switch',
    icon: IconCaretUpDown,
    href: '/utilities/switch',
  },
  {
    id: uniqueId(),
    title: "Buttons",
    icon: IconCircleDot,
    href: "/utilities/buttons",
  },
  {
    id: uniqueId(),
    title: "Forms",
    icon: IconTable,
    href: "/utilities/forms",
  },
  {
    id: uniqueId(),
    title: "Alerts",
    icon: IconInfoCircle,
    href: "/utilities/alerts",
  },
  {
    id: uniqueId(),
    title: "Pagination",
    icon: IconUser,
    href: "/utilities/pagination",
  },
  {
    id: uniqueId(),
    title: "Tables",
    icon: IconLayoutGrid,
    href: "/utilities/table",
  },






  {
    navlabel: true,
    subheader: "AUTH",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },



  

  {
    navlabel: true,
    subheader: "MULTI DD",
  },

  {
    id: uniqueId(),
    title: "Menu Level",
    icon: IconBoxMultiple,
    href: "/menulevel/",
    children: [
      {
        id: uniqueId(),
        title: "Level 1",
        icon: IconPoint,
        href: "/l1",
      },
      {
        id: uniqueId(),
        title: "Level 1.1",
        icon: IconPoint,
        href: "/l1.1",
        children: [
          {
            id: uniqueId(),
            title: "Level 2",
            icon: IconPoint,
            href: "/l2",
          },
          {
            id: uniqueId(),
            title: "Level 2.1",
            icon: IconPoint,
            href: "/l2.1",
            children: [
              {
                id: uniqueId(),
                title: "Level 3",
                icon: IconPoint,
                href: "/l3",
              },
              {
                id: uniqueId(),
                title: "Level 3.1",
                icon: IconPoint,
                href: "/l3.1",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default Menuitems;
