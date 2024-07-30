import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        {/* //Outlet to render the content of a nested route inside another route */}
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
