<template>
  <div class='rollcall'>
    <div>
      <ul :class='{choosing: choosing === true}' class='cf'>
        <li v-for='(member, index) in students' :class='{checked: luckyNum === index}'>{{member.name}}</li>
      </ul>
      <button @click='chooseLuckyOne()'>choose lucky one</button>
      <button @click='chooseThis()'>it's you</button>
      <chart></chart>
  </div>
  </div>
</template>

<script>
import chart from './chart'
export default {
  name: 'app',
  data () {
      return {
        students: [],
        luckyNum: -1,
        timer: '',
        choosing: false
      }
  },
  components:{
    chart
  },
  computed: {
    students(){
      return this.$store.state.studentsData
    }
  },
  methods: {
      chooseLuckyOne: function() {
          var studentsNum = this.students.length
          if(this.timer){
              clearInterval(this.timer)
          }
          this.choosing = true
          this.timer = setInterval(() => {
              this.luckyNum = parseInt(Math.random() * studentsNum)
          },300)
      },
      chooseThis: function() {
          if(this.timer && this.choosing){
             clearInterval(this.timer)
             this.choosing = false
             this.$store.commit('addLucknum',this.luckyNum)
          }
      }
  }
}
</script>

<style lang="scss" scoped>
    /*清除浮动 两种方式根据具体需求自选*/
    .cf:before, .cf:after { content:"";  display:table;}
    .cf:after {  clear:both;  }  
    .cf { zoom:1;  } /*方式1*/
    .of { overflow:hidden; }/*方式2*/

    .rollcall{

      > div{

        text-align: center;
        overflow: auto;
        
        ul{
          margin: 0 auto;
          width: 500px;

          &.choosing{
            background-color: black;
            color: white;
          }
        }

        li{
          float: left;
          margin: 10px;
          font-size: 20px;
          width: 50px;
          list-style: none;
          font-size: 14px;
          padding: 5px 0;

          &.checked{
               background-color: gray;
               color: #fff
          }
        }
      }
    }
    
</style>
