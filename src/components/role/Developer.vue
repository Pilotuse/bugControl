<template>
  <div class="table">
    <div class="left">
      <h3>任务中心</h3>
      <el-card class="box-card">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            prop="idnumber"
            label="ID"
            width="100"
          ></el-table-column>
          <el-table-column prop="belongto" label="指派"> </el-table-column>
          <el-table-column prop="label" label="标签"> </el-table-column>
          <el-table-column prop="degree" label="优先级"> </el-table-column>
          <el-table-column
            prop="end_time"
            label="日期"
            sortable
            column-key="date"
          >
          </el-table-column>
          <el-table-column prop="details" label="任务详情">
            <template slot-scope="scope">
              <el-link type="warning" @click="changedrawer">{{
                scope.row.details
              }}</el-link>
            </template>
          </el-table-column>
          <el-table-column label="操作">
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
    <div class="right">
      <h3>概览报表</h3>
      <el-card class="box-card box">
        <div class="text">
          问题总数
          <p>{{ tableall }}</p>
        </div>
        <div class="text">
          已完成
          <p>{{ tablejie }}</p>
        </div>
        <div class="text1">
          未完成
          <p>{{ tableall - tablejie }}</p>
        </div>
        <!-- <div id="myecharts1"></div> -->

        <div id="myecharts"></div>
      </el-card>
    </div>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      drawer: false,
      tableall: "",
      tablejie: "",
      tableData: [],
    };
  },
  methods: {
    ...mapActions(["queryOwnBug", "queryUser"]),
    changedrawer() {
      this.drawer = true;
    },
    repair() {
      this.$confirm("是否确认修复完毕", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "修复成功!",
            center: true,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
            center: true,
          });
        });
    },
  },
  created() {
    // this.queryBugInfo();
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
    let that = this;
    this.queryOwnBug({
      callback({
        params: {
          result: { msg },
        },
      }) {
        if (typeof msg == "object") {
          that.tableall = msg.length;
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
        let data = that.tableData.filter((el) => el.status != "1");
        that.tablejie = data.length;
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
                { value: that.tableall - that.tablejie, name: "未完成" },

                { value: that.tablejie, name: "已完成" },
              ],
            },
          ],
        };
        option && myChart.setOption(option);
      },
    });
  },
};
</script>

<style scoped>
.table {
  /* padding: 0 0 0 20px; */
  height: 100%;
}
h3 {
  padding-left: 20px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.box-card {
  box-shadow: 0 0 0 0;
  border: 0;
  padding: 0;
}

.box {
  height: 600px;
  position: relative;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-around;
  padding: 0;
}

#myecharts {
  width: 300px;
  height: 100%;
  position: absolute;
  left: -10px;
  /* right: 0; */
  top: 25%;
  /* margin: auto; */
  /* border-left: 1px solid #e7e7e7; */
}

/* #myecharts1 {
  width: 300px;
  height: 100%;
  position: absolute;
  right: 300px;
  top: 0;
  border-left: 1px solid #3333;
} */

.text,
.text1 {
  width: 70px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  float: left;
  margin-top: 20px;
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
.left {
  width: 82%;
  float: left;
}
.right {
  width: 18%;
  height: 100%;
  background-color: #f7f7f7;
  float: right;
  /* padding: 0 20px; */
  box-sizing: border-box;
}
</style>