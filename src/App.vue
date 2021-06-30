<template>
  <v-app id="app">
    <div id="main-container-wrapper">
      <v-container
        id="main-container"
        class="py-12"
      >
        <router-view />
      </v-container>
      <p>
        This app is <a
          target="_blank"
          href="https://github.com/dgca-verifier/dgca-verifier-webapp"
        >open source</a>
        and realized with &lt;3 from
        <a
          target="_blank"
          href="https://github.com/cifred98"
        >cifred98</a>
        and <a
          target="_blank"
          href="https://github.com/kael-k"
        >kael_k</a>
      </p>
    </div>
    <div id="green-box-background" />
  </v-app>
</template>
<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';
@import "assets/style/index.scss";

#v-app > .v-application--wrap{
  min-height: 100vh;
  background: #fafafa;
  display: block;
  z-index: 0;
  position: relative;
}

#main-container-wrapper{
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 1;
}

#main-container-wrapper > p {
  margin-top: auto;
  margin-bottom: 0;
  font-size: 1.2em;
  color: #fafafa;
  text-align: center;
  padding: 1em;
}

#main-container-wrapper > p > a {
  color: #ffffff;
}

#main-container{
  height: inherit;
  padding: 0;
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

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  #main-container {
    padding: 1em !important;
    height: 100%;
  }
}

</style>
