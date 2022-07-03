import React, { Fragment, useEffect, useState } from 'react';
import './category.styles.scss';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';




const Category = () => {
    const { category } = useParams()

    // console.log('render/re-rendering from Category component....')
    //
    const categoriesMap = useSelector(selectCategoriesMap)

    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        // console.log('effect first fired calling setProducts')

        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <h3 className='title'>{category}</h3>
            {
                products &&
                products.map((product) =>
                    <ProductCard key={product.id}
                        product={product} />)}
        </Fragment>
    );
};

export default Category;


// user = {
//     id: 100, name: 'David', role: 'Admin'
// }

// user = {...user, user.role: "Customer"}