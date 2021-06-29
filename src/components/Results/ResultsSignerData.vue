<template>
  <report-table>
    <tr>
      <td>Issuer</td>
      <td>{{ `${certificate.issuer.country}, ${certificate.issuer.org}, ${certificate.issuer.cn}` }}</td>
    </tr>
    <tr>
      <td>Subject</td>
      <td>{{ `${certificate.subject.country}, ${certificate.subject.org}, ${certificate.subject.cn}` }}</td>
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
