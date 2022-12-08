import mark from "@/assets/mark.svg";
import SearchCreateForm from "@components/forms/SearchCreateForm";
import Nav from "@components/Nav";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <main className="flex gap-x-4">
      <div
        className="flex h-screen w-max flex-col gap-y-4 border-r border-slate-400 bg-slate-200 py-4"
        id="side"
      >
        <header className="order-1 mt-auto flex items-center gap-x-2 border-gray-400">
          <img src={mark} alt="React Router Mark" className="h-8 w-8" />
          <h1>React Router Contacts</h1>
        </header>
        <div className="flex items-center gap-x-4">
          <Link to="/" className="text-blue-500 underline">
            Home
          </Link>
          <SearchCreateForm />
        </div>
        <Nav />
      </div>

      {/* Placeholder for a child component */}
      <Outlet />
    </main>
  );
}
