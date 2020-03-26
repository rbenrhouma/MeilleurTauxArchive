import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import MentionsLegales from "./components/MentionsLegales";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./App.css";
import PagesPaths from "./constantes/PagesPaths";

// -------------------------------- Import des pages -------------------------------------
import ScreenTypeBien from "./screens/01-ScreenTypeBien";
import ScreenEtatBien from "./screens/02-ScreenEtatBien";
import ScreenUsageBien from "./screens/03-ScreenUsageBien";
import ScreenSituationUser from "./screens/04-ScreenSituationUser";
import ScreenLocalisationBien from "./screens/05-ScreenLocalisationBien";
import ScreenBudgetBien from "./screens/06-ScreenBudgetBien";
import ScreenCoordonneesUser from "./screens/07-ScreenCoordonneesUser";
import ScreenFin from "./screens/08-ScreenFin";
import ScreenBackOffice from "./screens/99-ScreenBackOffice";
import ScreenBackOfficeDetails from "./screens/991-ScreenBackOfficeDetail";

export default function App() {
  const [pageIndex, setPageIndex] = useState(Cookies.get("pageIndex") || 1);
  const [devis, setDevis] = useState(Cookies.getJSON("devis") || {});
  const [currentPath, setCurrentPath] = useState("/");

  const [nextPath, setNextPath] = useState("/");
  const [priorPath, setPriorPath] = useState("/");

  const serverURL = "http://localhost:3000/";

  useEffect(() => {
    Cookies.set("devis", devis);
  }, [devis]);

  useEffect(() => {
    Cookies.set("pageIndex", pageIndex);
    setCurrentPath(PagesPaths[pageIndex]);
    setNextPath(PagesPaths[Number(pageIndex) + 1]);
    setPriorPath(PagesPaths[Number(pageIndex) - 1]);
  }, [pageIndex]);

  return (
    <Router>
      <div>
        <nav>
          <Redirect to={pageIndex} />
        </nav>
        <Switch>
          {/* Page 1  */}
          <Route path={PagesPaths[0]}>
            <ScreenTypeBien
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              nextPath={nextPath}
              priorPath={priorPath}
              devis={devis}
              setDevis={setDevis}
            />
          </Route>
          {/* Page 2 */}
          <Route path={PagesPaths[1]}>
            <ScreenEtatBien
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              nextPath={nextPath}
              priorPath={priorPath}
              devis={devis}
              setDevis={setDevis}
            />
          </Route>
          {/* Page 3 */}
          <Route path={PagesPaths[2]}>
            <ScreenUsageBien
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              nextPath={nextPath}
              priorPath={priorPath}
              devis={devis}
              setDevis={setDevis}
            />
          </Route>
          {/* Page 4  */}
          <Route path={PagesPaths[3]}>
            <ScreenSituationUser
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              nextPath={nextPath}
              priorPath={priorPath}
              devis={devis}
              setDevis={setDevis}
            />
          </Route>
          {/* Page 5  */}
          <Route path={PagesPaths[4]}>
            <ScreenLocalisationBien
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              nextPath={nextPath}
              priorPath={priorPath}
              devis={devis}
              setDevis={setDevis}
            />
          </Route>
          {/* Page 6 */}
          <Route path={PagesPaths[5]}>
            <ScreenBudgetBien
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              nextPath={nextPath}
              priorPath={priorPath}
              devis={devis}
              setDevis={setDevis}
            />
          </Route>
          {/* Page 7  */}
          <Route path={PagesPaths[6]}>
            <ScreenCoordonneesUser
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              nextPath={nextPath}
              priorPath={priorPath}
              devis={devis}
              setDevis={setDevis}
            />
          </Route>
          {/* Page 8 The end */}
          <Route path={PagesPaths[7]}>
            <ScreenFin
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              nextPath={null}
              priorPath={null}
              devis={devis}
              setDevis={setDevis}
              serverURL={serverURL}
            />
          </Route>

          {/* Page 9 : BackOffice */}
          <Route path={PagesPaths[8]}>
            <ScreenBackOffice serverURL={serverURL} />
          </Route>

          {/* Page 10 : Détails */}
          <Route path="/details/:id">
            <ScreenBackOfficeDetails serverURL={serverURL} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
