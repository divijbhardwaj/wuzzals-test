<template>
  <div>{{ beersJson }}</div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  const { $api } = useNuxtApp()
  const beersJson = ref([]);

  async function getBeersData() {
    const res = await $api('/beers',{
      method: 'GET',
      params: {
        brewed_after: '11-2012'
      }
    })
    beersJson.value = res?.data || []
  }

  onMounted(() => {
    getBeersData()
  });
  
</script>