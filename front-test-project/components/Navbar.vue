<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">

    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav mr-auto justify-content-center">
        <li class="nav-item">
          <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">
            Главная
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/users">
            О нас
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/contacts">
            Контакты
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  
  
}
</script>

<style>

</style>