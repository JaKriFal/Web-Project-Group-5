import { ArtworkContext } from "../context/ArtworkContext";
import { useContext } from "react";

export const useArtworkContext = () => {
  const context = useContext(ArtworkContext);
  if (context === undefined) {
    throw new Error(
      "useArtworkContext must be used within a ArtworkContextProvider"
    );
  }
  return context;
};
