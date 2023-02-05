import PROJECT from "./types";

const initalState = {
  data: [],
  themes: [],
  isLoading: false,
  isError: false
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case PROJECT.GET_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case PROJECT.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        themes: action.themes,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;