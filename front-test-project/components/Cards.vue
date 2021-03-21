<template>
  <div class="card">

    <img src="@/assets/bookmark.png" alt="Bookmark">
    <span></span>
    <h1>{{title_text}}</h1>

  </div>
</template>

<script>

export default {
    name: 'Cards',
    props: {
        title_text: String
    }
}
</script>

<style>
    img{
        width: 30px;
        height: 50px;
    }
  .cards{
    background-color: #cac6c6;
    width: 100px;
    height: 100px;
    position: relative;
  }
  span {
    position: absolute; 
    height: 3px;
    width: 400px;
    border-top: 1px solid #e15c64;
    top: 40px;
    left: 2rem;
}
h1{
    font-size: 1.8rem;
    position: absolute;
    top: 7px;
    left: 3rem;
}

</style>
