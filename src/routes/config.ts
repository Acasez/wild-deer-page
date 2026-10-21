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
    path: "/wilddeer/",
    component: lazy(() => import("../pages/WildDeer")),
    header: "Wild Deer",
    createHeader: true,
  },
  {
    path: "/wilddeer/Maps",
    component: lazy(() => import("../pages/Maps")),
    header: "Map Improvements",
    createHeader: true,
  },
  {
    path: "/wilddeer/ReadMore",
    component: lazy(() => import("../pages/Language")),
    header: "Complete Translation",
    createHeader: true,
  },
  {
    path: "/wilddeer/Contact",
    component: lazy(() => import("../pages/CookieProof")),
    header: "Cookie Proof",
    createHeader: true,
  },
];
