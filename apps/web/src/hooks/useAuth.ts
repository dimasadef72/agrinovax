"use client";

import { useQuery } from "@tanstack/react-query";
import { client } from "@/utils/orpc";
import { apiService } from "@/lib/api";

interface User {
  id: number;
  email: string;
  role: string;
  fullName: string;
  createdAt?: string;
  created_at?: string; // Database field name
}

export const useAuth = () => {
  // Get userId from localStorage
  const getUserId = () => {
    if (typeof window === "undefined") return null;
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        return user.id;
      } catch (error) {
        localStorage.removeItem("user");
        return null;
      }
    }
    return null;
  };

  const userId = getUserId();

  // Use React Query to fetch user data (only on page refresh)
  const { data: user, isLoading } = useQuery({
    queryKey: ["currentUser", userId],
    queryFn: async () => {
      if (!userId) return null;
      const result = await client.auth.getCurrentUser({ userId });
      return result.success ? result.user : null;
    },
    enabled: !!userId, // Only run query if userId exists
    refetchOnWindowFocus: false, // Don't refetch on window focus
    refetchInterval: false, // No auto-refresh
    staleTime: Infinity, // Data never becomes stale automatically
  });

  const logout = async () => {
    try {
      // Clear session cookie by calling logout endpoint
      await apiService.post("/auth/signout", {});
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Clear localStorage and redirect regardless of API call result
      localStorage.removeItem("user");
      window.location.href = "/";
    }
  };

  return {
    user: user || null,
    isLoggedIn: !!user,
    isLoading,
    logout,
  };
};
