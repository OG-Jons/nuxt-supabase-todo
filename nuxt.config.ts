import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        supabaseKey: process.env.SUPABASE_KEY,
        public: {
            supabaseUrl: process.env.SUPABASE_URL,
        }
    }
})
