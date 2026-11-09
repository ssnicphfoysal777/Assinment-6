"use client";

import { IProducts, IProductsContext } from "@/types/productsType";

import { createContext, ReactNode, useContext, useState } from "react";

const ProductContext =createContext<IProductsContext|undefined>(undefined)
export function ProductProvider({children}:{children:ReactNode}){
const [planlist,setPlanlist]=useState<IProducts[]>([]);
const [savelist,setSavelist]=useState<IProducts[]>([]);
const value ={planlist,setPlanlist,savelist,setSavelist}
    return (
         <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )       
}

export function useProductContext(){
    const context =useContext(ProductContext)
    if(!context){
        throw new Error("Maybe You haven't wrapped the app into the provider")
    }
    return context
}