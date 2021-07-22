import {ref,onMounted} from "vue";
import DateRangePickerComponent from './../../../components/date-range-picker/date-range-picker.component.vue'

export default {
  components:{DateRangePickerComponent},
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
