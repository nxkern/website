<script setup lang="ts">
import DynamicComponent from './_components/DynamicComponent.vue';

const { data } = useSocket();
</script>

<template>
    <header>
        <div class="status-data">
            <DynamicComponent :data="data" />
        </div>
        <div class="buttons-tools">
            <Svg href="https://github.com/nxkern/" target="_blank" aria-label="github">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-github-icon lucide-github">
                  <title
                   id="title15">Github logo</title>
                    <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
            </Svg>
            <Svg href="https://x.com/nxkern_" target="_blank" aria-label="X.com">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x preview-icon"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </Svg>
        </div>
    </header>
</template>

<style scoped>
header {
    max-width: 40em;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0;
    transition: background-color 0.2s, color 0.2s;
    margin-bottom: .3em;
}

.status-data {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .3em;
}

.buttons-tools {
    margin-top: .3em;
    display: flex;
    gap: 1em;


}

@keyframes statusLightOffline {

    0%,
    100% {
        background-color: var(--text-color-neutral);
    }

    50% {
        background-color: var(--text-color);
    }
}
</style>
