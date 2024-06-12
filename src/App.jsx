import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Hero, About, Contact } from "./components/index";
import Layout from "./Layout";
import Home from "./components/blog/BlogHome";
import BlogPost from "./components/blog/BlogPost";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />    
        <Route exact path="/blog" element={<Home />} />    
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
