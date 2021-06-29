<template>
  <report-table>
    <tr>
      <td>Issuer</td>
      <td>{{ `C=${certificate.issuer.country}, O=${certificate.issuer.org}, CN=${certificate.issuer.cn}` }}</td>
    </tr>
    <tr>
      <td>Subject</td>
      <td>{{ `C=${certificate.subject.country}, O=${certificate.subject.org}, CN=${certificate.subject.cn}` }}</td>
    </tr>
    <tr>
      <td>Not Before</td>
      <td>{{ `${certificate.notBefore.value.toGMTString()}` }}</td>
    </tr>
    <tr>
      <td>Not After</td>
      <td>{{ `${certificate.notAfter.value.toGMTString()}` }}</td>
    </tr>
  </report-table>
</template>

<script>
import ReportTable from '../ReportTable'

export default {
  name: 'ResultsSignerData',
  components: { ReportTable },
  props: {
    certificate: {
      type: Object,
      required: true
    }
  }
}
</script>
