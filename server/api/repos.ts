import { LanguageCountGh, RepoApiGithub } from "~~/shared/types/repoApiGithub";

const listFilter: string[] = [
    "dotfiles",
    "website",
    "nxkern"
];

export default defineCachedEventHandler(
    async (event) => {
        setResponseHeader(event, 'Cache-Control', 'no-cache, no-store, must-revalidate');
        try {
            const repos = await $fetch<RepoApiGithub[]>(
                "https://api.github.com/users/nxkern/repos"
            );
            const reposFilter = repos.filter((repo: RepoApiGithub) => !listFilter.includes(repo.name));

            const reposWithLangs = await Promise.all(
                reposFilter.map(async (repo) => {
                    let languagesData: LanguageCountGh | null = null;

                    if (repo.html_url) {
                        try {
                            languagesData = await $fetch<LanguageCountGh>(repo.languages_url);
                            console.log(`repo name: ${repo.full_name}: languageData ${languagesData}`)
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
            console.log("[Repo log api] change cache success");
            return reposWithLangs;

        } catch (err) {
            console.error(`error revalue cache codeberg: ${err}`);
            throw err;
        }
    },
    {
        maxAge: 60 * 60 * 6,
        name: "github-repos-cache",
        swr: true,
    }
);
