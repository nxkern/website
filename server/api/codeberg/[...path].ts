export default defineEventHandler(async (event) => {
  const path = event.context.params?.path;
  
  if (!path) {
    throw createError({ statusCode: 400, statusMessage: "Path is required" });
  }

  try {
    return await $fetch(`https://codeberg.org/api/v1/${path}`);
  } catch (error) {
    console.error("Error proxying to Codeberg:", error);
    throw createError({ statusCode: 500, statusMessage: "Failed to fetch from Codeberg" });
  }
});
