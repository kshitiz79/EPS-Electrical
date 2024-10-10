
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Layout from './layout/layout';




function App() {
  return (

      <Router>

        <Routes>
=
<Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>


        </Routes>
      </Router>

  );
}

export default App;
