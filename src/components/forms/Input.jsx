import PropTypes from "prop-types";

export default function Input({ id, label, type, defaultValue, handleChange }) {
  return (
    <>
      {/* 'input' should use 'label' and not 'aria-label'. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label */}
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        placeholder={label}
        type={type}
        // Upon submission, 'name' will be a query parameter in the URL
        name={id}
        className="mr-4 border-none font-extralight shadow"
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    </>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "search", "email", "tel", "url"]),
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: "text",
  defaultValue: "",
};
