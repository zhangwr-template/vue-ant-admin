<template>
  <div class="standard-chart">
    <a-row>
      <a-col
          :span="24"
          style="padding: 16px 24px;background: #fff;border-radius: 4px;">
        <date-range-picker-component/>
      </a-col>
    </a-row>

    <a-row>
      <a-col
          :span="12"
          style="padding: 16px 24px;background: #fff;border-radius: 4px;">
        <bug-compare-chart-component/>
      </a-col>
      <a-col
          :span="12"
          style="padding: 16px 24px;background: #fff;border-radius: 4px;">
        32
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import StandardChartComponent from './standard-chart.component'
export default StandardChartComponent
</script>
<style lang="less">
@import "./standard-chart.component.less";
</style>
