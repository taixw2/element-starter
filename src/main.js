import Vue from 'vue';
import ElementUI from 'element-ui';

//使用element-thin-ui
//https://taixw2.github.io/element-ui/index.html#/form
import 'element-ui/lib/theme-default/index.css';

//使用element-ui
//import 'element-ui/lib/theme-default/index.css';

import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes,
    scrollBehavior(to, from, savePosition) {
        return savePosition ? savePosition : {
            x: 0,
            y: 0
        };
    }
});

Vue.http.options.root = "/api";
Vue.http.interceptors.push((request,next)=>{
    next(response=>{

      return true;
    });
});

const app = new Vue({
    el: "#app",
    router,
    http: {
        options : {
          emulateJSON  :  true
        }
    },
    render: h => h(App)
});
