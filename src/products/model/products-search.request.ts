export interface ProductsSearchRequest {
  query: string;
  dataType: string[];
  pageSize: number;
  pageNumber: number;
  sortBy: string;
  sortOrder: string;
  brandOwner: string;
}
