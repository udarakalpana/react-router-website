import Product from "./Product.jsx";

const Products = () => {
    return (
        <div className='grid grid-cols-3'>
            <Product />
            <Product />
            <Product />
        </div>
    );
};

export default Products;