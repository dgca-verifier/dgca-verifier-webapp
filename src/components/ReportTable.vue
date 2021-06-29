<template>
  <v-simple-table class="report-table">
    <tbody>
      <slot />
    </tbody>
  </v-simple-table>
</template>

<script>
export default {
  name: 'ReportTable',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.report-table tr > td:first-child{
  font-weight: bold;
}
.report-table tr > td:last-child{
  text-align: right;
}
</style>
