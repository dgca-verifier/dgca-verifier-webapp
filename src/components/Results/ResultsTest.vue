<template>
  <report-table>
    <tr>
      <td>Test result</td>
      <td>{{ test.tr === "260415000" ? "Not detected" : "Detected" }}</td>
    </tr>
    <tr>
      <td>Type of test</td>
      <td>{{ test.tt === "LP6464-4" ? "NAAT (PCR)" : "Rapid" }}</td>
    </tr>
    <tr>
      <td>Collection date</td>
      <td>{{ test.sc }}</td>
    </tr>
    <tr>
      <td>Testing center</td>
      <td>{{ test.tc }}</td>
    </tr>
  </report-table>
</template>

<script>
import ReportTable from '../ReportTable'

export default {
  name: 'ResultsTest',
  components: { ReportTable },
  props: {
    test: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
