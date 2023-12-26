import { createContext, useReducer } from "react";

export const JobGetAllContext = createContext(null);

export const jobsReducer = (state, action) => {
  switch (action.type) {
    case "SET_JOBS":
      return {
        jobs: action.payload,
      };
    case "DELETE_JOB":
      return {
        jobs: state.jobs.filter((job) => job._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const JobGetAllContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobsReducer, {
    jobs: null,
  });

  return (
    <JobGetAllContext.Provider value={{ ...state, dispatch }}>
      {children}
    </JobGetAllContext.Provider>
  );
};
