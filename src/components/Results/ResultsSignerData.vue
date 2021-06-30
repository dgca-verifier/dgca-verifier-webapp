<template>
  <v-list>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Issuer</v-list-item-title>
        <v-list-item-content>
          {{ `C=${certificate.issuer.country}, O=${certificate.issuer.org}, CN=${certificate.issuer.cn}` }}
        </v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Subject</v-list-item-title>
        <v-list-item-content>
          {{ `C=${certificate.subject.country}, O=${certificate.subject.org}, CN=${certificate.subject.cn}` }}
        </v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Not Before</v-list-item-title>
        <v-list-item-content>{{ `${certificate.notBefore.value.toGMTString()}` }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Not After</v-list-item-title>
        <v-list-item-content>{{ `${certificate.notAfter.value.toGMTString()}` }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'ResultsSignerData',
  props: {
    certificate: {
      type: Object,
      required: true
    }
  }
}
</script>
