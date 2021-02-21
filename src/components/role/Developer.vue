<template>
  <div class="table">
    <h3>概览报表</h3>
    <el-card class="box-card box">
      <div class="text">
        问题总数
        <p>10</p>
      </div>
      <div class="text">
        已完成
        <p>1</p>
      </div>
      <div class="text1">
        未完成
        <p>9</p>
      </div>
      <div id="myecharts1"></div>

      <div id="myecharts"></div>
    </el-card>
    <h3>任务中心</h3>
    <el-card class="box-card">
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="taskname" label="任务名称" width="180">
        </el-table-column>
        <el-table-column prop="tasknumber" label="指派人员" width="180">
        </el-table-column>
        <el-table-column prop="taskdetail" label="标签设定" width="180">
        </el-table-column>
        <el-table-column prop="degree" label="重要程度" width="180">
          <el-button type="danger">重要</el-button>
        </el-table-column>

        <el-table-column
          prop="cutoffday"
          label="日期"
          sortable
          width="180"
          column-key="date"
        >
        </el-table-column>
        <el-table-column prop="attachment" label="任务详情" width="300">
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="primary" v-if="scope.row.type == 1"
              >已修复</el-button
            >
            <el-button type="dangers" v-else>待修复</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      tableData: [
        {
          taskname: "啊啊",
          tasknumber: "下海",
          cutoffday: "2016-05-02",
          taskdetail: "淘宝bug",
          degree: "重要",
          address: "2016-05-03",
          attachment: "11111",
        },
      ],
    };
  },
  computed: {},
  methods: {
    ...mapActions(["tester"]),
    getMethod() {
      this.$refs.validate(() => {
        this.tester({
          callback(data) {
            let { status } = data.params.result;
            if (status == "0000") {
              console.log("接口获取成功");
            } else {
              console.log("失败");
            }
          },
        });
      });
    },
    created() {
      this.getMethod();
    },
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
    var myChart1 = echarts.init(document.getElementById("myecharts1"));

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
    var option1 = {
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
    option1 && myChart1.setOption(option1);
    option && myChart.setOption(option);
  },
};
</script>

<style scoped>
.table {
  padding: 24px;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.box-card {
  width: 100%;
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

#myecharts1 {
  width: 300px;
  height: 100%;
  position: absolute;
  right: 300px;
  top: 0;
  border-left: 1px solid #3333;
}

.text,
.text1 {
  width: 150px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  float: left;
  margin-top: 80px;
}

.text1 {
  float: left;
}

.text p {
  color: green;
  font-size: 30px;
  font-weight: 700;
}

.text1 p {
  color: red;
  font-size: 30px;
  font-weight: 700;
}
</style>
