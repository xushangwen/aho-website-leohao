export default defineNuxtPlugin(async (nuxtApp) => {
  if (!import.meta.client) return
  const cars = useCars();
  cars.value = await $fetch("/api/cars");
});
