/* eslint-disable @typescript-eslint/no-unused-vars */
import {createContext, useEffect, useState} from 'react';
import {
  Producto,
  ProductoX,
  ProductsResponse,
} from '../../interfaces/ProductInterfaces';
import React from 'react';
import cafeApi from '../../api/cafeApi';

// tipado de el contexto
type ProductsContextProps = {
  products: Producto[];
  loadProducts: () => Promise<void>;
  addProduct: (categoryId: string, productName: string) => Promise<Producto>;
  removeProduct: (productId: string) => Promise<void>;
  // loadProductById: (productId: string) => Promise<Producto>;
  loadProductById: (productId: string) => Promise<Producto>;
  updateImageProduct: (data: unknown, productId: string) => Promise<void>;
  updateProduct: (
    categoryId: string,
    productName: string,
    productId: string,
  ) => Promise<Producto>;
};

// contexto al que se puede acceder mediante useContext
export const ProductsContext = createContext({} as ProductsContextProps);

// componente JSX que extiende el el ProductsContext a toda la app
export interface Props {
  children: JSX.Element | JSX.Element[];
}
export const ProductsProvider = ({children}: Props) => {
  const [products, setProducts] = useState<Producto[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const {data} = await cafeApi.get<ProductsResponse>('/productos?limite=50');
    setProducts([...data.productos]);
  };
  const addProduct = async (categoryId: string, productName: string) => {
    const res = await cafeApi.post<Producto>('/productos', {
      nombre: productName,
      categoria: categoryId,
    });
    setProducts([...products, res.data]);
    return res.data;
  };
  const removeProduct = async (productId: string) => {};

  const loadProductById = async (productId: string) => {
    const res = await cafeApi.get<Producto>(`/productos/${productId}`);
    return res.data;
  };

  const updateImageProduct = async (data: unknown, productId: string) => {};
  const updateProduct = async (
    categoryId: string,
    productName: string,
    productId: string,
  ) => {
    const res = await cafeApi.put<Producto>(`/productos/${productId}`, {
      nombre: productName,
      categoria: categoryId,
    });
    console.log(res.data);

    setProducts([
      ...products.map(prod => (prod._id === productId ? res.data : prod)),
    ]);
    return res.data;
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        loadProducts,
        addProduct,
        removeProduct,
        loadProductById,
        updateImageProduct,
        updateProduct,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};
