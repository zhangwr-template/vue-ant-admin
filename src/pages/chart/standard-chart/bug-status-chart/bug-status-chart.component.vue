<template>
  <div class="bug-compare-chart">
    <a-chart :option="option"/>
  </div>
</template>
<script lang="ts">
import BugStatusChartComponent from './bug-status-chart.component'
export default BugStatusChartComponent
</script>
<style lang="less">
@import "./bug-status-chart.component.less";
</style>
