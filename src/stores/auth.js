import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(null)
  const token = ref(null)
  const isAuthenticated = ref(false)

  // Getters
  const getUser = computed(() => user.value)
  const getToken = computed(() => token.value)
  const getIsAuthenticated = computed(() => isAuthenticated.value)

  const login = (credentials) => {
    // TODO: Implement login logic
    console.log('Login called with:', credentials)
  }

  const logout = () => {
    // TODO: Implement logout logic
    console.log('Logout called')
  }

  const checkAuth = () => {
    // TODO: Implement auth check logic
    console.log('Check auth called')
  }

  return {
    user,
    token,
    isAuthenticated,
    getUser,
    getToken,
    getIsAuthenticated,
    login,
    logout,
    checkAuth
  }
}) 