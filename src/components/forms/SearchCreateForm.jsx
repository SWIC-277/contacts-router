import { Form, useSubmit } from "react-router-dom";
import Input from "./Input";

export default function SearchCreateForm() {
  const submit = useSubmit();

  return (
    <Form className="flex px-4" method="post">
      <Input
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
