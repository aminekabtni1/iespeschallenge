/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the software.

*/

import { useEffect, useState } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import Sidenav from "examples/Sidenav";
import routes from "routes";
import { useVisionUIController, setMiniSidenav } from "context";
export default function App() {
  const [controller, dispatch] = useVisionUIController();
  const [hoverExpanded, setHoverExpanded] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    document.body.setAttribute("dir", "ltr");
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidenav
        color={controller.sidenavColor}
        brandName="SMART GRID AI"
        routes={routes}
        onMouseEnter={() => {
          if (controller.miniSidenav && window.innerWidth >= 1200) {
            setMiniSidenav(dispatch, false);
            setHoverExpanded(true);
          }
        }}
        onMouseLeave={() => {
          if (hoverExpanded) {
            setMiniSidenav(dispatch, true);
            setHoverExpanded(false);
          }
        }}
      />
      <Switch>
        {routes.map((route) => (
          <Route exact path={route.route} component={route.component} key={route.key} />
        ))}
        <Redirect from="*" to="/dashboard" />
      </Switch>
    </ThemeProvider>
  );
}
