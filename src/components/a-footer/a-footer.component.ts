import {ref,onMounted} from "vue";

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

    //*** return
    return {}
  },
};
