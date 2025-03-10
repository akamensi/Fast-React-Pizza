import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

//I use createBrowserRouter in order to enable data fetching or data loading or to sumbit data using forms with React Router
const router = createBrowserRouter([
  {
    element: <AppLayout /> /* AppLayout is a Layout Route */,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader:
          menuLoader /*provide the menu data using the menuLoader to the menu page */,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
