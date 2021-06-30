<template>
  <v-list>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>First positive NAA test date</v-list-item-title>
        <v-list-item-content>{{ recover.fr }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Certificate Valid From</v-list-item-title>
        <v-list-item-content>{{ recover.df }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Certificate Valid Until</v-list-item-title>
        <v-list-item-content>{{ recover.du }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Country of Vaccination</v-list-item-title>
        <v-list-item-content>{{ recover.co }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Certificate Issuer</v-list-item-title>
        <v-list-item-content>{{ recover.is }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Unique Identifier: UVCI</v-list-item-title>
        <v-list-item-content>{{ recover.ci }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'ResultsRecover',
  props: {
    recover: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
