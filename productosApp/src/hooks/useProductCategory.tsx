import React from 'react';
import cafeApi from '../api/cafeApi';
import {Categoria, CategoriasResponse} from '../interfaces/ProductInterfaces';

export default function useProductCategory() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [categories, setCategories] = React.useState<Categoria[]>([]);

  const getCategories = async () => {
    const {data} = await cafeApi.get<CategoriasResponse>('/categorias');
    setCategories(data.categorias);
    setIsLoading(false);
  };

  React.useEffect(() => {
    getCategories();
  }, []);

  return {isLoading, categories};
}
