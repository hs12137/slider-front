import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router';

// createApp(App).mount('#app')
createApp({
    router, // 라우터 연결
    render: () => h(App),
    // components: {App}
  }).mount('#app');