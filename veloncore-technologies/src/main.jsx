import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./store/store.js";
import { ViewProvider } from "./context/ViewContext.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ViewProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ViewProvider>
    </Provider>
  </React.StrictMode>
);