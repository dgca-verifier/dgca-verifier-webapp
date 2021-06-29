<template>
  <v-container id="home-container">
    <v-card>
      <v-card-title>Scan the certificate</v-card-title>
      <v-divider />
      <v-card-text>
        <div
          v-if="!camera.enable"
          id="home-container-button"
          class="pa-16"
        >
          <v-btn
            color="primary"
            @click="camera.enable=true"
          >
            Scan the QR-Code
          </v-btn>
        </div>
        <div v-if="enableContainedCamera">
          <qrcode-stream @decode="onDecode" />
        </div>
        <div
          v-if="enableFullScreenCamera"
          style="position: absolute; top: 0; left: 0"
        >
          <qrcode-stream
            style="width: 100vw; height: 100vh"
            @decode="onDecode"
          />
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'

export default {
  name: 'Home',
  components: { QrcodeStream },
  data: () => ({
    camera: {
      fullscreen: false,
      enable: false
    }
  }),
  computed: {
    enableFullScreenCamera () {
      return this.camera.enable && this.camera.fullscreen
    },
    enableContainedCamera () {
      return this.camera.enable && !this.camera.fullscreen
    }
  },
  methods: {
    onDecode (e) {
      this.$router.push({
        name: 'Results',
        params: {
          cert: btoa(e)
        }
      })
    }
  }
}
</script>

<style scoped>
#home-container{
  height: inherit;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

#home-container-button {
  display: flex;
  justify-content: center;
  background-image: url("../assets/example-qr.png");
  background-size: contain;
  background-position: center;
}
</style>
