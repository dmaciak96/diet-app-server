export interface ProductsResponse {
    products: ProductResponse[]
}

export interface ProductResponse {
    name: string,
    description: string,
    category: string,
    foodNutrients: FoodNutrientsResponse[]
}

export interface FoodNutrientsResponse {
    nutrientId: number,
    nutrientName: string,
    unitName: string,
    value: number,
}