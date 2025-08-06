<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <Navbar />

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Vue Authentication Demo
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            This is a template for implementing authentication in Vue.js with protected routes.
          </p>
          
          <!-- Auth Status -->
          <div class="bg-white rounded-lg shadow p-6 mb-8">
            <h3 class="text-lg font-medium text-gray-900 mb-4">Authentication Status</h3>
            <div class="text-sm text-gray-600">
              <p>User: <span class="font-medium">{{ user ? user.name : 'Not logged in' }}</span></p>
              <p>Status: <span class="font-medium">{{ isAuthenticated ? 'Authenticated' : 'Not authenticated' }}</span></p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="space-x-4">
            <router-link 
              to="/login" 
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Login
            </router-link>
            <router-link 
              to="/dashboard" 
              class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Dashboard
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import Navbar from '@/components/navbar.vue'

const authStore = useAuthStore()

const user = computed(() => authStore.getUser)
const isAuthenticated = computed(() => authStore.getIsAuthenticated)
</script> 