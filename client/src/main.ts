import { createApp } from 'vue';
import App from './App.vue';
import '../src/assets/css/main.css';
import 'virtual:windi.css';
import router from './router';
import { createPinia } from 'pinia';
import { Form, Field, CellGroup, Button } from 'vant'
import 'vant/lib/index.css';
import 'lib-flexible/flexible'; //移动端适配
const app = createApp(App);
app
    .use(Button)
    .use(Form)
    .use(Field)
    .use(CellGroup)
    .use(createPinia())
    .use(router).
    mount('#app');
