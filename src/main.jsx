import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Contact from "./routes/Contact";
import Error from "./routes/Error";
import Root from "./routes/Root";
import apiService from "./services/api.service";

const createContact = async ({ request }) => {
  const fd = await request.formData();

  console.log(Object.fromEntries(fd.entries()));
};

const loadContacts = async ({ request }) => {
  // Only load contacts if there is no query string
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
    shouldRevalidate: ({ currentUrl }) =>
      // Don't revalidate if this is only about a query string
      !currentUrl.searchParams.has("q"),
    action: createContact,
    children: [
      {
        path: "contacts/:id",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
