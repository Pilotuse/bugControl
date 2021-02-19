<template>
  <el-row>
    <el-card class="box-card">
      <div>
        <h3>bug修复情况</h3>
      </div>
      <div id="myecharts"></div>
    </el-card>
    <el-card class="box-card">
      <div>
        <h3>处理中</h3>
      </div>
    </el-card>
    <el-card class="box-card">
      <div>
        <h3>已解决</h3>
      </div>
    </el-card>
  </el-row>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    var myChart = echarts.init(document.getElementById("myecharts"));
    var option = {
      xAxis: {
        type: "category",
        data: ["bug总数", "待修复", "已修复"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [50, 30, 20],
          type: "line",
          smooth: true,
        },
      ],
    };
    option && myChart.setOption(option);
  },
};
</script>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 350px !important;
}

#myecharts {
  width: 300px;
  height: 250px;
}
</style>
