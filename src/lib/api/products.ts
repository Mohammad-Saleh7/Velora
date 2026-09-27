import type {
  Product,
  ProductsResponse,
  ProductCategory,
} from "@/types/product";

const API_URL = "https://dummyjson.com";

// ============================================
// Products
// ============================================

export async function getProducts(
  limit = 30,
  skip = 0,
): Promise<ProductsResponse> {
  const response = await fetch(
    `${API_URL}/products?limit=${limit}&skip=${skip}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json() as Promise<ProductsResponse>;
}

// ============================================
// Product by ID
// ============================================

export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json() as Promise<Product>;
}

// ============================================
// Search Products
// ============================================

export async function searchProducts(
  query: string,
  limit = 30,
  skip = 0,
): Promise<ProductsResponse> {
  const response = await fetch(
    `${API_URL}/products/search?q=${encodeURIComponent(query)}&limit=${limit}&skip=${skip}`,
  );

  if (!response.ok) {
    throw new Error("Failed to search products");
  }

  return response.json() as Promise<ProductsResponse>;
}

// ============================================
// Products by Category
// ============================================

export async function getProductsByCategory(
  category: string,
  limit = 30,
  skip = 0,
): Promise<ProductsResponse> {
  const response = await fetch(
    `${API_URL}/products/category/${encodeURIComponent(category)}?limit=${limit}&skip=${skip}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products by category");
  }

  return response.json() as Promise<ProductsResponse>;
}

// ============================================
// Categories
// ============================================

export async function getCategories(): Promise<ProductCategory[]> {
  const response = await fetch(`${API_URL}/products/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json() as Promise<ProductCategory[]>;
}
