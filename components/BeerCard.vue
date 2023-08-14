<template>
  <v-card class="d-flex flex-col">
    <v-img
      fit
      max-height="250"
      :src="data.img"
      class="mt-4"
    />

    <v-card-item>
      <v-card-title>{{ data.name }}</v-card-title>
      <v-card-subtitle>
        <span class="me-1">{{ data.tagLine }}</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text class="text-left">
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        ABV: {{ data.abv }}% &nbsp; | &nbsp; IBU: {{ data.ibu }}
      </div>

      <div class="mt-4 line-clamp-4">{{ data.desc }}</div>
    </v-card-text>

    <template v-if="data.lactose || data.dryHop">
      <v-divider class="mx-4 mb-1"></v-divider>
      <div class="flex justify-center mb-2">
        <v-chip
          v-if="data.lactose"
          class="m-2"
          color="warning"
          text-color="white"
        >
          Contains lactose
        </v-chip>
        <v-chip
          v-if="data.dryHop"
          class="m-2"
          color="success"
        >
          Dry Hop
        </v-chip>
      </div>
    </template>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['data'])
const data = ref({});

data.value = props?.data || {}
</script>