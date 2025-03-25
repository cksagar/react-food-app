import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/feature/restaurant/RestaurantMenu";
import LoginPage from "./components/Login";

// Lazy loading for About page
const About = lazy(() => import("./components/About"));

const App = () => {
  return (
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
          <Route path="/restaurant/:id" element={<RestaurantMenu />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
