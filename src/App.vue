<template>
  <div id="app">
    <router-view />
  </div>
  <div>
    <!-- <h4>Repositories</h4> -->
  </div>
</template>

<script>
  export default{
    name: 'App'
  }
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

@media screen and (max-width: 768px) {
  .container {
    max-width: 95%;
    padding: 10px;
  }
}
</style>
