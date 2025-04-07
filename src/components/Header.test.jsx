import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import { AuthContext } from "../utils/AuthContext";
import { ThemeContext } from "../utils/ThemeContext";
import { Provider } from "react-redux";
import appStore from "../store/appStore"; // Import your Redux store
import React from "react";

test("it should render the header component", () => {
  // Mock context values
  const authContextValue = { isLoggedIn: true, logout: jest.fn() };
  const themeContextValue = { theme: "light", toggleTheme: jest.fn() };

  render(
    <Provider store={appStore}>
      <AuthContext.Provider value={authContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <Header />
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </Provider>
  );

  // Check if Logout button is in the document
  const element = screen.getByText("Logout");
  expect(element).toBeInTheDocument();
});
