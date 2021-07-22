import {ref, onMounted, watch} from "vue";
import {Moment} from 'moment'
import moment from "moment";

export default {
  setup() {
    // ***函数方法
    // 初始化函数
    const init = () => {
    }

    //*** 钩子函数
    onMounted(()=>{
      init()
    })
    const value3 = ref<Moment[]>([])
    const value1 = ref<string>('thisMonth');

    const fastOptions = [
      {
        label:'上周',
        value:'lastWeek',
        range:[
          moment().week(moment().week() - 1).startOf('week').add(1,'days'),
          moment().week(moment().week() - 1).endOf('week').add(1,'days')
        ]
      },
      {
        label:'本月',
        value:'thisMonth',
        range: [
          moment().month(moment().month()).startOf('month'),
          moment().month(moment().month()).endOf('month')
        ]
      },
      {
        label:'本年',
        value:'thisYear',
        range: [
          moment().year(moment().year()).startOf('year'),
          moment().year(moment().year()).endOf('year')
        ]
      }
    ]

    watch(value1,()=>{
      // @ts-ignore
      value3.value = fastOptions.find(item=>item.value ===value1.value).range
    },{deep:true,immediate:true})


    // const startDate2 = moment().week(moment().week() - 1).startOf('week').add(1,'days').valueOf();
    // const endDate2 = moment().week(moment().week() - 1).endOf('week').add(1,'days').valueOf();

    // this.start = parseInt(moment().month(moment().month()).startOf('month').valueOf()/1000)
    // this.end = parseInt(moment().month(moment().month() ).endOf('month').valueOf()/1000)

    //*** return
    return {
      value3,
      value1,
      fastOptions
    }
  },
};
