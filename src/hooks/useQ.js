import { useSearchParams } from "react-router-dom";

export default function useQ() {
  const [searchParams] = useSearchParams();
  return searchParams.get("q");
}
