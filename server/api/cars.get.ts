import cars from "../data/cars.json";

export default defineEventHandler(async (event) => {
  try {
    return cars;
  } catch (error) {
    console.error('[api/cars]', error)
    return { error: 'Failed to fetch data' }
  }
});