import PropTypes from "prop-types";
import SearchSpinner from "./SearchSpinner";

export default function SearchForm({ isSearching }) {
  return (
    <form id="search-form" role="search">
      <input
        id="q"
        aria-label="Search contacts"
        placeholder="Search"
        type="search"
        name="q"
      />

      {/* ⚠️ Prop Drilling - 🆗 if only 2 levels deep */}
      <SearchSpinner isSearching={isSearching} />
    </form>
  );
}

SearchForm.propTypes = {
  isSearching: PropTypes.bool,
};
