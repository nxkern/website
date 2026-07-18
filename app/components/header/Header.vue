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
            <Svg href="https://github.com/dumbnoxx/" target="_blank" aria-label="github">
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
            <Svg href="https://codeberg.org/Nxus" rel="me" target="_blank" aria-label="codeberg">
                <svg
                   width="16"
                   height="16"
                   viewBox="0 0 4.2333332 4.2333335"
                   version="1.1"
                   id="svg1468"
                   >
                  <title
                     id="title16">Codeberg logo</title>
                  <defs
                     id="defs1462">
                    <linearGradient
                       xlink:href="#linearGradient6924"
                       id="linearGradient6918"
                       x1="42519.285"
                       y1="-7078.7891"
                       x2="42575.336"
                       y2="-6966.9307"
                       gradientUnits="userSpaceOnUse" />
                    <linearGradient
                       id="linearGradient6924">
                      <stop
                         style="stop-color:#2185d0;stop-opacity:0"
                         offset="0"
                         id="stop6920" />
                      <stop
                         id="stop6926"
                         offset="0.49517274"
                         style="stop-color:#2185d0;stop-opacity:0.48923996" />
                      <stop
                         style="stop-color:#2185d0;stop-opacity:0.63279623"
                         offset="1"
                         id="stop6922" />
                    </linearGradient>
                    <linearGradient
                       xlink:href="#linearGradient6924-6"
                       id="linearGradient6918-3"
                       x1="42519.285"
                       y1="-7078.7891"
                       x2="42575.336"
                       y2="-6966.9307"
                       gradientUnits="userSpaceOnUse" />
                    <linearGradient
                       id="linearGradient6924-6">
                      <stop
                         style="stop-color:#ffffff;stop-opacity:0;"
                         offset="0"
                         id="stop6920-7" />
                      <stop
                         id="stop6926-5"
                         offset="0.49517274"
                         style="stop-color:#ffffff;stop-opacity:0.30000001;" />
                      <stop
                         style="stop-color:#ffffff;stop-opacity:0.30000001;"
                         offset="1"
                         id="stop6922-3" />
                    </linearGradient>
                  </defs>
                  <g
                     id="g370484"
                     inkscape:label="logo"
                     transform="matrix(0.06551432,0,0,0.06551432,-2.232417,-1.431776)">
                    <path
                       id="path6733-5"
                       style="font-variation-settings:normal;opacity:1;vector-effect:none;fill:url(#linearGradient6918-3);fill-opacity:1;stroke:none;stroke-width:3.67846;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000;stop-opacity:1"
                       d="m 42519.285,-7078.7891 a 0.76086879,0.56791688 0 0 0 -0.738,0.6739 l 33.586,125.8886 a 87.182358,87.182358 0 0 0 39.381,-33.7636 l -71.565,-92.5196 a 0.76086879,0.56791688 0 0 0 -0.664,-0.2793 z"
                       transform="matrix(0.37058478,0,0,0.37058478,-15690.065,2662.0533)"
                       inkscape:label="berg" />
                    <path
                       id="path360787"
                       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke-width:17.0055;paint-order:markers fill stroke;stop-color:#000000"
                       d="m 11249.461,-1883.6961 c -12.74,0 -23.067,10.3275 -23.067,23.0671 0,4.3335 1.22,8.5795 3.522,12.2514 l 19.232,-24.8636 c 0.138,-0.1796 0.486,-0.1796 0.624,0 l 19.233,24.8646 c 2.302,-3.6721 3.523,-7.9185 3.523,-12.2524 0,-12.7396 -10.327,-23.0671 -23.067,-23.0671 z"
                       sodipodi:nodetypes="sccccccs"
                       inkscape:label="sky"
                       transform="matrix(1.4006354,0,0,1.4006354,-15690.065,2662.0533)" />
                  </g>
                </svg>
            </Svg>
            <Svg href="https://bsky.app/profile/nxus.pages.dev" target="_blank" aria-label="bluesky">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bluesky"
                    viewBox="0 0 16 16">
                  <title
                   id="title17">BlueSky logo</title>
                    <path
                        d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948" />
                </svg>
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
