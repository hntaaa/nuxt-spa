<template>
  <yandex-map :coords="coords" @click="onClick">
    <ymap-marker 
      marker-id="123" 
      :coords="coords"
      :balloon-template="balloonTemplate"
    />
    <ymap-marker 
      marker-id="123" 
      :coords="second_coords"
      :balloon-template="balloonTemplate"
    />
  </yandex-map>
</template>

<script>

import { yandexMap, ymapMarker } from '@/node_modules/vue-yandex-maps'


export default {
  components: { yandexMap, ymapMarker },

  data: () => ({
    coords: [43.263497, 76.930186],
    second_coords: [43.230868, 76.944932]
  }),
  markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: 'https://cdn0.iconfinder.com/data/icons/buildings-1/128/40-512.png',
      imageSize: [43, 43],
      imageOffset: [0, 0]
    },

  computed: {
    balloonTemplate() {
      return `
        <h1 >Mega Park Алматы</h1>
      `
    }
  },
  methods: {
    onClick(e) {
      this.coords = e.get('coords');
    }
  }  
};
</script>
