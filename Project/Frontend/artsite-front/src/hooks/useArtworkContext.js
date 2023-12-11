import { ArtworkFormContext } from "../context/ArtworkFormContext";
import { ArtworkGetAllContext } from "../context/ArtworkGetAllContext.js"
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