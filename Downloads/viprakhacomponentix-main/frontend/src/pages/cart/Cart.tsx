import React from 'react';
import Banner from '../../features/banner/Banner';
import FooterOne from '../../components/footers/FooterOne';
import CartMain from '../../features/cart/CartMain';

const Cart: React.FC = () => {
    return (
        <>
            <Banner title='Cart' subTitle='Cart' />
            <CartMain />
            <FooterOne />
        </>
    );
};

export default Cart;