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
  EventImages,
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
        <Route exact path="/blog" element={<BlogHome />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventImages />} />
        <Route path="/contact" element={<Contact />} />
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
