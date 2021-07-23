<template>
  <div class="bug-compare-chart">
    <a-chart ref="aChartRef" :option="option"/>
    <a-modal :footer="false" v-model:visible="modalVisible" @ok="handleOk" :title="modalTitle" width="1000px">
      <a-table :pagination="{showTotal:total => `总共 ${total} 条`}" :loading="loading" :dataSource="dataSource"
               :columns="bug_columns" size="small">
        <template #detail="{ record }">
        </template>
      </a-table>
    </a-modal>
  </div>
</template>
<script lang="ts">
import BugCompareChartComponent from './bug-compare-chart.component'
export default BugCompareChartComponent
</script>
<style lang="less">
@import "./bug-compare-chart.component.less";
</style>
