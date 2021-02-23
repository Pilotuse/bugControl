<template>
    <div class="bug-container">
        <div class="bug-pack-up">
            <i class="iconfont icon-chevron-left" @click="hiddenMask"></i>
        </div>
        <div class="bug-header">
            <el-dropdown @command="handleCommand">
                <el-button :style="{color:issueStateGet.style}" style="font-size:12px;"><i class="iconfont" style="margin-right:8px;font-size:12px;" :class="issueStateGet.icon"></i>{{issueStateGet.describer}}</el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="item.command" v-for="item in issueState" :key="item.id" :style="{color:item.style}" style="font-size:12px;">
                        <i class=" iconfont" :class="item.icon" style="margin-right:8px;font-size:12px;"></i> {{item.describer}}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown @command="issueDegreeCall">
                <el-button :style="{color:issueDegreeDescriber.style}" style="font-size:12px;">
                    <i class="iconfont icon-yuan" style="margin-right:8px;font-size:12px;" :style="issueDegreeDescriber.style"></i> {{issueDegreeDescriber.describer}}
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="item.command" v-for="item in issueDegree" :key="item.id" :style="{color:item.style}" style="font-size:12px;">
                        <i class="iconfont icon-yuan" style="margin-right:8px;font-size:12px;" :style="item.style"></i> {{item.describer}}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown @command="issueTagCall">
                <el-button :style="{color:issueTagDescriber.style}" style="font-size:12px;">
                    <i class="iconfont icon-tag" style="margin-right:8px;font-size:12px;" :style="issueTagDescriber.style"></i> {{issueTagDescriber.describer}}
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="item.command" v-for="item in issueTag" :key="item.id" :style="{color:item.style}" style="font-size:12px;">
                        <i class="iconfont icon-tag" style="margin-right:8px;font-size:12px;" :style="item.style"></i> {{item.describer}}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </div>
        <el-divider></el-divider>

        <h4 class="title">任务信息</h4>
        <div class="issue-info">
            <span class="issue-id">#CQVC1</span>
            <span class="create-time">您创建于 2020-02-23</span>
        </div>

        <div class="issue-describer" @dblclick="showMarkBox">
            <div v-if="!markdowncontainer">
                <i v-if="contentDate">暂无数据</i>
                <div v-else class="markdown-body">
                    <VueMarkdown :source="markdownValue" v-highlight></VueMarkdown>
                </div>
            </div>
            <markdown v-if="markdowncontainer" @markdownsave="markdownSave"></markdown>
        </div>
        <el-divider></el-divider>

        <div class="label clearfix">
            <div class="left">
                <i class="iconfont icon-tag"></i>
            </div>
            <div class="right">
                <span class="label-brand"> 标签 </span>
                <el-dropdown @command="issueTagCall">
                    <el-button type="info" icon="el-icon-plus" class="el-dropdown-link" circle size="small" plain></el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :command="item.command" v-for="item in issueTag" :key="item.id" :style="{color:item.style}" style="font-size:12px;">
                            <i class="iconfont icon-tag" style="margin-right:8px;font-size:12px;" :style="item.style"></i> {{item.describer}}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <div class="labe-list">
                    <el-tag size="mini" closable>BUG</el-tag>
                    <el-tag size="mini" closable>BUG</el-tag>
                    <el-tag size="mini" closable>BUG</el-tag>
                    <el-tag size="mini" closable>BUG</el-tag>
                </div>
            </div>
        </div>
        <el-divider></el-divider>

        <div class="enclosure clearfix">
            <div class="left">
                <i class="el-icon-paperclip"></i>
            </div>
            <div class="right">
                <span class="label-brand"> 附件 </span>
                <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
                    <el-button type="info" circle size="small" plain> <i class="el-icon-plus"></i></el-button>
                </el-upload>
            </div>
        </div>
        <el-divider></el-divider>
        <div class="issue-node">
            <div class="left">
                <i class="el-icon-place"></i>
            </div>
            <div class="right">
                <span class="label-brand"> 操作节点 </span>
                <el-timeline :reverse="reverse">
                    <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
                        {{activity.content}}
                    </el-timeline-item>
                </el-timeline>
            </div>

        </div>

    </div>
</template>


<script>
import markdown from './Markdown'
import { mapState } from 'vuex'
import VueMarkdown from 'vue-markdown'

export default {
    data() {
        return {
            issueState: [
                { id: 1, icon: 'icon-quanquan', command: 'beProcessed', describer: '代办的', style: '#FE811A', status: false },
                { id: 2, icon: 'icon-jinhang', command: 'ongoing', describer: '进行中', style: '#5798E4', status: false },
                { id: 3, icon: 'icon-feifadiaotouS', command: 'rejected', describer: '已驳回', style: '#FEC018', status: false },
                { id: 4, icon: 'icon-quancha', command: 'refused', describer: '已拒绝', style: '#F56C6C', status: false },
                { id: 5, icon: 'icon-quangou', command: 'complete', describer: '已完成', style: '#20C22E', status: false },
            ],
            issueStateGet: {},
            issueDegree: [
                { id: 1, command: 'serious', describer: '严重', style: '#EF0016', status: false },
                { id: 2, command: 'high', describer: '高', style: '#FF8F00', status: false },
                { id: 3, command: 'middle', describer: '中', style: '#008AFF', status: false },
                { id: 4, command: 'low', describer: '低', style: '#73E06F', status: false },
                { id: 5, command: 'nan', describer: '无优先级', style: '#B0B0B0', status: false },
            ],
            issueDegreeDescriber: {},
            issueTag: [
                { id: 1, command: 'bug', describer: 'BUG', style: '#34495e', status: false },
                { id: 2, command: 'demand', describer: '需求', style: '#9b59b6', status: false },
                { id: 3, command: 'style', describer: '样式', style: "#2ecc71", status: false },
                { id: 4, command: 'Compatible', describer: '兼容', style: '#e74c3c', status: false }
            ],
            issueTagDescriber: {},
            contentDate: true,
            reverse: true,
            activities: [{
                content: '活动按期开始',
                timestamp: '2018-04-15'
            }, {
                content: '通过审核',
                timestamp: '2018-04-13'
            }, {
                content: '创建成功',
                timestamp: '2018-04-11'
            }]
        }
    },
    props: ["bugordershow", "markdowncontainer"],
    methods: {
        hiddenMask() {
            this.$emit('closeMask')
        },
        handleCommand(command) {
            this.issueState.forEach(el => el.status = command == el.command ? true : false)
        },
        issueDegreeCall(command) {
            this.issueDegree.forEach(el => el.status = command == el.command ? true : false)
        },
        issueTagCall(command) {
            this.issueTag.forEach(el => el.status = command == el.command ? true : false)
        },
        showMarkBox() {
            this.$emit("mdcontainerstatus", 'open')
        },
        markdownSave() {
            this.$emit("mdcontainerstatus", 'save')
        }
    },
    components: {
        markdown,
        VueMarkdown
    },
    watch: {
        issueState: {
            deep: true,
            handler(newVal) {
                this.issueStateGet = newVal.filter(el => el.status)[0]
            }
        },
        issueDegree: {
            deep: true,
            handler(newVal) {
                this.issueDegreeDescriber = newVal.filter(el => el.status)[0]
            }
        },
        issueTag: {
            deep: true,
            handler(newVal) {
                this.issueTagDescriber = newVal.filter(el => el.status)[0]
            }
        },
        markdownValue(newValue) {
            if (newValue) this.contentDate = false
        }
    },
    created() {
        this.handleCommand('complete');
        this.issueDegreeCall('serious');
        this.issueTagCall('bug')
    },
    computed: {
        ...mapState(["markdownValue"])
    }
}
</script>

<style scoped>
.bug-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.bug-pack-up {
    position: fixed;
    top: 50%;
    right: 60.6%;
    font-weight: 800;
    transform: translateY(-50%) rotate(180deg);
    cursor: pointer;
    color: #ccc;
}

.bug-pack-up i {
    font-size: 12px;
    color: rgba(140, 146, 164, 0.5);
}

.bug-header button {
    line-height: 20px;
    padding: 5px 10px;
    background: #ffffff;
    border-radius: 16px;
    border: 1px solid #d8d8d8;
    -webkit-box-shadow: none;
    box-shadow: none;
}

.el-divider--horizontal {
    margin: 8px 0;
    background: #dededf;
}

.el-dropdown {
    margin-right: 6px;
}

h4.title {
    margin: 20px 0 10px 0;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
}

.issue-info .issue-id {
    display: inline-block;
    width: 53px;
    height: 18px;
    background: #f5f6f8;
    color: #8c92a4;
    border-radius: 4px;
    line-height: 18px;
    font-size: 12px;
    cursor: pointer;
    text-align: center;
    margin: 0 6px 0 0;
}

.issue-info .create-time {
    font-size: 12px;
    color: #8c92a4;
}

.issue-describer {
    margin: 12px 0 20px 0;
    font-size: 14px;
    color: #8c92a4;
}

.el-dropdown-link {
    width: 16px;
    height: 16px;
    text-align: center;
    line-height: 14px;
    padding: 0;
    margin-left: 4px;
}

.label .left,
.enclosure .left,
.issue-node .left {
    float: left;
    width: 5%;
    text-align: center;
}

.label .left i,
.enclosure .left i,
.issue-node .left i {
    font-size: 16px;
    color: #9096a0;
}

.label .right,
.enclosure .right,
.issue-node .right {
    float: right;
    width: 95%;
}

.label-brand {
    font-size: 12px;
    font-weight: bold;
    line-height: 22px;
    margin: 0 0 6px 0;
}

.labe-list span {
    display: inline-block;
    font-size: 14px;
    border-radius: 4px;
    margin: 6px 6px 6px 0;
}

.upload-demo {
    display: inline-block;
}

.el-button--small.is-circle {
    width: 16px;
    height: 16px;
    padding: 0;
    margin-left: 4px;
}

.el-timeline {
    padding: 16px 0;
}
</style>