import "./App.css";
import { HomePage } from "./containers/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/frontend-project-1" component={HomePage} />
          <Route
            exact
            path="/frontend-project-1/customer/access/:action"
            component={CustomerAccessPage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
