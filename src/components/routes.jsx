import About from "../pages/About";
import Contact from "../pages/Contact";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';

const routes = [
  {
    path: "/",
    element: <HomePage />,
    id: 1,
  },
  {
    path: "/about",
    element: <About />,
    id: 2,
  },
  {
    path: "/contact",
    element: <Contact />,
    id: 3,
  },
  {
    path: "/experience",
    element: <Experience />,
    id: 3,
  },
  {
    path: "/projects",
    element: <Projects />,
    id: 3,
  },
  {path: "*",
  element: <NotFound />,
  id: 4},
];

export default routes;
