<template>
  <report-table>
    <tr>
      <td>First positive NAA test date</td>
      <td>{{ recover.fr }}</td>
    </tr>
    <tr>
      <td>Certificate Valid From</td>
      <td>{{ recover.df }}</td>
    </tr>
    <tr>
      <td>Certificate Valid Until</td>
      <td>{{ recover.du }}</td>
    </tr>
  </report-table>
</template>

<script>
import ReportTable from '../ReportTable'

export default {
  name: 'ResultsRecover',
  components: { ReportTable },
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
