// import { CATEGORY_ACTION_TYPES } from "./category.types";

// export const CATEGORIES_INITIAL_STATE = {
//   categories: [],
//   isLoading: false,
//   error: null,
// };

// export const categoryReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
//       return {
//         ...state,
//         categories: payload,
//       };

//     default:
//       return state;
//   }
// };


import { CATEGORY_ACTION_TYPES } from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: payload
      };
      case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
        return {
          ...state,
          error: payload
        };case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
        return {
          ...state,
           isLoading: true,
        };
    default:
      return state;
  }
};
