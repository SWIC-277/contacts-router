import { Link, useLoaderData } from "react-router-dom";

export default function Nav() {
  const { contacts } = useLoaderData();

  return (
    <nav className="grow border-y-2 border-gray-300 py-2">
      <ul>
        {contacts.map((contact) => {
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
