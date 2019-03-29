
<template>
  <div id="chart">
      <div
      :id='id'
      style='width:100%;height:180px'
    ></div>

  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "chart",
  data() {
    return {

    };
  },
  props:{
      title:{
        type:String,
        },
        id: String
    },
  methods: {
       drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById(this.id))
        // 绘制图表
        myChart.setOption({
            color: ['#f44'],
            title: { 
              text: this.title,
              textStyle:{
                fontSize:12,
                color:'#1aa367'
              }
            },
            grid: {  
                left: '8%',  
                right: '0',  
                bottom: '5%',
                top:'25%', 
              containLabel: true  
            },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {
                interval: 10    // 左边的刻度以多少为单位
            },
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20],
                barWidth: 25, // 柱状的宽度
                itemStyle:{
                  normal:{ 
                    color: "#1aa367"   // 柱状颜色
                  }
                }
            }]
        });
    }

  },
  mounted() {
      // console.log(this.title)
   this.drawLine();
  }
};

</script>

<style>
</style>
