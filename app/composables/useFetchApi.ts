export type LanguageCount = Record<string, number>;
export const useFetchApi = async (url: string) => {
    try {
        const promise = fetch(url);
        const [dataRes] = await Promise.all([
            promise
        ]);

        const [dataApi] = await Promise.all([
            dataRes.json() as Promise<LanguageCount>
        ]);
        return {
            dataApi
        }
    } catch (err) {
        console.error(err)
    }
}
