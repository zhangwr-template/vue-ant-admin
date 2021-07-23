import {ref, onMounted, toRefs, watch,onUnmounted} from "vue";
import * as echarts from 'echarts'

export default {
  props:{
    option:Object
  },
  setup(props:any) {
    const {option} = toRefs(props)
    const chartRef = ref<any>(null)
    const myChart:any = ref<any>(null)

    const myChartResize = ()=>{
      myChart.value.resize()
      console.log('resize...')
    }
    // ***函数方法
    const init = () => {
      myChart.value = echarts.init(chartRef.value);
      myChart.value.setOption(option.value);
      window.addEventListener('resize',myChartResize,false)
    }

    watch(option,()=>{
      myChart.value.setOption(option.value);
    },{deep:true})

    //*** 钩子函数
    onMounted(()=>{
      setTimeout(()=>{
        init()
      },1)
    })
    onUnmounted(()=>{
      window.removeEventListener("resize",myChartResize);
    })

    //*** return
    return {
      chartRef,
      myChart
    }
  },
};
