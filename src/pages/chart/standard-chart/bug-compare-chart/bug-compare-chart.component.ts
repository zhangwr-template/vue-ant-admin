import {ref, onMounted, reactive} from "vue";
import AChart from './../../../../components/a-chart/a-chart.component.vue'
import {getBugCompare, getBugInfoByIds} from "../../../../services/chart.service";

const bug_columns = [
  // {
  //     title: 'id',
  //     dataIndex: 'id',
  //     width: "80px"
  // },
  {
    title: '名称',
    dataIndex: 'name',
    ellipsis: true,
    width:'300px',
    slots: { customRender: 'detail' },
    // width:250
  },
  {
    title: '任务号',
    dataIndex: 'subProjectNo',
  },
  {
    title: '责任组',
    dataIndex: 'dutyGroupName',
  },
  {
    title: '创建人',
    dataIndex: 'createUser',
  },
]

export default {
  components:{'a-chart':AChart},
  setup() {
    // 弹框数据
    const modalVisible = ref(false);
    const dataSource = ref([])
    const loading = ref<boolean>(false)
    const modalTitle = ref<string>('')
    // 图表实例
    const aChartRef = ref<any>(null)

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
    function handleFn(param:any) {
      console.log(param,'param')
      const bug_getBugCompare_params = {
        ids:param.data.diyData,
        pager:{
          pageIndex:1,
          pageCount:999
        },
      }
      getBugInfoByIds(bug_getBugCompare_params).then((getBugInfoByIdsRes:any)=>{
        modalVisible.value = true
        console.log(getBugInfoByIdsRes,'getBugInfoByIdsRes')
        dataSource.value = getBugInfoByIdsRes.bugList
        modalTitle.value = param.data.title.text + '-' + param.data.name
      })
    }
    function fetchData() {
      getBugCompare({}).then(res=>{
        option.title.text = 'Bug对比'
        option.series[0].data = res.map((item:any)=>({
          name: item.type,
          value:item.count,
          diyData: item.ids,
          title:option.title
        }))
        aChartRef.value.myChart.off('click')
        aChartRef.value.myChart.on('click', handleFn)
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
    return {
      aChartRef,
      option,
      modalVisible,
      dataSource,
      loading,
      bug_columns,
      modalTitle
    }
  },
};
