import { createContext, useReducer } from 'react'

export const ArtworkGetAllContext = createContext(null)

export const artworksReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ARTWORKS': 
      return {
        artworks: action.payload
      }
    case 'DELETE_WORKOUT':
      return {
        artworks: state.artworks.filter((art) => art._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const ArtworkGetAllContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(artworksReducer, {
    artworks: null
  })

  return (
    <ArtworkGetAllContext.Provider value={{...state, dispatch}}>
      { children }
    </ArtworkGetAllContext.Provider>
  )
}