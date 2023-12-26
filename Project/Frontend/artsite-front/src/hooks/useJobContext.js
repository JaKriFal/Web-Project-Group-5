import { JobContext } from "../context/JobContext";
import { JobGetAllContext } from "../context/JobGetAllContext";
import { useContext } from "react";

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error("useJobContext must be used within a JobContextProvider");
  }
  return context;
};

export const useJobGetAllContext = () => {
  const context = useContext(JobGetAllContext);
  if (context === undefined) {
    throw new Error(
      "useJobGetAllContext must be used within a JobGetAllContextProvider"
    );
  }
  return context;
};
