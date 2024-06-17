import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Hero,
  About,
  Contact,
  Events,
  Page,
  Page1,
  Page2,
  Page3,
  Page4,
  BlogHome,
  BlogPost,
} from "./components";

import Layout from "./Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        {/* <Route path="/page2" element={<Page1 />} />
        <Route path="/page3" element={<Page2 />} />
        <Route path="/page4" element={<Page3 />} />
        <Route path="/page5" element={<Page4 />} /> */}
        <Route path="/page" element={<Page />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/blog" element={<BlogHome />} />
        <Route path="/blog/:id" element={<BlogPost />} />
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
