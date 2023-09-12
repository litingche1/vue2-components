<script>
export default {
  name: "table-index",
  data() {
    return {
      tableHead: [
        {
          name: "省区",
          prop: "province",
        },
        {
          name: "地市",
          prop: "city",
        },
        {
          name: "延迟次数(次)",
          prop: "num",
        },
      ],
      tableData: [
        //10条数据
        {
          province: "北京",
          city: "北京",
          num: 1,
        },
        {
          province: "北京",
          city: "北京",
          num: 1,
        },
        {
          province: "北京",
          city: "北京",
          num: 1,
        },
      ],
    };
  },
};
</script>

<template>
  <section class="v-table-con">
    <h1>表格组件</h1>
    <article class="table-con-box">
      <v-table class="table-box" :tableData="tableData" :tableHead="tableHead">
      </v-table>
    </article>
  </section>
</template>

<style lang="less">
.v-table-con {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
  }

  .table-con-box {
    flex: 1;
    position: relative;
    .table-box {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
