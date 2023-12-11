import { ArtworkContext } from "../context/ArtworkContext";
import { ArtworkGetAllContext } from "../context/ArtworkGetAllContext.js"
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

export const useArtworkGetAllContext = () => {
  const context = useContext(ArtworkGetAllContext);
  if (context === undefined) {
    throw new Error(
      "useArtworkGetAllContext must be used within a ArtworkGetAllContextProvider"
    );
  }
  console.log(context);
  return context;
}