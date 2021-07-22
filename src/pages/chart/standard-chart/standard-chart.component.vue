<template>
  <div class="standard-chart">
    <a-row>
      <a-col
          :span="24"
          style="padding: 16px 24px;background: #fff;border-radius: 4px;">
        <date-range-picker-component/>
      </a-col>
<!--      <a-col :span="6" :order="3">2 col-order-3</a-col>-->
<!--      <a-col :span="6" :order="2">3 col-order-2</a-col>-->
<!--      <a-col :span="6" :order="1">4 col-order-1</a-col>-->
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
