<script setup lang="ts">
import Langs from "./languages.vue";
const props = withDefaults(defineProps<{
    isWeb?: boolean,
    dat: RepoWithLangs | null
}>(), {
    isWeb: false
});

</script>
<template>
    <div class="card-description">
        <template v-if="!props.dat">
            <div class="skeleton-link"></div>
            <div class="container">
                <div class="skeleton-text"></div>
            </div>
        </template>

        <template v-else>
              <a :href="props.dat.html_url" target="_blank" class="linke">
                {{ props.dat.name }}
              </a>
              <div class="container">
                <p class="description">{{ props.dat.description }}</p>
                <div class="topics">             
                    <Langs :datas="props.dat.languagesData"/>
                </div>
              </div>
        </template>
    </div>
</template>
<style lang="css" scoped>
.card-description {

    .linke {
        display: inline-flex;
        gap: .4em;
        align-items: center;

        width: fit-content;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .skeleton-link,
    .skeleton-text{
        background-color: var(--text-color-neutral);
        opacity: 0.1;
        border-radius: 4px;
        display: inline-block;
    }

    .skeleton-link {
        width: 120px;
        height: 1.2em;
        margin-bottom: 0.5em;
    }

    .skeleton-text {
        width: 100%;
        height: 3em;
        margin-top: 0.8em;
    }

    .container {
        min-height: auto;

        .topics {
            display: flex;
            gap: .5em;
            flex-wrap: wrap;
        }

        .description {
            margin-top: .8em;
            margin-bottom: 0;
            color: var(--text-color-neutral)
        }
    }
}

a {
    text-decoration: none;
    color: var(--text-color);
    transition: color .3s ease;

    &:hover {
        color: var(--text-color-neutral)
    }
}

</style>
