<template>
  <report-table>
    <tr>
      <td>Vaccine Date</td>
      <td>{{ vaccine.dt }}</td>
    </tr>
    <tr>
      <td>Total series of doses</td>
      <td>{{ vaccine.sd }}</td>
    </tr>
    <tr>
      <td>Dose number </td>
      <td>{{ vaccine.dn }}</td>
    </tr>
  </report-table>
</template>

<script>
import ReportTable from '../ReportTable'
export default {
  name: 'ResultsVaccine',
  components: { ReportTable },
  props: {
    vaccine: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
