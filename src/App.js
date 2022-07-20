import React from "react";
import { MainPublicProvider } from "./context/Maincontext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Room from "./routes/Room";
import PublicRoom from "./routes/Public_Room";
import { AnimatePresence } from "framer-motion";
import Home from "./routes/Home";

function App() {
  return (
    <BrowserRouter>
      <MainPublicProvider>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" exact index component={Home} />
            <Route path="/room/:roomID" component={Room} />
            <Route path="/public" component={PublicRoom} />
          </Switch>
        </AnimatePresence>
      </MainPublicProvider>
    </BrowserRouter>
  );
}

export default App;
