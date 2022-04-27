<template>
  <div>
    This is the index pagers
  </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js/dist/main/index.js'

const config = useRuntimeConfig();

const supabaseUrl = config.public.supabaseUrl
const supabaseKey = config.public.supabasePublicKey
const supabase = createClient(supabaseUrl, supabaseKey)

console.log(supabase)

</script>
