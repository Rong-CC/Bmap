<template>
  <div id="home">
    <header class="title">
      <div class="title-item">
      </div>
    </header>
    <section class="left">
      <div class="aggregate-data">
        <h5 class="titlecolor">累计成交总额</h5>
        <h3 class="yellowcolor">123456 元</h3>
        <p class="commoncolor">截到在2019年3月1号</p>
        <h5 class="titlecolor">累计成交总额</h5>
        <h3 class="yellowcolor">123456</h3>
        <p class="commoncolor">截止在2019年3月1号</p>
      </div>
      <div class="Recent-data">
        <div class="Recent-data-chart">
            <chart :title="'we'"></chart>
        </div>
        <div class="Recent-data-chart">
           <chart :title="'my'"></chart>
        </div>
        <div class="Recent-data-chart">
            <chart :title="'ms'"></chart>
        </div>
      </div>
      <div></div>
    </section>
    <section class="right">
      <div class="right-mian">
        <div class="right-bottom-box">

        </div>
        <div class="right-commodity"></div>
      </div>
    </section>
    <my-map></my-map>
  </div>
</template>

<script>
import chart from '../components/barEchart.vue'
import myMap from '../components/map/index'
 import BMap from 'BMap' 
export default {
  name: "home",
  data() {
    return {
      accumulative:[
        {
          title: '累计成交总额',
          num: '123456',
          date: '截止在2019年3月1号'
        },
         {
          title: '最高同时在线用户',
          num: '123456',
          date: '出现在2019年3月1号'
        }
      ]
    };
  },
  methods:{

  },
  mounted(){
  },
  components:{
    chart,
     myMap
  }
  
};
</script>

<style  scoped>
#home {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2px 15px 15px 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.title {
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  z-index: 999;
}
.title-item {
  width: 450px;
  height: 100%;
  background: beige;
  /* z-index: 999; */
}
.left {
  width: 25%;
  height: 100%;
  background: #16282e;
  box-sizing: border-box;
  z-index: 999;
  /* padding: 30px; */
}

.aggregate-data {
  width: 100%;
  height: 220px;
  margin-bottom: 20px;
  padding: 10px 30px; 
  /* background: red; */
}
.aggregate-data h5{
  /* padding: 30px 0px 10px 0px; */
  margin-top: 30px;
   padding-bottom: 10px;
}
.aggregate-data h3{
  font-size: 2em;
  font-weight: 600;
  padding-bottom: 10px;
}
.Recent-data {
  width: 100%;
  height: calc(100vh - 280px);
  background: beige;
  
}
.Recent-data-chart{
  width: 70%;
  padding-left:30px; 
}
.right {
  flex-grow: 1;
  display: flex;
  /* z-index: 99; */
}
.right-mian {
  width: 100%;
  height: 60%;
  align-self: flex-end;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  box-sizing: border-box; /*内边框*/

}
.right-commodity {
  width: 500px;
  height: 200px;
  background: gold;
  margin-bottom: 40px;
  z-index: 999;
}
.right-bottom-box {
  width: 100%;
  height: 240px;
  /* background: khaki; */
  z-index: 999;
}
</style>
<style>
  .titlecolor{
    color:#77f1ef;
    font-weight: 600;
  }
  .yellowcolor{
    color:#ff9b00;
  }
  .commoncolor{
    color: #1aa367;
  }

</style>
