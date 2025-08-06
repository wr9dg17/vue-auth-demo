<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <Navbar />

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <!-- Welcome Section -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              Welcome to your Dashboard
            </h2>
            <p class="text-gray-600 mb-6">
              This is a protected page that requires authentication to access.
            </p>
            
            <!-- User Info -->
            <div class="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 class="text-lg font-medium text-gray-900 mb-3">User Information</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="text-sm font-medium text-gray-500">Name</p>
                  <p class="text-sm text-gray-900">{{ user?.name || 'Not available' }}</p>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-500">Email</p>
                  <p class="text-sm text-gray-900">{{ user?.email || 'Not available' }}</p>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-500">User ID</p>
                  <p class="text-sm text-gray-900">{{ user?.id || 'Not available' }}</p>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-500">Authentication Status</p>
                  <p class="text-sm text-gray-900">{{ isAuthenticated ? 'Authenticated' : 'Not authenticated' }}</p>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex space-x-4">
              <button 
                @click="handleLogout"
                class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import Navbar from '@/components/navbar.vue'

const router = useRouter()
const authStore = useAuthStore()

const user = computed(() => authStore.getUser)
const isAuthenticated = computed(() => authStore.getIsAuthenticated)

const handleLogout = () => {
  // TODO: Implement logout logic
  console.log('Logout called')
  authStore.logout()
  router.push('/')
}
</script> 