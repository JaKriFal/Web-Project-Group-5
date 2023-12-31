import { createContext, useReducer } from "react";

export const initialValues = {
  title: "",
  description: "",
  tags: [],
  images: [],
  thumbnail: null,
};

export const ArtworkContext = createContext(null);

export const artworkReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "TITLE_CHANGE":
      return { ...state, title: action.payload };
    case "DESCRIPTION_CHANGE":
      return { ...state, description: action.payload };
    case "TAGS_CHANGE":
      return { ...state, tags: [...state.tags, action.payload] };
    case "REMOVE_TAG":
      const tags = state.tags.filter((tag) => tag !== action.payload);
      return { ...state, tags: [...tags] };
    case "IMAGES_CHANGE":
      const imagesFile = [...state.images, ...Array.from(action.payload)];
      return { ...state, images: [...imagesFile] };
    case "DELETE_IMAGE":
      const filteredFiles = state.images.filter(
        (image) => image !== action.payload
      );
      return { ...state, images: [...filteredFiles] };
    case "THUMBNAIL_CHANGE":
      return { ...state, thumbnail: action.payload };
    case "RESET_FORM":
      return initialValues;
    default:
      return state;
  }
};

export const ArtworkContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(artworkReducer, initialValues);

  return (
    <ArtworkContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ArtworkContext.Provider>
  );
};
