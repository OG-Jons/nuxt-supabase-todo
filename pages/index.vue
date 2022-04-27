<template>
  <div>
    This is the index page
    URL: {{ config.public.supabaseUrl }}
    Key: {{ config.supabaseKey }}
  </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig();
console.log(config.supabaseKey)
console.log(config.public.supabaseUrl)

/*const supabaseUrl = 'https://bevpnjbjksuegghldxiu.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

console.log(supabase)*/
</script>
