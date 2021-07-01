<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    {{aa}}
    <button @click="logo">82ywhu</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { getBanner, loginReq } from '@/api/test'
@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  aa = ''

  public mounted () {
    this.dianji()
    getBanner().then((res) => {
      console.log(res.data)
    })
  }

  dianji () {
    this.aa = 'iao'
  }

  logo () {
    const data = { userName: 'jsai', password: '80u9i09' }
    loginReq(data).then((res) => {
      console.log(res.data)
    })
  }
}
</script>
