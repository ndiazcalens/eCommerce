import { createContext, useState } from "react";


export const ProductsTypeIdContext = createContext();

export const ProductsTypeIdProvider = ({ children }) =>{
    const [ selectedProductTypeId, setSelectedProductTypeId ] = useState(null);


    return(
        <ProductsTypeIdContext.Provider value={ {selectedProductTypeId, setSelectedProductTypeId} }>
            {children}
        </ProductsTypeIdContext.Provider>
    )
};