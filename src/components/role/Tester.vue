<template>
    <div class="body">
        <el-row>
            <el-col :span="24" class="headers">
                <h3 class="title">任务与任务派发</h3>
                <el-button type="primary" @click="dialogVisible = true">新建任务</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10" class="search">
                <el-select v-model="screen.sortby" multiple placeholder="排序方式">
                    <el-option v-for="item in options1" :key="item.id" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="screen.lable" multiple collapse-tags style="margin: 0 20px" placeholder="标签">
                    <el-option v-for="item in options2" :key="item.id" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-input placeholder="请输入内容" v-model="screen.search" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="operation">
                <div style="cursor: pointer">
                    <i class="el-icon-edit" style="color: deepskyblue"></i>批量操作
                </div>
                <p style="margin-left: 20px">共有{{}}个任务</p>
            </el-col>
        </el-row>
        <div class="taskall">
            <el-row v-for="items in library" :key="items.id" class="task">
                <el-col :span="1">
                    <el-checkbox v-model="selected.checked"></el-checkbox>
                </el-col>
                <el-col :span="2">#{{ items.id  }}</el-col>
                <el-col :span="4">{{ items.taskname }}</el-col>
                <el-col :span="5">{{ items.details }}</el-col>
                <el-col :span="2">
                    <el-tag type="danger">{{ items.degree }}</el-tag>
                </el-col>
                <el-col :span="5">
                    <el-tag type="success">{{ items.label }}</el-tag>
                </el-col>
                <el-col :span="2">{{ items.handler }}</el-col>
                <el-col :span="2">{{ items.tasktime }}</el-col>
                <el-col :span="2">
                    <el-button type="success" icon="el-icon-edit" circle size="small"></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle size="small"></el-button>
                </el-col>
            </el-row>
        </div>

        <!-- 任务输入框 -->
        <el-dialog title="新建信息" :visible.sync="dialogVisible" width="700px" :before-close="handleClose">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="名称" prop="taskname">
                    <el-input v-model="ruleForm.taskname"></el-input>
                </el-form-item>
                <el-form-item label="指派给" prop="handler" class="person">
                    <el-select v-model="ruleForm.handler" placeholder="请选择开发人员">
                        <el-option v-for="name in developer" :label="name" :value="name" :key="name"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="期限" required>
                    <el-col :span="11">
                        <el-form-item prop="endtime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.endtime" style="width: 100%"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="标签" prop="label">
                    <el-checkbox-group v-model="ruleForm.label">
                        <el-checkbox label="bug" name="type"></el-checkbox>
                        <el-checkbox label="需求" name="type"></el-checkbox>
                        <el-checkbox label="样式" name="type"></el-checkbox>
                        <el-checkbox label="兼容" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="优先级" prop="degree">
                    <el-radio-group v-model="ruleForm.degree">
                        <el-radio label="高"></el-radio>
                        <el-radio label="中"></el-radio>
                        <el-radio label="低"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="详情" prop="details">
                    <el-input type="textarea" v-model="ruleForm.details"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">确认提交</el-button>
                    <el-button type="primary" @click="handleCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            dialogVisible: false,
            developer: [],
            screen: { lable: '', sortby: '', search: '' },
            selected: { checked: [] },
            options1: [
                { id: 1, value: "选项1", label: "重要程度", },
                { id: 2, value: "选项2", label: "到期时间", }
            ],
            options2: [{
                id: 1,
                value: "选项1",
                label: "bug",
            },
            {
                id: 2,
                value: "选项2",
                label: "需求",
            },
            {
                id: 3,
                value: "选项2",
                label: "样式",
            },
            {
                id: 4,
                value: "选项2",
                label: "兼容",
            }],
            library: [{
                id: 1,
                tasknumber: "#abc",
                taskname: "淘宝bug",
                taskdetails: "解决bug",
                Degree: "重要",
                tasklabel: "bug",
                taskperson: "小王",
                tasktime: "2月25日",
            },
            {
                id: 2,
                tasknumber: "#zxc",
                taskname: "天猫bug",
                taskdetails: "解决bug",
                Degree: "重要",
                tasklabel: "样式",
                taskperson: "小王",
                tasktime: "2月26日",
            }],
            flagtask: false,
            ruleForm: {
                taskname: "", //名称
                handler: "",  // 处理人
                endtime: "",  // 结束时间
                label: [],   // 标签
                degree: "",  // 程度
                details: "",  // 详情
            },
            rules: {
                taskname: [
                    { required: true, message: "请输入标题", trigger: "blur" },
                    { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
                ],
                handler: [{ required: true, message: "请选择实际处理人", trigger: "change" }],
                endtime: [{
                    type: "date",
                    required: true,
                    message: "请选择日期",
                    trigger: "change",
                }],
                label: [{
                    type: "array",
                    required: true,
                    message: "请至少选择一个标签",
                    trigger: "change",
                }],
                degree: [{ required: true, message: "请选择优先级", trigger: "change" }],
                details: [{ required: true, message: "请填写详细信息，以方便开发迅速定位", trigger: "blur" }],
            },
        };
    },
    methods: {
        ...mapActions(["insertBugOrder", "queryUser", "queryBugOrder"]),
        handleClose(done) {
            this.$confirm('确认关闭?').then(() => done()).catch(() => { });
        },
        handleCancel() {
            this.dialogVisible = false
            this.$refs['ruleForm'].resetFields();
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let { taskname, handler, endtime, label, degree, details } = this.ruleForm;
                    let that = this;
                    endtime = this.dayjs(endtime).format('YYYY-MM-DD')
                    label = Array.from(label).join(',')
                    console.log(taskname, handler, endtime, label, degree, details);
                    this.insertBugOrder({
                        taskname, handler, endtime, label, degree, details, callback(data) {
                            let { code } = data.params.result;
                            if (code == "0000") {
                                that.queryBugInfo()
                                that.dialogVisible = false
                            } else {
                                alert("shibai");
                            }
                        },
                    });
                } else {
                    return false;
                }
            });
        },
        queryBugInfo() {
            let that = this
            this.queryBugOrder({
                callback({ params: { result: { msg } } }) {
                    that.library = msg
                }
            })
        }
    },
    created() {
        let that = this;
        this.queryUser({
            author_power: 'developer',
            callback({ params: { result: { msg } } }) {
                msg.forEach(el => that.developer.push(el.username))
            }
        });
        this.queryBugInfo()
    }
};
</script>





<style scoped>
.body {
    position: relative;
    height: 100%;
}

.right {
    float: right;
}

.el-dialog {
    position: relative;
    margin: 0 auto 50px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 50%;
    /* height: 550px; */
}

.el-page-header {
    height: 40px;
    line-height: 40px;
}

.el-row {
    padding: 0 20px;
}

.headers {
    width: 93vw;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 10px;
}
.search {
    display: flex;
    margin-top: 20px;
    /* margin-bottom: 20px; */
}
.operation {
    display: flex;
    align-items: center;
}
.task {
    display: flex;
    align-items: center;
    height: 40px;
    border-bottom: 0;
    align-items: center;
    padding: 0 20px;
    margin: 0;
    color: #666;
}
.task:hover {
    background-color: #f1f1f1;
}
.taskall {
    width: 93vw;
    margin-left: 20px;
    background: #f5f6fa;
    border-radius: 4px;
}

.el-tag {
    height: 22px;
    line-height: 22px;
    border-radius: 0;
}

h3.title {
    margin: 10px 0;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
}
</style>