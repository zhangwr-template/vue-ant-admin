import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {key, store} from "./store";
import {createI18n} from 'vue-i18n'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './mock'
// import IconsVue from '@ant-design/icons-vue';
import enUS from './locales/en-US'
// console.log(enUS,'enUS')

async function bootstrap() {
    // console.log(IconsVue,'IconsVue')
    // 初始化多语言
    if (localStorage.getItem('lang')){
    } else {
        localStorage.setItem('lang','zh_CN')
    }
    let lang:any = localStorage.getItem('lang')
    console.log('当前语言为' + lang)

    const i18n = createI18n({
        locale: lang,		//默认显示的语言
        messages: {
            'zh_CN':enUS
            // // @ts-ignore
            // [lang]: {...locale[lang]}
        }
    })

    const app = createApp(App)
    app.use(Antd);
    app.use(i18n)
    app.use(router);
    app.use(store, key)
    // app.use(IconsVue)
    app.mount('#app');
}

bootstrap()