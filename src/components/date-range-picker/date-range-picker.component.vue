<template>
  <div class="date-range-picker">
    <a-range-picker v-model:value="value3" />
    <a-radio-group v-model:value="value1" button-style="solid" style="margin-left: 14px">
      <a-radio-button v-for="(item,index) of fastOptions" :value="item.value">{{item.label}}</a-radio-button>
    </a-radio-group>
  </div>
</template>
<script lang="ts">
import DateRangePickerComponent from './date-range-picker.component'
export default DateRangePickerComponent
</script>
<style lang="less">
@import "./date-range-picker.component.less";
</style>
