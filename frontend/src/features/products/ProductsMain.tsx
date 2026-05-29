import React from 'react';
import AllProducts from './AllProducts';


const ProductsMain: React.FC = () => {
    return (
        <section className="product">
            <div className="container">
                <div className="row">
                    <AllProducts />
                   
                </div>
            </div>
        </section>
    );
};

export default ProductsMain;