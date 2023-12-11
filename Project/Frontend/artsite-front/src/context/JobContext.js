import { createContext, useReducer } from "react";

export const initialValues = {
  position: "",
  description: "",
  skills: "",
  location: "",
  type: "",
  medium: "",
  tags: [],
};

export const JobContext = createContext(null);

export const jobReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "POSITION_CHANGE":
      return { ...state, position: action.payload };
    case "DESCRIPTION_CHANGE":
      return { ...state, description: action.payload };
    case "SKILLS_CHANGE":
      return { ...state, skills: action.payload };
    case "LOCATION_CHANGE":
      return { ...state, location: action.payload };
    case "TYPE_CHANGE":
      return { ...state, type: action.payload };
    case "MEDIUM_CHANGE":
      return { ...state, medium: action.payload };
    case "TAGS_CHANGE":
      return { ...state, tags: [...state.tags, action.payload] };
    case "REMOVE_TAG":
      const tags = state.tags.filter((tag) => tag !== action.payload);
      return { ...state, tags: [...tags] };
    default:
      return state;
  }
};

export const JobContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobReducer, initialValues);

  return (
    <JobContext.Provider value={{ ...state, dispatch }}>
      {children}
    </JobContext.Provider>
  );
};
