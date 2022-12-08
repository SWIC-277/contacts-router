import { useParams, useRouteLoaderData } from "react-router-dom";

export default function useContact() {
  const { contacts } = useRouteLoaderData("root");
  const { id } = useParams();

  return contacts.find((contact) => contact.id === id);
}
