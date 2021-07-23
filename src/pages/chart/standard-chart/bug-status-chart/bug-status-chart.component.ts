import {ref, onMounted, reactive} from "vue";
import AChart from './../../../../components/a-chart/a-chart.component.vue'
import {getBugCompare, getBugStatus} from "../../../../services/chart.service";

export default {
  components:{'a-chart':AChart},
  setup() {
    const option = reactive({
      title: {
        text: '',
        subtext: '',
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        right: '5%',
      },
      series: [
        {
          name: 'Bug',
          type: 'pie',
          radius: '50%',
          data: [
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })
    // ***函数方法
    function fetchData() {
      getBugStatus({}).then(res=>{
        // console.log(res)
        // convertChartData(option,res)
        option.title.text = 'Bug状态统计'
        option.series[0].data = res.map((item:any)=>({
          name:item.statusName,
          value:item.count,
          diyData: item.bugIds,
          title:option.title
        }))
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
