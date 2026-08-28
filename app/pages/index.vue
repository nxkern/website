<script setup lang="ts">
useSeoMeta({
  title: "Dylan Marcano | Full Stack Software Developer",
  ogUrl: "https://nxbin.xyz",
  ogTitle:"Dylan Marcano | Full Stack Software Developer",  
  description: "Explore my work: a Full Stack Software Developer merging cutting-edge technologies with bussiness-driven results.",
  ogDescription:"Explore my work: a Full Stack Software Developer merging cutting-edge technologies with bussiness-driven results.",
  twitterCard: "summary",
  twitterTitle: "Dylan Marcano | Full Stack Software Developer",
  twitterDescription: "Explore my work: a Full Stack Software Developer merging cutting-edge technologies with bussiness-driven results."
})
definePageMeta({
    middleware: ["auth"]
})
</script>

<template>
    <div>
        <Hero />
        <Divider />
        <Projects />
        <Divider />
        <About />
        <Divider />
    </div>
</template>
<style lang="css" scoped></style>
