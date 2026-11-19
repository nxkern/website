<script setup lang="ts">
import DescriptionCard from './_components/DescriptionCard.vue';
const currentIndex = ref<number>(0);
let timer: ReturnType<typeof setInterval> | null = null;
const { data: repos, refresh } = await useFetch<RepoWithLangs[]>("/api/repos");
const nextRepo = () => {
    if(!repos.value || repos.value.length === 0) return;
    currentIndex.value = (currentIndex.value + 1) % repos.value.length;
}

onMounted(async () => {
    timer = setInterval(nextRepo, 6000);
     await refresh();
    
    if (repos.value && currentIndex.value >= repos.value.length) {
        currentIndex.value = 0;
    }
})
onUnmounted(() => {
    if(timer) clearInterval(timer);
})
</script>
<template>
    <section>
        <h2>MY REPOS</h2>
        <div class="repos">
            <Transition name="fade" mode="out-in">
            <DescriptionCard
                v-if="repos && repos.length > 0"
                :key="repos[currentIndex]?.id"
                :dat="repos[currentIndex] ?? null"/>
            </Transition>
        </div>
    </section>
</template>
<style lang="css" scoped>
section {
    max-width: 40em;
    margin: 0 auto;
    margin-top: 4em;


    h2 {
        color: var(--text-color-neutral);
        font-size: .85em;
        margin-bottom: 2.2em;
    }

    .repos {
        display: flex;
        flex-direction: column;
        gap: 1em;
        min-height: 10em;
    }
    @media(width <= 40em) {
  .repos {
      min-height: 15em;
  }
}

}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(6px);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}
</style>
