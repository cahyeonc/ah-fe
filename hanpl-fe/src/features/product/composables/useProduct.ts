import { ref } from "vue";
import { mockProducts } from "../product.mock";
import type { Product } from "../types/product.types";

export function useProduct() {
  const products = ref<Product[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchProducts = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      await new Promise((res) => setTimeout(res, 500));
      products.value = mockProducts;
    } catch (e) {
      error.value = "상품을 불러오지 못했어요";
    } finally {
      isLoading.value = false;
    }
  };

  return { products, isLoading, error, fetchProducts };
}

export function useProductDetail() {
  const product = ref<Product | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchProduct = async (id: number) => {
    isLoading.value = true;
    error.value = null;
    try {
      await new Promise((res) => setTimeout(res, 300));
      const found = mockProducts.find((p) => p.id === id);
      if (!found) throw new Error("상품을 찾을 수 없어요");
      product.value = found;
    } catch (e: any) {
      error.value = e.message;
    } finally {
      isLoading.value = false;
    }
  };

  return { product, isLoading, error, fetchProduct };
}
