<template>
  <div>
    <v-card v-if="greenPassData">
      <v-card-title>General Data</v-card-title>
      <v-card-text>
        <v-simple-table class="green-pass-table">
          <tbody>
            <tr>
              <td>Valid certificate</td>
              <td>{{ isValidCertificate }}</td>
            </tr>
            <template v-if="greenPassData.nominative">
              <tr>
                <td>Name</td>
                <td>{{ greenPassData.nominative.gn }}</td>
              </tr>
              <tr>
                <td>Surname</td>
                <td>{{ greenPassData.nominative.fn }}</td>
              </tr>
            </template>
            <tr>
              <td>Country</td>
              <td>{{ greenPassData.nation }}</td>
            </tr>
            <tr>
              <td>Certificate version</td>
              <td>{{ greenPassData.version }}</td>
            </tr>
            <tr>
              <td>Date of birth</td>
              <td>{{ greenPassData.dateOfBirth }}</td>
            </tr>
            <template v-if="greenPassData.vaccines">
              <tr>
                <td>Vaccine Date</td>
                <td>{{ greenPassData.vaccines.dt }}</td>
              </tr>
              <tr>
                <td>Total series of doses</td>
                <td>{{ greenPassData.vaccines.sd }}</td>
              </tr>
              <tr>
                <td>Dose number </td>
                <td>{{ greenPassData.vaccines.dn }}</td>
              </tr>
            </template>
            <template v-if="greenPassData.recover">
              <tr>
                <td>First positive NAA test date</td>
                <td>{{ greenPassData.recover.fr }}</td>
              </tr>
              <tr>
                <td>Certificate Valid From</td>
                <td>{{ greenPassData.recover.df }}</td>
              </tr>
              <tr>
                <td>Certificate Valid Until</td>
                <td>{{ greenPassData.recover.du }}</td>
              </tr>
            </template>
            <template v-if="greenPassData.tests">
              <tr>
                <td>Test result</td>
                <td>{{ greenPassData.tests.tr === "260415000" ? "Not detected" : "Detected" }}</td>
              </tr>
              <tr>
                <td>Type of test</td>
                <td>{{ greenPassData.tests.tt === "LP6464-4" ? "NAAT (PCR)" : "Rapid" }}</td>
              </tr>
              <tr>
                <td>Collection date</td>
                <td>{{ greenPassData.tests.sc }}</td>
              </tr>
              <tr>
                <td>Testing center</td>
                <td>{{ greenPassData.tests.tc }}</td>
              </tr>
            </template>
            <template v-if="certificate.issuer">
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
            </template>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { GreenPassCertificate } from '../helpers/green-pass'

export default {
  name: 'Results',
  data: () => ({
    isValidCertificate: null,
    certificate: {},
    greenPass: null,
    greenPassData: {}
  }),
  computed: {
    qr () {
      return atob(this.$route.params.cert)
    }
  },
  mounted () {
    this.greenPass = new GreenPassCertificate(this.qr)
    this.greenPassData = this.greenPass.toObject()
    this.greenPass.verify().then((val) => {
      this.isValidCertificate = val.verified
      this.certificate = val.certificate
    })
  }
}
</script>

<style scoped>
.green-pass-table tr > td:first-child {
  font-weight: bold;
}
.green-pass-table tr > td:nth-child(2) {
  text-align: right;
}
</style>
