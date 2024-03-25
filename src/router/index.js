// import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import GetItemTest from '../components/GetItemTest.vue';

// createApp.use({useRouter});

const routes = [
  {
    path: '/',
    name: 'GetItemTest',
    component: GetItemTest
  },
  // 다른 페이지에 대한 라우트 정의
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), // createWebHistory를 사용하여 history 모드로 설정합니다.
    routes
  });
// const router = new {useRouter}({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// });

export default router;