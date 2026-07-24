
export default defineCachedEventHandler(
    async () => {
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
        return reposWithLangs;
    },
    {
        maxAge: 60 * 60 * 24,
        name: "codeberg-repos-cache",
        swr: true, 
    }
);
