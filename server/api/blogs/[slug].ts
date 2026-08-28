import { Post } from "~~/shared/types/postsData";
export default defineCachedEventHandler(
    async (event) => {
        try {
            const { apiKeyWorker } = useRuntimeConfig(event);
            const id = getRouterParam(event, "slug");
            const data = await $fetch<Post>("https://worker.nxbin.xyz/api/getPost/one",
                {
                    method: "POST",
                    body: { PostId: id },

                    headers: {
                        "x-api-nuxt": apiKeyWorker,
                        "User-Agent": "Nuxt-Server-Fetch"
                    }
                });
            return data
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    {
        maxAge: 60 * 60 * 24,
        name: "api post nxus dev",
        swr: false,
        getKey: (event) => getRouterParam(event, "slug") || ""
    }
);
