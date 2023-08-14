import axios from "axios";
import {filterBeerData} from '~/utils/data-filters'

export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = "https://api.punkapi.com/v2";
  const api = axios.create({
    baseURL: defaultUrl,
  });
  
  const getBeersData = async (params) => {
    const res = await api('/beers',{
      method: 'GET',
      params
    })
    return filterBeerData(res?.data)
  }

  return {
    provide: {
      axios,
      getBeersData
    },
  };
});