import { ArtworkFormContext } from "../context/ArtworkFormContext";
import { useContext } from "react";

export const useArtworkFormContext = () => {
  const context = useContext(ArtworkFormContext);
  if (context === undefined) {
    throw new Error(
      "useArtworkFormContext must be used within a ArtworkFormContextProvider"
    );
  }
  return context;
};
