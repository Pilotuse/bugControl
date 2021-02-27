<template>
    <div class="container">
        <div class="overview clearfix">
            <div class="left photo">
                <img src="https://img2.woyaogexing.com/2019/07/24/1698bd4063cc4e97aae11a291419fc68!400x400.jpeg" alt="">
            </div>
            <div class="right">
                <div> {{tabledata[0].cnname}} <span class="post">{{tabledata[0].group}}小组</span></div>
                <div class="post-option">
                    <el-tooltip class="item" effect="dark" content="微聊发起沟通" placement="top">
                        <i class="iconfont icon-island"></i>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="发送邮件" placement="top">
                        <i class="iconfont icon-fasong"></i>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="与他合作的需求" placement="top">
                        <i class="iconfont icon-jiedian"></i>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="添加此人到常用联系人" placement="top">
                        <i class="iconfont icon-paperclip" slot="reference"></i>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="使用微信扫码添加到通讯录" placement="top">
                        <el-popover placement="bottom" width="150" trigger="click">
                            <div class="qrcode" ref="qrCodeUrl" width="150" height="150"></div>
                            <i class="iconfont icon-tongxunlu1" slot="reference" @click="showQRcode"></i>
                        </el-popover>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="匿名举报此人" placement="top">
                        <i class="iconfont icon-jubao"></i>
                    </el-tooltip>
                </div>
            </div>
        </div>
        <div class="personnel">
            <el-table :data="inforsValue" style="width: 100%" :show-header="false">
                <el-table-column prop="title" width="80">
                </el-table-column>
                <el-table-column prop="value">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>



<script>

import QRCode from 'qrcodejs2'
export default {
    props: ["tabledata"],
    data() {
        return {
            visible: false,
            tableData: [],
            currentUserInfo: []
        }
    },
    computed: {
        inforsValue() {
            let obj = [
                { title: "花名", value: "" },
                { title: "生日", value: "" },
                { title: "星座", value: "" },
                { title: "邮箱", value: "" },
                { title: "电话", value: "" },
                { title: "工龄", value: "" },
                { title: "家乡", value: "" },
                { title: "领导", value: "" },
                { title: "状态", value: "" },
                { title: "工号", value: "" },
                { title: "工位", value: "" },
                { title: "项目", value: "" },
                { title: "注册时间", value: "" }
            ]

            this.tabledata.map(el => Object.entries(el))[0].map(el => {
                obj.forEach(item => item.title == this.formartKeys(el[0]) ? item["value"] = el[1] : '')
            })

            obj.filter(el => {
                if (el.title == "星座") {
                    let birth = obj.filter(el => el.title == "生日")[0].value
                    el.value = birth ? this.getHoroscope(new Date(birth)) : ''
                }
            })

            obj.filter(el => {
                if (el.title == "工龄") {
                    let seniority = obj.filter(el => el.title == "注册时间")[0].value
                    el.value = this.getDaysBetween(new Date(seniority), new Date())
                }
            })
            return obj
        }
    },
    methods: {
        formartKeys(keysName) {
            switch (keysName) {
                case 'cnname':
                    return '姓名';
                case 'address':
                    return '家乡';
                case 'birthday':
                    return '生日';
                case 'createDate':
                    return '注册时间';
                case 'group':
                    return '小组';
                case 'jobNum':
                    return '工号';
                case 'leader':
                    return '领导';
                case 'nickname':
                    return '花名';
                case 'project':
                    return '项目';
                case 'station':
                    return '工位';
                case 'status':
                    return '状态';
                case 'tellphone':
                    return '电话';
                case 'username':
                    return '邮箱';
                default:
                    break;
            }
        },
        getHoroscope(date) {
            let constellation = ['摩羯座', '水瓶座', '双鱼座', '白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座']
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let startMonth = month - (day - 14 < '865778999988'.charAt(month));
            return constellation[startMonth]
        },
        getDaysBetween(dateString1, dateString2) {
            var startDate = Date.parse(dateString1);
            var endDate = Date.parse(dateString2);
            return `${Math.ceil((endDate - startDate) / (1 * 24 * 60 * 60 * 1000))}.d `;
        },
        showQRcode() {
            this.creatQrCode();
        },
        creatQrCode() {
            this.$refs.qrCodeUrl.innerHTML = ""
            let [{ cnname, project, address, tellphone, username, birthday }] = this.tabledata
            new QRCode(this.$refs.qrCodeUrl, {
                text: `
                  BEGIN:VCARD
                  N:${cnname}
                  TITLE:${project}
                  ADR;HOME:;;${address};;;;
                  TEL:${tellphone}
                  EMAIL:${username}
                  BDAY:${birthday}
                  END:VCARD`,  
                width: 150,
                height: 150,
                colorDark: '#000',
                colorLight: '#fff',
                correctLevel: QRCode.CorrectLevel.L
            })
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    padding: 60px 20px 20px 30px;
}

.overview .left {
    float: left;
    width: 100px;
    box-sizing: border-box;
}

.overview .left img {
    width: 80px;
    height: 80px;
    background: #000;
    border-radius: 50%;
}

.overview .right {
    float: right;
    padding-left: 20px;
    width: 250px;
    box-sizing: border-box;
}

.overview .right div {
    margin-top: 12px;
    font-size: 22px;
}

.post {
    display: inline-block;
    padding: 2px 4px;
    background: #ccc;
    color: #fff;
    font-size: 12px;
    margin-left: 10px;
}

.post-option {
    font-size: 16px;
    color: #95afc0;
}

.post-option i {
    margin-right: 20px;
    font-size: 18px;
    cursor: pointer;
}

.post-option i:hover {
    color: #48a2ff;
}

.personnel {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 100%;
}

.personnel div {
    width: 120px;
    margin-top: 20px;
}

.qrcode {
    display: inline-block;
    img {
        width: 132px;
        height: 132px;
        background-color: #fff; //设置白色背景色
        padding: 6px; // 利用padding的特性，挤出白边
        box-sizing: border-box;
    }
}
</style>