import { ProductElement } from "../components/models/products";
import { BASE_URL } from "../utils/constants";

export const fetchProducts = () =>
  fetch(`${BASE_URL}/`).then(async (response): Promise<ProductElement[]> => {
    if (!response) return [];

    const data: ProductElement[] = await response.json();

    return data;
  });

export const fetchProduct = (id: number) =>
  fetch(`${BASE_URL}/${id}`).then(
    async (response): Promise<ProductElement | null> => {
      if (!response) return null;

      const data: ProductElement = await response.json();

      return data;
    }
  );

export const fetchCategoryProducts = (category: string) =>
  fetch(`${BASE_URL}/category/${category}`).then(
    async (response): Promise<ProductElement[]> => {
      if (!response) return [];

      const data: ProductElement[] = await response.json();

      return data;
    }
  );
