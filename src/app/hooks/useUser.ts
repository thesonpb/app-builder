import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function useUser() {
  const { user } = useContext(AppContext);
  return { user };
}
