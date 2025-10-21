import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import App from "./App";
import HomePage from "./pages/homePage/HomePage";
import ManuscriptProcessorPage from "./pages/manuscriptProcessorPage/ManuscriptProcessorPage";

const rootRoute = createRootRoute({ component: App });

const manuscriptProcessorRoute = createRoute({
  component: ManuscriptProcessorPage,
  path: "/manuscript",
  getParentRoute: () => rootRoute,
});

const indexRoute = createRoute({
  component: HomePage,
  path: "/",
  getParentRoute: () => rootRoute,
});

const routeTree = rootRoute.addChildren([manuscriptProcessorRoute, indexRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
  basepath: "/writings-organizer",
});
