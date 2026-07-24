<script setup lang="ts">
import { onMounted, ref } from 'vue';
const goxeData = ref<RepoApiCodeberg | null>(null);
const pulseData = ref<RepoApiCodeberg | null>(null);
async function fetchGithubData() {
    try {
        const goxePromise = fetch('https://codeberg.org/api/v1/repos/Nxus/goxe');
        const pulsePromise = fetch('https://codeberg.org/api/v1/repos/Nxus/pulse.nvim');

        const [goxeRes, pulseRes] = await Promise.all([
            goxePromise,
            pulsePromise,
        ]);

        const [goxe, pulse] = await Promise.all([
            goxeRes.json() as Promise<RepoApiCodeberg>,
            pulseRes.json() as Promise<RepoApiCodeberg>
        ]);

        goxeData.value = goxe;
        pulseData.value = pulse;


    } catch (error) {
        console.error(error);
    }
}
onMounted(fetchGithubData)
useSeoMeta({
  title: "Dylan Marcano | Software & DevOps Engineer",
  ogUrl: "https://nxbin.xyz",
  ogTitle:"Dylan Marcano | Software & DevOps Engineer",  
  description: "Explore my work: a Software & DevOps Engineer merging cutting-edge technologies with bussiness-driven results.",
  ogDescription:"Explore my work: a Software & DevOps Engineer merging cutting-edge technologies with bussiness-driven results.",
  twitterCard: "summary",
  twitterTitle: "Dylan Marcano | Software & DevOps Engineer",
  twitterDescription: "Explore my work: a Software & DevOps Engineer merging cutting-edge technologies with bussiness-driven results."
})
definePageMeta({
    middleware: ["auth"]
})
</script>

<template>
    <div>
        <Hero />
        <Divider />
        <Projects :goxe="goxeData" :pulse="pulseData" />
        <Divider />
        <About />
        <Divider />
    </div>
</template>
<style lang="css" scoped></style>
