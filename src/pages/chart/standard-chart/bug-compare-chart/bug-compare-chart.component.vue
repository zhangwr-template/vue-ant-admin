<template>
  <div class="bug-compare-chart">
    <a-chart :option="option"/>
  </div>
</template>
<script lang="ts">
import BugCompareChartComponent from './bug-compare-chart.component'
export default BugCompareChartComponent
</script>
<style lang="less">
@import "./bug-compare-chart.component.less";
</style>
