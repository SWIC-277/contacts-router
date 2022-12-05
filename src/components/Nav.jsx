import { Link, useLoaderData } from "react-router-dom";

export default function Nav() {
  const { contacts, q } = useLoaderData();

  const filteredContacts = q
    ? contacts.filter(
        (contact) =>
          contact.firstName.includes(q) || contact.lastName.includes(q)
      )
    : contacts;

  return (
    <nav className="grow border-y-2 border-gray-300 py-2">
      <ul>
        {filteredContacts.map((contact) => {
          return (
            <li key={contact.id} className="pointer my-4 hover:text-blue-500">
              <Link to={`/contacts/${contact.id}`}>
                {contact.firstName} {contact.lastName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
