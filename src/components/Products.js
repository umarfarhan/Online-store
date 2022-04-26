import React,{useContext} from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'
import Banner from ".//Banner"

const Products = () => {
    const {Products} = useContext(ProductsContext);
    const {dispatch} = useContext(CartContext);
    return (
        <div className="container">
            <Banner />
        <div className="products">
            {Products.map((product)=> (
                <div className="product" key={product.id}>
                    
                    <div classname="product-image">
                        <img src={product.image} alt="not found"/>
                    </div>
                    <div className="prodct-details">
                        <div className="product-name">
                            {product.name}
                        </div>
                        <div className="product-price">
                            pkr {product.price}
                        </div>
                    </div>
                    {product.status ==='hot' ? <div className="hot">Hot</div> : ''}
                    {product.status ==='new' ? <div className="new">New</div> : ''}

                    
                    <button  className="add-to-cart" onClick={()=> dispatch({type: 'ADD_TO_CART', id: product.id, product})}
                    > add to cart </button>
                    {product.status ==='hot' ? <div className="hot">Hot</div> : ''}
                    {product.status ==='new' ? <div className="new">New</div> : ''}
                </div>
            ))}
        </div>
        </div>
        
    )
}

export default Products
