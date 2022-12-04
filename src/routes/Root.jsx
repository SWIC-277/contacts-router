import mark from "@/assets/mark.svg";
import Nav from "@components/Nav";
import SearchForm from "@components/SearchForm/SearchForm";
import SubmitForm from "@components/SubmitForm";

export default function Root() {
  return (
    <div
      className="flex h-screen w-96 flex-col justify-between border-r border-slate-400 bg-slate-200 py-4"
      id="side"
    >
      <header className="order-1 flex items-center gap-x-2 border-t border-gray-400 pt-4">
        <img src={mark} alt="React Router Mark" className="h-8 w-8" />
        <h1>React Router Contacts</h1>
      </header>
      <div className="flex items-center gap-x-4">
        <SearchForm />
        <SubmitForm />
        <Nav />
      </div>
    </div>
  );
}
