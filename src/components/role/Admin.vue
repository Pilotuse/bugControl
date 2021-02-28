<template>
  <div class="table">
    <h3>成员管理</h3>
    <el-card class="box-card box">
      <div class="text">
        人员总数
        <p>{{ tableall }}</p>
      </div>
      <div class="text">
        开发人员
        <p>{{ tablejie }}</p>
      </div>
      <div class="text1">
        测试人员
        <p>{{ tableall - tablejie }}</p>
      </div>
      <div id="myecharts1"></div>

      <div id="myecharts"></div>
    </el-card>
    <h3>任务中心</h3>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="idnumber" label="ID" width="180">
        </el-table-column>
        <el-table-column prop="belongto" label="指派" width="180">
        </el-table-column>
        <el-table-column prop="label" label="标签" width="180">
        </el-table-column>
        <el-table-column prop="degree" label="优先级" width="180">
          <el-button type="danger">重要</el-button>
        </el-table-column>

        <el-table-column prop="end_time" label="日期" sortable width="180" column-key="date">
        </el-table-column>
        <el-table-column prop="details" label="任务详情" width="300">
        </el-table-column>
        <el-table-column label="操作" width="180">
          <span v-if="scope.row.type == 1">
            <el-button type="success" @click="changetype(scope.row._id, 2)">已修复</el-button>
          </span>
          <el-button type="primary" v-else-if="scope.row.type == 2">已修复</el-button>
          <el-button type="danger" v-else>未修复</el-button>
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
        tableall: "",
        tablejie: "",
        tableData: [],
      };
    },
    methods: {
      open() {
        this.$alert('是否确认已修复', {
          dangerouslyUseHTMLString: true
        });
      },
      ...mapActions(["queryBugOrder", "queryUser"]),
      queryBugInfo() {
        let that = this;
        this.queryBugOrder({
          callback({
            params: {
              result: { msg },
            },
          }) {
            if (typeof msg == "object") {
              that.tableall = msg.length;
              // console.log(msg.length);

              msg.forEach((el) => {
                that.tableData.push({
                  idnumber: el.id,
                  belongto: el.belongto,
                  label: el.label,
                  degree: el.degree,
                  end_time: that.dayjs(el.end_time).format("YYYY-MM-DD"),
                  details: el.details,
                  status: el.status,
                });
              });
            }
            console.log(that.tableData);
            let data = that.tableData.filter((el) => {
              return el.status == "1";
            });
            console.log(data.length);
            that.tablejie = data.length;
          },
        });
      },
    },
    created() {
      this.queryBugInfo();
    },
    tableRowClassName({ rowIndex }) {
      if (rowIndex === 0) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
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
              { value: 333, name: "开发人员" },

              { value: 222, name: "测试人员" },
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