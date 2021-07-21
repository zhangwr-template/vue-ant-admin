import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { defineComponent, reactive, UnwrapRef } from 'vue';
import {login} from "../../services/user.service";
interface FormState {
  user: string;
  password: string;
}

export default {
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      user: '',
      password: '',
    });
    const handleFinish = async (values: FormState) => {
      console.log(values, formState);
      const ss = await login({}).then()
      console.log(ss.currentAuthority)
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };
    return {
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
};
