import Navbar from "./components/Navbar";
import "./App.css";
import Grafik from "./components/Grafik";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Menu from "./components/menu/Menu";
import Main from "./pages/Main";
import Suhu from "./pages/Suhu";
import Kelembaban from "./pages/Kelembaban";
import Ketinggian from "./pages/Ketinggian";
import Hujan from "./pages/Hujan";

function App() {
  
  const Layout = () => {
    return (
      <div className="h-screen bg-gradient-to-tl from-[#000066] to-[#6699ff] overflow-hidden ">
      <Navbar />
      <div className="flex h-full  ">
        {/* bagian kiri */}
        <div className="w-64  py-1 px-5 h-full border-r-2 border-solid border-white ">
          <Menu />
        </div>
        {/* bagian kanan */}
        <div className="py-2 px-5 w-full h-full flex flex-col gap-5 ">
          <Outlet />
        </div>
      </div>
    </div>
    
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Main />
        },
        {
          path: "/suhu",
          element: <Suhu />
        },
        {
          path: "/ketinggian",
          element: <Ketinggian />
        },
        {
          path: "/kelembaban",
          element: <Kelembaban />
        },
        {
          path: "/hujan",
          element: <Hujan />
        }
      ]
    }
  ]);
  
  return ( <RouterProvider router={router} /> );
}

export default App;
