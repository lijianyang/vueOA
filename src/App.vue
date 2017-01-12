<template>
      <div class='App'>
          <vueheader></vueheader>
          <div class='container'>
            <sidebar></sidebar>
            <div class='mainContent'>
                <router-view></router-view>
            </div>
          </div>
      </div>
</template>

<script>
import vueheader from './components/header'
import sidebar from './components/sidebar'
export default {
    components: {
      vueheader,
      sidebar
    }
}
</script>

<style lang="scss">
    *{
      margin: 0;
      padding: 0;
    }
    html,body,#app{
      height: 100%;
    }
    body{
      background: #5A6B72;
    }
    .App{
      height: 100%;
      width: 80%;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
    }
    .container{
      width: 100%;
      position: absolute;
      top: 100px;
      bottom: 0;
      overflow: hidden;
    }
    .mainContent{
      margin-left: 150px;
      box-sizing: border-box;
      overflow: auto;
      background: #D4E1E7;
      border-radius: 10px;
      height: 100%;
    }

</style>
