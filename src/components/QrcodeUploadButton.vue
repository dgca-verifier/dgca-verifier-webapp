<template>
  <v-btn
    large
    x-large
    color="primary"
    @click="openUploadDialog"
  >
    Upload the QR-Code
    <input
      ref="qrcode-capture"
      style="display: none"
      type="file"
      name="image"
      accept="image/*"
      multiple
      @change="onChangeInput"
    >
  </v-btn>
</template>
<script>
import { processFile } from 'vue-qrcode-reader/src/misc/scanner.js'
import CommonAPI from 'vue-qrcode-reader/src/mixins/CommonAPI.vue'

export default {
  name: 'QrcodeUploadButton',
  mixins: [CommonAPI],
  methods: {
    openUploadDialog () {
      this.$refs['qrcode-capture'].click()
    },
    onChangeInput (event) {
      const files = [...event.target.files]
      const resultPromises = files.map(processFile)
      resultPromises.forEach(this.onDetect)
    },
    async onDetect (resultPromise) {
      this.$emit('detect', resultPromise)
      try {
        const { content } = await resultPromise
        if (content !== null) {
          this.$emit('decode', content)
        } else {
          this.$emit('error:decode')
        }
      } catch (error) {
        this.$emit('error:detect', error)
      }
    }
  }
}
</script>
<style>

</style>
