import { JobContext } from "../context/JobContext";
import { useContext } from "react";

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error("useJobContext must be used within a JobContextProvider");
  }
  return context;
};
