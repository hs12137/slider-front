<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin()">
      <img
        src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
        width="222"
        alt="카카오 로그인 버튼"
      />
    </a>
    <div @click="kakaoLogout()">로그아웃</div>
  </div>
</template>

<script>
import {useKakao} from 'vue3-kakao-sdk'
const {Kakao} = useKakao()

export default {
  name: 'KakakoLogin',
  methods: {
    kakaoLogin() {
      Kakao.Auth.login({
        scope: "profile_image, account_email",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          const ninkname = kakao_account.profile.ninkname;
          const email = kakao_account.email;
          console.log("ninkname", ninkname);
          console.log("email", email);

          //로그인처리구현

          alert("로그인 성공!");
        },
        fail: (error) => {
          console.log(error);
        },
      });
    },
    kakaoLogout() {
      Kakao.Auth.logout((res) => {
        console.log(res);
      });
    },
    shareStoryWeb () {
    this.$kakao.Story.share({
      url: 'https://github.com/eggplantiny/vue-kakao-sdk',
      text: 'Test story share with vue-kakao-sdk'
    })
  },
//   loginWithKakao () {
//     this.$kakao.Auth.login({
//       success (authObj) {
//         alert(JSON.stringify(authObj))
//       },
//       fail (err) {
//         alert(JSON.stringify(err))
//       }
//     })
//   }
  },
};
</script>
profile
Ally