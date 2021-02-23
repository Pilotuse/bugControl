<template>
  <div class="container">
    <div class="dash">
      <h3 class="title">信息统计</h3>
      <div class="canvas">
        <el-card class="box-card">
          <div class="desc">我的需求</div>
          <div id="myecharts1"></div>
        </el-card>
        <el-card class="box-card">
          <div class="desc">问题总量</div>
          <div id="myecharts"></div>
        </el-card>
        <el-card class="box-card">
          <div class="desc">已解决</div>
        </el-card>
        <el-card class="box-card">
          <div class="desc">待上线</div>
        </el-card>
        <el-card class="box-card">
          <div class="desc">处理中</div>
        </el-card>
        <el-card class="box-card">
          <div class="desc">我的问题数量</div>
        </el-card>

      </div>
    </div>
    <div>
      <h3 class="title">详细信息</h3>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="我的需求" name="1">我的需求</el-tab-pane>
        <el-tab-pane label="我的问题" name="6">我的问题</el-tab-pane>
        <el-tab-pane label="问题汇总" name="2">
          <el-table :data="tableData" style="width: 100%" :show-header="false" @cell-click="findData">
            <el-table-column prop="id"></el-table-column>
            <el-table-column prop="title"></el-table-column>
            <el-table-column prop="data"></el-table-column>
            <el-table-column prop="person"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="处理中" name="5">处理中</el-tab-pane>
        <el-tab-pane label="待上线" name="4">待上线</el-tab-pane>
        <el-tab-pane label="已解决" name="3">已解决</el-tab-pane>
      </el-tabs>
    </div>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false" size='600px'>
      <span>我来啦!</span>
    </el-drawer>
  </div>

</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    var myChart = echarts.init(document.getElementById("myecharts"));
    var myChart1 = echarts.init(document.getElementById("myecharts1"));
    var option = {
      color: ["#BA98FF"],
      grid: {
        x: 25,
        y: 45,
        x2: 5,
        y2: 20,
        borderWidth: 1
      },
      xAxis: {
        type: "category",
        show: false
      },
      yAxis: {
        type: "value",
        show: false
      },
      series: [{
        data: [50, 30, 20, 80],
        type: "line",
        smooth: true,
        itemStyle: {
          normal: {
            label: { show: true },
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [{ offset: 0, color: '#000' },
              { offset: 0.5, color: '#888' },
              { offset: 1, color: '#ddd' }]
            )
          }
        }
      }]
    };
    var option1 = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      }]
    };
    myChart.setOption(option);
    myChart1.setOption(option1);


  },
  data() {
    return {
      drawer: false,
      activeName: '1',
      tableData: [{
        id: '202102202353001',
        title: '页面布局错位',
        data: '2021年2月20日23:56:24',
        person: '嘻嘻'
      }, {
        id: '202102202353001',
        title: '数据展示存在异常',
        data: '2021年2月20日23:56:24',
        person: '嘻嘻'

      }, {
        id: '202102202353001',
        title: '登录成功后跳转异常',
        data: '2021年2月20日23:56:24',
        person: '嘻嘻'
      }, {
        id: '202102202353001',
        title: '异常提示不准确',
        data: '2021年2月20日23:56:24',
        person: '嘻嘻'
      }]
    };
  },
  methods: {
    handleClick() { },
    findData() {
      this.drawer = true
    }
  },
};
</script>
<style scoped>
.container {
  padding: 24px;
}

.box-card {
  margin-top: 10px;
  width: 340px !important;
  height: 200px !important;
  background: #e3f4ff;
  border: 1px solid #c2daeb;
  color: #005980;
}

.box-card:hover {
  border: 1px solid #8ed2ff;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    0 4px 15px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 4px 15px 0 rgba(0, 0, 0, 0.2);
}

.box-card:last-child {
  margin-right: 0;
}

.el-card__body {
  padding: 0 !important;
  position: relative;
}

.el-drawer__body {
  padding-top: 46px !important;
}

h3.title {
  margin: 10px 0;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
}

.el-table td,
.el-table th {
  padding: 10px 0;
}

#myecharts,
#myecharts1 {
  width: 100%;
  height: 250px;
  opacity: 0.7;
}

.canvas {
  display: flex;
  flex-wrap: wrap;
}

.canvas > div {
  margin-right: 20px;
}

.desc {
  position: absolute;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>