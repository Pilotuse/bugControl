<template>
  <div class="table">
    <h3>任务中心</h3>
    <el-divider></el-divider>
    <el-card class="box-card">
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="date" label="任务名称" width="180">
        </el-table-column>
        <el-table-column prop="taskname" label="标签设定" width="180">
        </el-table-column>
        <el-table-column prop="degree" label="重要程度" width="180">
          <el-button type="danger">重要</el-button>
        </el-table-column>

        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="180"
          column-key="date"
          :filters="[
            { text: '2016-05-01', value: '2016-05-01' },
            { text: '2016-05-02', value: '2016-05-02' },
            { text: '2016-05-03', value: '2016-05-03' },
            { text: '2016-05-04', value: '2016-05-04' },
          ]"
        >
        </el-table-column>

        <el-table-column prop="uploaddemo" label="附件" width="300">
        </el-table-column>
        <!-- <el-table-column label="附件">
      <template slot-scope="scope">
        <span v-if="scope.row.pic">
          <el-image
            style="width: 100px; height: 100px"
            :src="scope.row.pic.split('_')[0]"
            :preview-src-list="scope.row.pic.split('_')"
          >
          </el-image>
        </span>
      </template>
    </el-table-column> -->
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="primary" v-if="scope.row.type == 1"
              >已修复</el-button
            >
            <!-- <el-button type="success" v-else-if="scope.row.type == 2"
          >已修复</el-button
        > -->
            <el-button type="danger" v-else>待修复</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-divider></el-divider>
    <h3>概览报表</h3>
    <el-divider></el-divider>
    <el-card class="box-card box">
      <div class="text">
        问题总数
        <p>10</p>
      </div>
      <div id="myecharts1"></div>

      <div id="myecharts"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      tableData: [
        {
          date: "接口问题",
          star: "2016-05-02",
          taskname: "淘宝bug",
          degree: "重要",
          address: "2016-05-03",
          uploaddemo: "11111",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },

  methods: {
    tableRowClassName({ rowIndex }) {
      if (rowIndex === 0) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("myecharts"));

    var option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          type: "pie",
          radius: ["50%", "60%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "30",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 9, name: "未完成" },

            { value: 1, name: "已完成" },
          ],
        },
      ],
    };

    option && myChart.setOption(option);
  },
};
</script>

<style scoped>
.table {
  padding: 8px 30px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.box-card {
  width: 1200px;
}
.box {
  height: 300px;
  position: relative;
}
#myecharts {
  width: 300px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  border-left: 1px solid #3333;
}
.text {
  width: 200px;
  text-align: center;
  font-size: 20px;
}
.text p {
  color: green;
  font-size: 30px;
  font-weight: 700;
}
</style>
