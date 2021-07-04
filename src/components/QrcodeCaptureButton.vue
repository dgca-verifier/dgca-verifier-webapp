<template>
  <v-btn
    large
    x-large
    color="primary"
    @click="openUploadDialog"
  >
    Upload the QR-Code
    <qrcode-capture
      ref="qrcode-capture"
      style="display: none"
      @decode="e => $emit('decode', e)"
    />
  </v-btn>
</template>
<script>
import { QrcodeCapture } from 'vue-qrcode-reader'

export default {
  name: 'QrcodeCaptureButton',
  components: { QrcodeCapture },
  methods: {
    openUploadDialog () {
      this.$refs['qrcode-capture'].$el.click()
    }
  }
}
</script>
<style>

</style>
