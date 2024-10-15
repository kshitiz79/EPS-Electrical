import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Layout from './layout/layout';
import ProductNservices from './pages/ProductNservices/ProductNservices';
import SingleProductPage from './pages/ProductNservices/SingleProductPage';
import Achivements from './pages/Achivememts/Achivements';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="productandservices" element={<ProductNservices />} />
          <Route path="contact" element={<Contact />} />
          <Route path="achivements" element={<Achivements />} />
          {/* Use element instead of component */}
          <Route path="product/:id" element={<SingleProductPage />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
