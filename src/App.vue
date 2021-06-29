<template>
  <v-app style="height: 100vh; background: #B9EFA3">
    <v-container
      id="main-container"
      class="py-12"
    >
      <router-view />
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  components: {}
}
</script>
<style>
#main-container{
  height: 100vh;
  padding: 0;
  max-width: 1000px;
}
</style>
