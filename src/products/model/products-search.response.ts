export interface ProductsSearchResponse {
  currentPage: number;
  totalPages: number;
  foods: ProductsResponse[];
}

export interface ProductsResponse {
  dataType: string;
  description: string;
  foodNutrients: NutrientsResponse[];
  scientificName: string;
  score: number;
  additionalDescriptions: string;
}

export interface NutrientsResponse {
  name: string;
  amount: number;
  unitName: string;
  derivationCode: string;
  derivationDescription: string;
}
