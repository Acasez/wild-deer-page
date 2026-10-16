// routes/config.js
import { lazy } from "react";

interface RouteConfig {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType>;
  header?: string;
  createHeader: boolean;
}

export const routes: RouteConfig[] = [
  {
    path: "/wilddeer/WildDeer",
    component: lazy(() => import("../pages/WildDeer")),
    header: "Wild Deer",
    createHeader: true,
  },
  {
    path: "/wilddeer/Maps",
    component: lazy(() => import("../pages/Maps")),
    header: "Maps",
    createHeader: true,
  },
  {
    path: "/wilddeer/ReadMore",
    component: lazy(() => import("../pages/ReadMore")),
    header: "Read More",
    createHeader: true,
  },
  {
    path: "/wilddeer/Contact",
    component: lazy(() => import("../pages/Contact")),
    header: "Contact",
    createHeader: true,
  },
];
