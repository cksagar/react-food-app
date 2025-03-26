import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Cart from "./components/feature/cart/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/feature/restaurant/RestaurantMenu";
import LoginPage from "./components/Login";
import { AuthProvider } from "./utils/AuthContext";
import { ThemeProvider } from "./utils/ThemeContext";
import { appStore } from "./store/appStore";

// Lazy loading for About page
const About = lazy(() => import("./components/About"));

const App = () => {
  return (
    <Provider store={appStore}>
      <AuthProvider>
        <ThemeProvider>
          {/* ✅ ThemeContext must wrap the whole app */}
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow p-4">
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<Body />} />
                <Route
                  path="/about"
                  element={
                    <Suspense fallback={<h1>Loading...</h1>}>
                      <About />
                    </Suspense>
                  }
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/restaurant/:id" element={<RestaurantMenu />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
