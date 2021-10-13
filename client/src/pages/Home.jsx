import React from 'react'

export const Home = () => {

    const filteredProducts = useSelector((state) => state.filteredProducts)

    // console.log(products, 'Estado de no modificable')
    console.log(filteredProducts, 'Estado modificable')

    return (
        <div>
            {filteredProducts.length > 0 ? <ProductsList filteredProducts={filteredProducts} /> : <p>loading</p>}
        </div>
    );
};
