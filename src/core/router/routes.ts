import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  mobiles: string;
  detailMobile: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  mobiles: "/list",
  detailMobile: "/detail/:id"
}

interface Routes extends Omit<SwitchRoutes, 'detailMobile'> {
  detailMobile: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  detailMobile: (id: string) => generatePath(switchRoutes.detailMobile, { id })
}