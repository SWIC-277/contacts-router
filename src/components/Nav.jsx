import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Nav({ contacts }) {
  return (
    <nav className="flex flex-col gap-y-4">
      <ul>
        {contacts?.map((contact) => {
          return (
            <li key={contact.id}>
              <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string,
      avatar: PropTypes.string,
      twitter: PropTypes.string,
      notes: PropTypes.string,
      isFav: PropTypes.bool,
    })
  ),
};
