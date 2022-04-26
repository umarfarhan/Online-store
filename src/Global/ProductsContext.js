import React, {createContext, useState} from 'react'

import bracelet from "../Images/bracelet.jpg"
import dslr from "../Images/dslr.jpg"
import headphones from "../Images/headphones.jpg"
import iphone from "../Images/iphone.jpg"
import locket from "../Images/locket.jpg"
import microphone from "../Images/microphone.jpg"
import necklace from "../Images/necklace.jpg"
import perfume from "../Images/perfume.jpg"
import ring from "../Images/ring.jpg"
import shoes from "../Images/shoes.jpg"
import watch from "../Images/watch.jpg"
 export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState([
        {id: 1, name: 'bracelet', price:  1200, image: bracelet, status: 'hot'},
        {id: 2, name: 'dslr', price: 35000, image: dslr, status: 'new'},
        {id: 3, name: 'headphones', price: 800, image: headphones, status: 'new'},
        {id: 4, name: 'iphone', price: 45000, image: iphone, status: 'hot'},
        {id: 5, name: 'locket', price: 2200, image: locket, status: 'new'},
        {id: 6, name: 'microphone', price: 1000, image: microphone, status: 'hot'},
        {id: 7, name: 'necklace', price: 1200, image: necklace, status: 'new'},
        {id: 8, name: 'perfume', price: 1800, image: perfume, status: 'hot'},
        {id: 9, name: 'ring', price: 1500, image: ring, status: 'new'},
        {id: 10, name: 'bracelet', price: 700, image: bracelet, status: 'hot'},
        {id: 11, name: 'shoes', price: 3000, image: shoes, status: 'hot'},
        {id: 12, name: 'watch', price: 25000, image: watch, status: 'new'},

    ]);
    return (
        
            <ProductsContext.Provider value={{Products:  [...products]}} >
                {props.children}
            </ProductsContext.Provider>
        
    )
}

export default ProductsContextProvider;
