<template>
  <v-app id="v-app">
    <v-container
      id="main-container"
      class="py-12"
    >
      <router-view />
    </v-container>
    <div id="green-box-background" />
  </v-app>
</template>
<script>
export default {
  name: 'App',
  components: {}
}
</script>
<style>
#v-app > .v-application--wrap{
  min-height: 100vh;
  background: #fafafa;
  display: block;
  z-index: 0;
  position: relative;
}

#main-container{
  height: inherit;
  padding: 0;
  z-index: 1;
  position: relative;
  max-width: 1000px;
}

#green-box-background{
  position: fixed;
  z-index: 0;
  background: linear-gradient(0deg, rgba(0,160,0,1) 0%, rgba(0,180,0,1) 85%, rgba(0,155,0,1) 100%);
  height: 30vh;
  top: 70vh;
  width: 100vw;
  left: 0;

}
</style>
