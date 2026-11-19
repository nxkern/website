<script setup lang="ts">
    const props = defineProps<{
    datas?: LanguageCountGh | null;
    }>();
    const getPercentage = (bytes: number) => {
        if (!props.datas) return;
        const total = Object.values(props.datas).reduce((acc, bytes) => acc + bytes, 0)
        console.log(total);
        return total ? ((bytes / total) * 100).toFixed(2) : 0
    }
</script>

<template>
    <div class="langs">
        <div v-if="props.datas && Object.keys(props.datas).length > 0" 
         v-for="(bytes, lang) in props.datas" 
         :key="lang" 
         :class="'lang lang-' + lang.toLowerCase()" 
         :style="{ width: getPercentage(bytes) + '%' }"
         :title="`${lang}: ${getPercentage(bytes)}%`"
        />
    </div>
</template>

<style scoped lang="css">
.langs {
  margin-top: 2em;
  max-width: 40em;
  height: 0.5em;
  border-radius: 6px;
  width: 100%;
  overflow: hidden;
  display: flex;
  background-color: #21262d;
  .lang {
      height: 100%;
      transition: flex-grow 0.3s ease;
      flex-shrink: 0;
      &:hover {
          cursor: pointer;
      }
  }
  .lang-javascript { background-color: #f1e05a; }
    .lang-typescript { background-color: #3178c6; }
    .lang-vue { background-color: #41b883; }
    .lang-html { background-color: #e34c26; }
    .lang-css { background-color: #563d7c; }
    .lang-scss { background-color: #c6538c; }
    .lang-astro { background-color: #ff5a03; }
    .lang-svelte { background-color: #ff3e00; }
    .lang-go { background-color: #00add8; }
    .lang-c { background-color: #555555; }
    .lang-cpp, .lang-c\+\+ { background-color: #f34b7d; }
    .lang-rust { background-color: #dea584; }
    .lang-zig { background-color: #ec915c; }
    .lang-csharp, .lang-c\# { background-color: #178600; }
    .lang-python { background-color: #3572a5; }
    .lang-lua { background-color: #000080; }
    .lang-shell, .lang-bash { background-color: #89e051; }
    .lang-nix { background-color: #7e78d0; }
    .lang-php { background-color: #4f5d95; }
    .lang-ruby { background-color: #701516; }
    .lang-java { background-color: #b07219; }
    .lang-kotlin { background-color: #a97bff; }
    .lang-scala { background-color: #c22d40; }
    .lang-dart { background-color: #00b4ab; }
    .lang-swift { background-color: #f05138; }
    .lang-sql { background-color: #e38c00; }
    .lang-dockerfile { background-color: #384d54; }
    .lang-hcl { background-color: #570763; }
  .lang:not([class*="lang-"]) {
        background-color: #FF0000;
    }
}



</style>
