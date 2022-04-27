import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/web-vitals'],
    runtimeConfig: {
        public: {
            supabasePublicKey: process.env.SUPABASE_PUBLIC_KEY,
            supabaseUrl: process.env.SUPABASE_URL,
        }
    }
})
