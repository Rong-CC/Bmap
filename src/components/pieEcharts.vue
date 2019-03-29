<template>
  <div id="chart">
    <div
      :id='title'
      style='width:100%;height:180px'
    ></div>
    <slot></slot>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "picChart",
  data() {
    return {};
  },
  props: {
    title: {
      type: String
    }
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById(this.title));
      // 绘制图表
      myChart.setOption({
        grid: {
          left: "0%",
          right: "0",
          bottom: "5%",
          top: "25%",
          containLabel: true
        },
        series: [ 
            {
            name: "访问来源",
            type: "pie",
            radius : '65%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            itemStyle: {
              normal: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          }
        ]
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