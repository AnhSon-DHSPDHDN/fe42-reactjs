import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ProductPage from "./pages/product/ProductPage";
import LoginPage from "./pages/login/LoginPage";
import HomeLayout from "./layouts/homeLayout";
import AdminLayout from "./layouts/adminLayout";
import AdminUsers from "./pages/admin/users/adminUsers";
import AdminProduct from "./pages/admin/products/adminProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home layout */}
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>

          {/* Admin layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminUsers />} />
            <Route path="products" element={<AdminProduct />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
