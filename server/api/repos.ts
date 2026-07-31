export default defineCachedEventHandler(
    async () => {
        try {
            const repos = await $fetch<RepoApiCodeberg[]>(
                "https://codeberg.org/api/v1/users/Nxus/repos"
            );

            const reposWithLangs = await Promise.all(
                repos.map(async (repo) => {
                    let languagesData: LanguageCount | null = null;

                    if (repo.languages_url) {
                        try {
                            languagesData = await $fetch<LanguageCount>(repo.languages_url);
                        } catch {
                            languagesData = null;
                        }
                    }

                    return {
                        ...repo,
                        languagesData,
                    };
                })
            );
            console.log("change cache success");
            return reposWithLangs;

        } catch (err) {
            console.error(`error revalue cache codeberg: ${err}`);
            throw err;
        }
    },
    {
        maxAge: 60 * 60 * 24,
        name: "codeberg-repos-cache",
        swr: true,
    }
);
