import PropTypes from "prop-types";

export default function Input({
  id,
  label,
  labelClass,
  type,
  defaultValue,
  handleChange,
  handleBlur,
}) {
  return (
    <div className="flex flex-col gap-y-2">
      {/* 'input' should use 'label' and not 'aria-label'. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label */}
      <label htmlFor={id} className={labelClass}>
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
        onBlur={handleBlur}
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelClass: PropTypes.string,
  type: PropTypes.oneOf(["text", "search", "email", "tel", "url"]),
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
};

Input.defaultProps = {
  labelClass: "sr-only",
  type: "text",
  defaultValue: "",

  // By default, do nothing
  handleChange: () => {},
  handleBlur: () => {},
};
