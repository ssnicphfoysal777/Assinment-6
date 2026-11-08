import { IProducts } from '@/types/productsType';
import React from 'react';
import ProductCard from './ProductCard';

const AllProducts = ({products}:{products: IProducts []}) => {
    return ( 
        <div className='container mx-auto'>
            <h2>THE LIBRARY</h2>
            <h4>Twelve lifts covering every major muscle group.</h4>

            <div className='grid grid-cols-3 gap-5'>
                {
                    products.map(product=><ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default AllProducts;