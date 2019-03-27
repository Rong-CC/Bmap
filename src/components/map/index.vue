<template>
<div class="mapbox">
   <div class="meMap"
       id="meMap" 
      ref="allmap" >
  </div>
</div>
 
</template>

<script>
// import BMap from 'BMap'
 import BMap from 'BMap' 
// import loadBMap from './map.js'\
import styleJson from  './mapStyle.js'
export default {
  name: "myMap",
  data() {
    return {
      ak: "88qyRi48HOqcL6H0wH2rXLuxTGfpuAwQ",
    };
  },
  props: {
      // longitude:{
      //   type:Number,
      //    default:116.404
      // },
      //  // 纬度
      // latitude:{
      //   type:Number,
      //   default:39.915
      // },
      // description:{
      //   type:String,
      //   default:'天安门'
      // }
  },
  methods: {
     initMap(){
        var markerArr = [{ title: "名称：广州火车站", point: "113.264531,23.157003", address: "广东省广州市广州火车站", tel: "12306" },
                  { title: "名称：广州塔（赤岗塔）", point: "116.32715863448607,39.990912172420714", address: "广东省广州市广州塔（赤岗塔） ", tel: "18500000000" },
                  { title: "名称：广州动物园", point: "113.312213,23.147267", address: "广东省广州市广州动物园", tel: "18500000000" },
                { title: "名称：天河公园", point: "113.372867,23.134274", address: "广东省广州市天河公园", tel: "1]8500000000" }
              ];

      var map = new BMap.Map('meMap',{minZoom:5,maxZoom:8});// 创建Map实例,设置地图允许的最小/大级别
      var point = new BMap.Point(104.075796, 30.659684);
      map.centerAndZoom(point, 6);  // 两个属性 一个是经纬度，一个是地图缩放大小
      var marker = new BMap.Marker(point);
      map.addOverlay(marker);
      map.setMapStyleV2({styleJson:styleJson});  // 个性化样式
      var point = new Array(); //存放标注点经纬信息的数组
      var marker = new Array(); //存放标注点对象的数组
      var info = new Array(); //存放提示信息窗口对象的数组
      var searchInfoWindow =new Array();//存放检索信息窗口对象的数组
      for(var i=0; i<markerArr.length;i++){
        let p0 = markerArr[i].point.split(",")[0];
        let p1 = markerArr[i].point.split(",")[1] //按照原数组的point格式将地图点坐标的经纬度分别提出来
        point[i] = new window.BMap.Point(p0, p1); //循环生成新的地图点
        marker[i] = new window.BMap.Marker(point[i]); //按照地图点坐标生成标记
        map.addOverlay(marker[i]);
      }
     }
  },
  mounted() {
    this.initMap()
  }
};
</script>

<style scoped>
.mapbox{
  width: 100%;
  /* width: calc(100% - 200px); */
  height: 100%;
  background: red;
  position: fixed;
  left: 0;
  top: 0;
}
.meMap {
  width: 100%;
  height: 100%;
}
.BMap_cpyCtrl BMap_noprint anchorBL{
  display: none;
}
</style>
