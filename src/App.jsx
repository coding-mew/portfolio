import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./components/routes";

// TO DO:
// container "get in contact" -width mobile
// link profiles
// replace placeholders in projects and link onClick of the preview-img
// Hme _> About
// ABOUT _> CV (download option?)
// display hidden onClick NavElement
// DEPLOY on gh-pages 

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* {spread operator: kopie für path and element} */}
          {routes.map((route) => (
            <Route key={route.id} {...route} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
