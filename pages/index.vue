<template>
    <div>
        <h1 class="uppercase">Homepage</h1>
        <!-- <img src="~/assets/images/nuxt-js.jpeg" alt="Nuxt.js" /> -->
    </div>
</template>
  
<script setup>

    // Layout on each page
    definePageMeta({
        layout: 'default'
    })

    // Meta content on each page
    useHead({
        title: 'Homepage',
        meta: [
            { name: 'description', content: 'Homepage' }
        ]
    })

    // Page script code
    import { onMounted } from 'vue'
    onMounted(() => {
    })
    
</script>
