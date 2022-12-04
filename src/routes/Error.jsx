import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-y-4">
      {/* It's a new 'page,' so use another h1. */}
      <h1 className="text-5xl font-semibold text-red-500">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <em className="italic">{error.statusText || error.message}</em>
      </p>
    </main>
  );
}
