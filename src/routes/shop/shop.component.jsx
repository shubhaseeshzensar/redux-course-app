import CategoriesPreview from "../categories-preview/categories-preview.component";
import { Routes, Route } from "react-router-dom";
import Category from "../category/category.component";
import React,{ useEffect } from "react";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";
import "./shop.styles.scss";



const Shop = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = () => {  
      dispatch(fetchCategoriesAsync)
    }
    getCategoriesMap()
   },[])


  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
