<template>
  <div class="cardss">
    <Cards title_text="Мои счета"/>
    <Cards title_text="Шаблоны операции"/>
    <Cards title_text="Мои счета"/>
    <Cards title_text="Шаблоны операции"/>

    
  </div>
</template>

<script>

import Cards from '@/components/Cards.vue'

export default {
  name: 'index.vue',
  components: {Cards}
}
</script>

<style>
  .cardss{
    margin-top: 1rem;
    background-color: #e5e5e5;

  }
</style>
