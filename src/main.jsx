import capitalize from "lodash.capitalize";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import EditForm from "./components/forms/EditForm";
import "./index.css";
import Contact from "./routes/Contact";
import Error from "./routes/Error";
import Root from "./routes/Root";
import apiService from "./services/api.service";

const createContact = async ({ request }) => {
  const fd = await request.formData();

  // Separate the first and last name from 'q' query parameter
  const [firstName, lastName] = fd.get("q").split(" ");

  const { id } = await apiService.createContact({
    firstName: capitalize(firstName),
    lastName: capitalize(lastName),
  });

  return redirect(`contacts/${id}`);
};

const loadContacts = async () => {
  const contacts = await apiService.getContacts();
  return { contacts };
};

// Keep this outside of component scope so it's not recreated on every render
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: loadContacts,
    shouldRevalidate: ({ currentParams, nextUrl }) => {
      // Don't revalidate if this is just an update to the 'q' query parameter
      // Don't revalidate if this is just clicking on a contact (:id)
      return !currentParams.id && !nextUrl.searchParams.get("q");
    },
    action: createContact,
    id: "root",
    children: [
      {
        path: "contacts/:id",
        element: <Contact />,
      },
      {
        path: "contacts/:id/edit",
        element: <EditForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
