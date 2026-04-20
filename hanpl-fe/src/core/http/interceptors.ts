/* import { http } from "./instance";
import { useAuthStore } from "@/core/auth/auth.stor0e";

http.interceptors.request.use((config) => {
  const auth = useAuthStore();
  config.headers.Authorization = `Bearer ${auth.token}`;
  return config;
});

http.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      // 로그아웃 처리
    }
    return Promise.reject(error);
  },
); */
