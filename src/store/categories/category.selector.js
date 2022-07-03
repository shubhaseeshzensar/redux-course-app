import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categoryReducer;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => 
    // console.log('createSelector 2 fired in category.selector.js')

    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      // console.log(acc);
      return acc;
    }, {})
  
);
