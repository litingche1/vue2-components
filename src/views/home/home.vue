<script>
export default {
  name: "home-table",
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    selectMenu(val) {
      console.log(val);
      // this.$router.push("/table");
    },
  },
};
</script>

<template>
  <section class="app-wrap">
    <article class="app-wrap-left">
      <h5 class="mb-2">工具组件库</h5>
      <el-menu
        default-active="/table/v-table"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="selectMenu"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <el-menu-item-group>
          <template slot="title">表格展示组件</template>
          <el-menu-item index="/table/v-table"
            >element普通表格组件</el-menu-item
          >
          <el-menu-item index="/table/virtualTable"
            >虚拟列表表格(umy-ui)
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="编辑表格">
          <el-menu-item index="/table/editTable">点击触发(umy-ui)</el-menu-item>
          <el-menu-item index="/table/manualTrigger"
            >手动触发(umy-ui)</el-menu-item
          >
          <el-menu-item index="/table/insertRow">插入行(umy-ui)</el-menu-item>
          <el-menu-item index="/table/inputBoxes"
            >输入框全部显示(umy-ui)</el-menu-item
          >
          <el-menu-item index="/table/tableValidation"
            >表格校验(umy-ui)</el-menu-item
          >
        </el-menu-item-group>
        <el-menu-item-group title="表格导出方法">
          <el-menu-item index="/table/tableExport"
            >纯前端导出element表格</el-menu-item
          >
        </el-menu-item-group>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </article>
    <article class="app-wrap-right">
      <router-view></router-view>
    </article>
  </section>
</template>

<style lang="less">
.app-wrap {
  display: flex;
  width: 100%;
  height: 100%;

  .app-wrap-left {
    min-width: 200px;
    background: #fff;
    margin-right: 10px;
    .mb-2 {
      text-align: center;
    }
  }

  .app-wrap-right {
    flex: 1;
    padding: 10px;
    flex-shrink: 0;
    max-width: calc(100% - 210px);
    box-sizing: border-box;
    background: #f3f3f3;
  }
}
</style>
