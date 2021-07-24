<template>
  <v-container id="home-container">
    <v-card class="pa-3">
      <v-card-title>Scan the certificate</v-card-title>
      <v-divider />
      <v-card-text id="qr-code-scanner-container">
        <div
          v-if="!camera.enable"
          id="qr-code-scanner-button"
        >
          <v-btn
            x-large
            color="primary"
            class="my-5"
            @click="camera.enable=true"
          >
            Scan the QR-Code
          </v-btn>
          <qrcode-capture-button
            class="my-5"
            @decode="onDecode"
            @error:decode="reportError"
            @error:detect="reportError"
          />
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
import QrcodeCaptureButton from '../components/QrcodeUploadButton'

export default {
  name: 'Home',
  components: { QrcodeCaptureButton, QrcodeStream },
  data: () => ({
    camera: {
      fullscreen: false,
      stream: false,
      capture: false,
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
        params: { qr: e }
      })
    },
    reportError (msg) {
      msg = msg ?? 'Qr-Code non rilevato'
      alert(`Si è verificato un errore nell'analisi del QR\n${msg}`)
    }
  }
}
</script>

<style scoped lang="scss">
@import '~vuetify/src/styles/settings/_variables';

#home-container{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

#qr-code-scanner-button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url("../assets/example-qr.png");
  background-size: contain;
  background-position: center;

  padding: 40px 0;
}

#qr-code-scanner-button > * {
  width: 250px;
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  #home-container {
    padding: 0 !important;
    height: 100%;

    > .v-card {
      display: flex;
      flex-direction: column;
    }
  }
  #home-container > div {
    height: 100%;
  }

  #qr-code-scanner-container {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-content: center;
  }
}

</style>
