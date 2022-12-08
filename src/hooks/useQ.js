import { useSearchParams } from "react-router-dom";

export default function useQ() {
  // This gets all the stuff that's in the query string (e.g. ?q=foo)
  const [searchParams] = useSearchParams();
  return searchParams.get("q");
}
