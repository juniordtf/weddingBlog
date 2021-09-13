import React, { useState, useRef } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside, useWindowSize } from "./hooks";
import { theme } from "./theme";
import { Burger, Menu, Navbar } from "./components";
import FocusLock from "react-focus-lock";
import routes from "./routes";
import type { RouteDefinition } from "./routes";
import styles from "./styles.module.css";

function App() {
  const [open, setOpen] = useState(true);
  const node = useRef();
  const menuId = "main-menu";
  const { width } = useWindowSize();

  //useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={styles.mobileApp}>
          {width < 576 ? <Navbar /> : <div />}
          <div className={styles.webApp}>
            <div ref={node}>
              {width < 576 ? (
                <FocusLock disabled={!open}>
                  <Burger
                    open={open}
                    setOpen={setOpen}
                    aria-controls={menuId}
                  />
                  <Menu
                    open={open}
                    setOpen={setOpen}
                    mobile={true}
                    id={menuId}
                  />
                </FocusLock>
              ) : (
                <Menu
                  open={open}
                  setOpen={setOpen}
                  mobile={false}
                  id={menuId}
                />
              )}
            </div>
            <Switch>
              {routes.map(
                ({ path, name }: RouteDefinition): React$Element<*> => (
                  <Route
                    key={path}
                    path={path}
                    component={require(`./views/${name}`).default}
                    exact={true}
                  />
                )
              )}
              <Route />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
