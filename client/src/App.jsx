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
import { AuthProvider } from "./utils/AuthProvider";
import { UserDetailsProvider } from "./utils/UserDetailsProvider";
import { appStore } from "./store/appStore";
import YoutubeMain from "./youtube/components/YoutubeMain";
// Lazy loading for About page
const About = lazy(() => import("./components/About"));

const App = () => {
  return (
    <Provider store={appStore}>
      <AuthProvider>
        <UserDetailsProvider>
          {/* ✅ AuthProvider must wrap the whole app */}
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
                <Route path="/youtube" element={<YoutubeMain />} />
                <Route path="/restaurant/:id" element={<RestaurantMenu />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </UserDetailsProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
