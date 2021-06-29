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
      <td>Sample collection date</td>
      <td>{{ test.sc }}</td>
    </tr>
    <tr>
      <td>Testing center</td>
      <td>{{ test.tc }}</td>
    </tr>
    <tr>
      <td>Test name</td>
      <td>{{ test.nm }}</td>
    </tr>
    <tr>
      <td>Test manufacturer</td>
      <td>{{ tests[test.ma] }}</td>
    </tr>
    <tr>
      <td>Country of Vaccination</td>
      <td>{{ test.co }}</td>
    </tr>
    <tr>
      <td>Certificate Issuer</td>
      <td>{{ test.is }}</td>
    </tr>
    <tr>
      <td>Unique Identifier: UVCI</td>
      <td>{{ test.ci }}</td>
    </tr>
  </report-table>
</template>

<script>
import ReportTable from '../ReportTable'
import tests from '../../assets/tests.json'

export default {
  name: 'ResultsTest',
  components: { ReportTable },
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
