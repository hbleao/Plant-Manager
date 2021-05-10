import { api } from '../index';

const PlantsService = {
  getPlants: async (params?: string) => {
    const { data } = await api.get(`plants?${params}`);
    return data;
  },
  getPlantsWaterFrequencies: async () => {
    const { data } = await api.get('plants_water_frequencies');
    return data;
  },
  getPlantsEnvironment: async () => {
    const { data } = await api.get(`plants_environments`);
    return data;
  }
};

export { PlantsService };