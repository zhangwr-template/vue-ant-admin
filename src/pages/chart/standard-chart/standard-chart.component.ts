import {ref,onMounted} from "vue";
import DateRangePickerComponent from './../../../components/date-range-picker/date-range-picker.component.vue'
import BugCompareChartComponent from './bug-compare-chart/bug-compare-chart.component.vue'
import BugStatusChartComponent from './bug-status-chart/bug-status-chart.component.vue'

export default {
  components:{DateRangePickerComponent,BugCompareChartComponent,BugStatusChartComponent},
  setup() {
    // ***函数方法
    // 初始化函数
    const init = () => {
    }

    //*** 钩子函数
    onMounted(()=>{
      init()
    })

    //*** return
    return {}
  },
};
