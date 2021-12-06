import { Home } from "./views/Home";
import { MainRouter } from "./MainRouter/main";

export function App() {
  return (
    <MainRouter>
      <Home></Home>
    </MainRouter>
  );
}
