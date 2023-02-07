import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//layout v : import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';

import NoMatch from './pages/Error';

import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Layout />}>  this is for layout version
          <Route index element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="logement/:id" element={<Logement />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
          {/* </Route> this is for layout version */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

//soi je passe par layout, soi par header:footer.
// function Layout() {//version layout détaché.
//      return (
//        <div>
//
// je peu reécré la forme du header, donc metre le logo ici
//
//          {/* A "layout route" is a good place to put markup you want to
//              share across all the pages on your site, like navigation. */}
//          <nav>
//            <ul>
//              <li>
//                <Link to="/">Home</Link>
//              </li>
//              <li>
//                <Link to="/about">About</Link>
//              </li>
//              <li>
//                <Link to="/nothing-here">Nothing Here</Link>
//              </li>
//            </ul>
//          </nav>

//          <hr />

//          {/* An <Outlet> renders whatever child route is currently active,
//              so you can think about this <Outlet> as a placeholder for
//              the child routes we defined above. */}
//          <Outlet />
//        </div>
//      );
//    }

/* version simple avec layout rataché
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="page1" element={<Page1 />} />
          <Route exact path="page2" element={<Page2 />} />
          <Route exact path="page3" element={<Page3 />} />
        </Routes>
        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Page 1</Link></li>
            <li><Link to="page2">Page 2</Link></li>
            <li><Link to="page3">Page 3</Link></li>
          </ul>
        </div>
      </Router>
    </div>
  );
}
*/
