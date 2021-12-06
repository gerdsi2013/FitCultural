import { Home } from "./views/Home/home.js";
import { MainRouter } from "./MainRouter/main";

export function App() {
  return (
    <MainRouter>
      <Home></Home>
    </MainRouter>
  );
}
