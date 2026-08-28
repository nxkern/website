import { Post } from "~~/shared/types/postsData";
export default defineCachedEventHandler(
    async (event) => {
        try {
            const { apiKeyWorker } = useRuntimeConfig(event);
            const data = await $fetch<Post[]>("https://worker.nxbin.xyz/api/getPost/all",
                {
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
        name: "api nxus dev",
        swr: false,
    }
);
