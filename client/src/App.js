import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ActivateLayout from "./layouts/ActivateLayout/ActivateLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import ProfileLayout from "./layouts/ProfileLayout/ProfileLayout";
import ResetLayout from "./layouts/ResetLayout/ResetLayout";
import { AuthContext } from "./context/AuthContext";
import { useContext, useEffect } from "react";
import axios from "axios";


function App() {
  const { dispatch, token, isLoggedIn } = useContext(AuthContext);

  // get ac token
  useEffect(() => {
    const _appSignging = localStorage.getItem("_appSignging");
    if (_appSignging) {
      const getToken = async () => {
        const res = await axios.post("/api/auth/access", null);
        dispatch({ type: "GET_TOKEN", payload: res.data.ac_token });
      };
      getToken();
    }
  }, [dispatch, isLoggedIn]);

  // get user data
  useEffect(() => {
    if (token) {
      const getUser = async () => {
        dispatch({ type: "SIGNING" });
        const res = await axios.get("/api/auth/user", {
          headers: { Authorization: token },
        });
        dispatch({ type: "GET_USER", payload: res.data });
      };
      getUser();
    }
  }, [dispatch, token]);



  return (
    <div className="App">
      <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={isLoggedIn ? ProfileLayout : AuthLayout}
        />
        <Route 
          path="/auth/reset-password/:token"
          exact
          component={ResetLayout}
        />
        <Route
          path="/api/auth/activate/:activation_token"
          exact
          component={ActivateLayout}
        />

      </Switch>
    </Router>
  
    </div>
  );
}

export default App;
