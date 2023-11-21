import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return { ...state, displayFavorites: !state.displayFavorites };
    case ADD_FAVORITE:
      if (state.favorites.find((fav) => fav.id === action.payload.id)) {
        return state;
      } else {
        return { ...state, favorites: [...state.favorites, action.payload] };
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((rmv) => action.payload !== rmv.id),
      };

    default:
      return state;
  }
};

export default reducer;
