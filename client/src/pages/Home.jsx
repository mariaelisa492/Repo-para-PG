import React from 'react'
import Footer from '../components/Footer/Footer'

export const Home = () => {
    return (
        <>
            <div>
                {filteredProducts.length > 0 ? <ProductsList filteredProducts={filteredProducts} /> : <p>loading</p>}
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
