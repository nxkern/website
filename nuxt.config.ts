// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxtjs/sitemap", "@nuxtjs/robots"],
    site: {
        url: "https://nxbin.xyz",
    },
    sitemap: {
        exclude: [
            "/admin",
            "/admin/**"

        ],
    },
    robots: {
        disallow: [
            "/admin",
            "admin/**"
        ]
    },
    ui: {
        fonts: false,
    },
    runtimeConfig: {
        apiKeyWorker: "",
    },
    experimental: {
        clientNodeCompat: true,
    },
    app: {
        viewTransition: true,
        head: {
            titleTemplate: "%s",
            htmlAttrs: {
                lang: "en"
            }
        },
        cdnURL: "",
    },
    nitro: {
        prerender: {
            crawlLinks: false,
            routes: [
                '/',
            ],
        },
    },
    routeRules: {
        "/admin/**": {
            prerender: false,
        },
        "/blog/**": {
            isr: 3600
        }

    },
    vite: {
        css: {
            transformer: 'postcss',
        },
        build: {
            chunkSizeWarningLimit: 700,
            cssMinify: "esbuild"
        },
        optimizeDeps: {
            include: [
                '@nuxt/ui > prosemirror-state',
                '@nuxt/ui > prosemirror-transform',
                '@nuxt/ui > prosemirror-model',
                '@nuxt/ui > prosemirror-view',
                '@nuxt/ui > prosemirror-gapcursor'
            ]
        }
    },
})
