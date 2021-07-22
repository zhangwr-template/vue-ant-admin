import {ref, onMounted, toRefs, watch} from "vue";
import * as echarts from 'echarts'

export default {
  props:{
    option:Object
  },
  setup(props:any) {
    const {option} = toRefs(props)
    const chartRef = ref<any>(null)
    let myChart:any = null
    // ***函数方法
    const init = () => {
      myChart = echarts.init(chartRef.value);
      myChart.setOption(option.value);
    }

    watch(option,()=>{
      myChart.setOption(option.value);
    },{deep:true})

    //*** 钩子函数
    onMounted(()=>{
      init()
    })

    //*** return
    return {
      chartRef
    }
  },
};
