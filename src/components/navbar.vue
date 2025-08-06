<template>
  <nav class=" bg-white shadow-sm">
    <div class="flex justify-between items-center max-w-7xl mx-auto p-4">
      <h1 class="text-xl font-semibold text-gray-900">
        <router-link to="/">
          Vue Auth Demo
        </router-link>
      </h1>

      <div class="flex items-center space-x-4">
        <template v-if="isAuthenticated">
          <router-link to="/" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Home
          </router-link>
          <router-link to="/dashboard" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Dashboard
          </router-link>
          <button @click="authStore.logout" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Logout
          </button>
        </template>
        <template v-else>
          <router-link to="/login" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Login
          </router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const isAuthenticated = computed(() => authStore.isAuthenticated)
</script>