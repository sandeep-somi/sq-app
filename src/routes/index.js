import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "../containers/Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Home />} />
    </Switch>
  </BrowserRouter>
)

export default Routes;