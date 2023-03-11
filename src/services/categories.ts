import { ICategory } from "./../components/models/categories";
import { BASE_URL } from "../utils/constants";

export const fetchCategories = () =>
  fetch(`${BASE_URL}/categories`).then(
    async (response): Promise<ICategory[]> => {
      if (!response) return [];

      const data: string[] = await response.json();

      return data.map((category) => ({
        title: category,
      }));
    }
  );
