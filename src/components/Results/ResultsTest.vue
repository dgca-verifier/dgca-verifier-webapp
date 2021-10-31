<template>
  <v-list>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Test result</v-list-item-title>
        <v-list-item-content>{{ test.tr === "260415000" ? "Not detected" : "Detected" }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Type of test</v-list-item-title>
        <v-list-item-content>{{ test.tt === "LP6464-4" ? "NAAT (PCR)" : "Rapid" }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Sample collection date</v-list-item-title>
        <v-list-item-content>{{ test.sc }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Testing center</v-list-item-title>
        <v-list-item-content>{{ test.tc }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Test name</v-list-item-title>
        <v-list-item-content>{{ test.nm }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Test manufacturer</v-list-item-title>
        <v-list-item-content>{{ tests[test.ma] }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Country of Test</v-list-item-title>
        <v-list-item-content>{{ test.co }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Certificate Issuer</v-list-item-title>
        <v-list-item-content>{{ test.is }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Unique Identifier: UVCI</v-list-item-title>
        <v-list-item-content>{{ test.ci }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import tests from '../../assets/tests.json'

export default {
  name: 'ResultsTest',
  props: {
    test: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      tests
    }
  }
}
</script>

<style scoped>

</style>
