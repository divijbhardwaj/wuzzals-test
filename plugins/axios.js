import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = "https://api.punkapi.com/v2";
  const api = axios.create({
    baseURL: defaultUrl,
  });

return {
    provide: {
      api: api,
    },
  };
});