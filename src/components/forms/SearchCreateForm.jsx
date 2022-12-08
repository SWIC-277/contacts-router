import { Form, useSubmit } from "react-router-dom";
import Input from "./Input";

export default function SearchCreateForm() {
  const submit = useSubmit();

  return (
    <Form
      className="flex px-4"
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        submit(e.target, { method: "post" });
        e.target.reset();
      }}
    >
      {/* TODO: Clear this input after navigating to a contact */}
      <Input
        // On a GET submission, this will be used as a query parameter
        id="q"
        label="Search contacts"
        type="search"
        handleChange={(e) => {
          submit(e.currentTarget.form, { method: "get" });
        }}
      />
      <button type="submit" className="bg-sky-500 px-4 py-2 text-white">
        New
      </button>
    </Form>
  );
}
