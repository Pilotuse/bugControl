<template>
  <div id="editor">
    <mavon-editor style="height: 100%" :toolbars="toolbars" v-model="value" @save="saveinfo"></mavon-editor>
  </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import { mapMutations } from 'vuex'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'editor',
  components: {
    mavonEditor
  },
  data() {
    return {
      value: '',
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: false, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
    }
  },
  methods: {
    ...mapMutations(["changeMarkdownValue"]),
    saveinfo() {
      this.$message.success({ message: '详情修改成功！', customClass: 'message-box' });
      this.$emit("markdownsave")
    }
  },
  watch: {
    value(newValue) {
      this.changeMarkdownValue(newValue)
    }
  }
}
</script>
<style>
#editor {
  margin: auto;
  width: 100%;
  height: 580px;
  box-shadow: none;
  border: 1px solid #dddddd;
}

#editor > div {
  box-shadow: none;
}

.v-note-wrapper .v-note-op .v-right-item {
  max-width: 26% !important;
}

.message-box {
  margin-top: 40px !important;
}
</style>