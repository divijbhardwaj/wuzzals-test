<template>
  <div class="my-6">
    <!-- grid section -->
    <common-section>
      <common-grid>
        <beer-card
          v-for="beer in beerList"
          :key="beer"
          :data="beer"
        />
      </common-grid>
    </common-section>
    <!-- grid section ends -->
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  const { $getBeersData } = useNuxtApp()
  const beerList = ref([]);

  async function getData() {
    const params = {
      brewed_after: '11-2012'
    }
    beerList.value = await $getBeersData(params)
  }

  onMounted(() => {
    getData()
  });
  
</script>