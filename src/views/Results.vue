<template>
  <v-card
    v-if="greenPassData"
    class="pa-2"
  >
    <v-card-title>General Data</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Signature status</v-list-item-title>
            <v-list-item-content style="display:block;">
              <v-icon
                v-if="!isValidCertificate"
                color="red"
              >
                mdi-close
              </v-icon>
              <v-icon
                v-else
                color="green"
              >
                mdi-check
              </v-icon>
            </v-list-item-content>
          </v-list-item-content>
        </v-list-item>
        <template v-if="greenPassData.nominative">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Name</v-list-item-title>
              <v-list-item-content>{{ greenPassData.nominative.gn }}</v-list-item-content>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Surname</v-list-item-title>
              <v-list-item-content>{{ greenPassData.nominative.fn }}</v-list-item-content>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Country</v-list-item-title>
            <v-list-item-content>{{ greenPassData.nation }}</v-list-item-content>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Date of birth</v-list-item-title>
            <v-list-item-content>{{ greenPassData.dateOfBirth }}</v-list-item-content>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider class="my-5" />
      <v-expansion-panels
        id="green-pass-results-expansion-panels"
        style="width: 100%"
        flat
        multiple
      >
        <v-expansion-panel v-if="greenPassData.vaccines">
          <v-expansion-panel-header>
            Vaccine
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <results-vaccine :vaccine="greenPassData.vaccines" />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel v-if="greenPassData.tests">
          <v-expansion-panel-header>
            Test
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <results-test :test="greenPassData.tests" />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel v-if="greenPassData.recover">
          <v-expansion-panel-header>
            Recover
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <results-recover :recover="greenPassData.recover" />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel v-if="certificate">
          <v-expansion-panel-header>
            Signer information
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <results-signer-data :certificate="certificate" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
import { GreenPassCertificate } from '../helpers/green-pass'
import ResultsVaccine from '../components/Results/ResultsVaccine'
import ResultsTest from '../components/Results/ResultsTest'
import ResultsRecover from '../components/Results/ResultsRecover'
import ResultsSignerData from '../components/Results/ResultsSignerData'

export default {
  name: 'Results',
  components: { ResultsSignerData, ResultsVaccine, ResultsTest, ResultsRecover },
  data: () => ({
    isValidCertificate: null,
    certificate: null,
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
    }).catch(e => {
      alert(e.message)
    })
  }
}
</script>

<style scoped>
.green-pass-table tr > v-list-item-title:first-child {
  font-weight: bold;
}

.green-pass-table tr > v-list-item-title:nth-child(2) {
  text-align: right;
}
</style>
<style>
#green-pass-results-expansion-panels .v-expansion-panel {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 0.5em 0;
}

#green-pass-results-expansion-panels .v-expansion-panel:last-child {
  border-bottom: 0;
}

#green-pass-results-expansion-panels .v-expansion-panel-header {
  padding-left: 8px;
  padding-right: 8px;
}

#green-pass-results-expansion-panels .v-expansion-panel-content,
#green-pass-results-expansion-panels .v-expansion-panel-content > .v-expansion-panel-content__wrap {
  padding: 0 !important;
}
</style>
