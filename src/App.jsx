import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Hero, About, Contact } from "./components/index";
import Events from "./components/event/Event";
import Page1 from "./components/event/Page1";
import Page2 from "./components/event/Page2";
import Page3 from "./components/event/Page3";
import Page4 from "./components/event/Page4";
import Page from "./components/event/Page";
import Layout from "./Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path = "/events" element={<Events />} />
        <Route path="/page2" element={<Page1 />} />
        <Route path="/page3" element={<Page2 />} />
        <Route path="/page4" element={<Page3 />} />
        <Route path="/page5" element={<Page4 />} />
        <Route path="/page" element={<Page />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
