import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoritesActions";

export const initialState = {
  favorites: [{ title: "Movie", id: 1 }],
  displayFavorites: true,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES: {
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    }
    case ADD_FAVORITE:
      return {
        ...state,
        ...[favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload != item.id),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
