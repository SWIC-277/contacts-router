import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import Error from "./routes/Error";
import apiService from "./services/api.service";
import Contact from "./routes/Contact";

const loadContacts = async () => {
  const contacts = await apiService.getContacts();
  return { contacts };
};

// Keep this outside of component scope so it's not recreated on every render
const router = createBrowserRouter([
  {
    path: "/",

    // ⚠️ Must be a component, not a function
    element: <Root />,
    errorElement: <Error />,
    loader: loadContacts,
    children: [
      {
        path: "contacts/:id",
        element: <Contact />,

        // Must provide this to 🧒🏾
        loader: loadContacts,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
