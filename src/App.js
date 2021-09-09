import React, { useState, useRef } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu } from "./components";
import FocusLock from "react-focus-lock";
import routes, { getRouteByName } from "./routes";
import type { RouteDefinition } from "./routes";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <>
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
          <Switch>
            {routes.map(({ path, name }: RouteDefinition): React$Element<*> => (
              <Route
                key={path}
                path={path}
                component={require(`./views/${name}`).default}
                exact={true}
              />
            ))}
            <Route />
          </Switch>
        </>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
