<template>
  <report-table>
    <tr>
      <td>Vaccine Name</td>
      <td>{{ vaccines[vaccine.mp] }}</td>
    </tr>
    <tr>
      <td>Vaccine Date</td>
      <td>{{ vaccine.dt }}</td>
    </tr>
    <tr>
      <td>Current dose</td>
      <td>{{ vaccine.dn + "/" + vaccine.sd }}</td>
    </tr>
    <tr>
      <td>Auth Holder</td>
      <td>{{ holders[vaccine.ma] }}</td>
    </tr>
    <tr>
      <td>Country of Vaccination</td>
      <td>{{ vaccine.co }}</td>
    </tr>
    <tr>
      <td>Certificate Issuer</td>
      <td>{{ vaccine.is }}</td>
    </tr>
    <tr>
      <td>Unique Identifier: UVCI</td>
      <td>{{ vaccine.ci }}</td>
    </tr>
  </report-table>
</template>

<script>
import ReportTable from '../ReportTable'
import vaccines from '../../assets/vaccines.json'
import holders from '../../assets/holders.json'

export default {
  name: 'ResultsVaccine',
  components: { ReportTable },
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
