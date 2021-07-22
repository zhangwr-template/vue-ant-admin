import {ref, onMounted, reactive} from "vue";
import AChart from './../../../../components/a-chart/a-chart.component.vue'
import {getBugCompare} from "../../../../services/chart.service";

export default {
  components:{'a-chart':AChart},
  setup() {
    const option = reactive({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data:['销量']
      },
      xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
    // ***函数方法
    function fetchData() {
      getBugCompare({}).then(res=>{
        console.log(res)
      })
    }
    // 初始化函数
    const init = () => {
      fetchData()
    }

    //*** 钩子函数
    onMounted(()=>{
      init()
    })

    //*** return
    return {option}
  },
};
