<template>
  <v-list>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Vaccine Name</v-list-item-title>
        <v-list-item-content>{{ vaccines[vaccine.mp] }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Vaccine Date</v-list-item-title>
        <v-list-item-content>{{ vaccine.dt }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Current dose</v-list-item-title>
        <v-list-item-content>{{ vaccine.dn + "/" + vaccine.sd }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Auth Holder</v-list-item-title>
        <v-list-item-content>{{ holders[vaccine.ma] }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Counv-list-itemy of Vaccination</v-list-item-title>
        <v-list-item-content>{{ vaccine.co }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Certificate Issuer</v-list-item-title>
        <v-list-item-content>{{ vaccine.is }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Unique Identifier: UVCI</v-list-item-title>
        <v-list-item-content>{{ vaccine.ci }}</v-list-item-content>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import vaccines from '../../assets/vaccines.json'
import holders from '../../assets/holders.json'

export default {
  name: 'ResultsVaccine',
  props: {
    vaccine: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      vaccines,
      holders
    }
  }
}
</script>

<style scoped>

</style>
