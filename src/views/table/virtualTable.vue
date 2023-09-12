<script>
export default {
  name: "virtualTable",
  data() {
    return {
      rowHeight: 50,
      height: 400,
      columns: [
        {
          prop: "id",
          name: "ID",
          width: "180",
        },
        {
          prop: "name",
          name: "姓名",
          width: "100",
        },
        {
          prop: "amount1",
          name: "数值 1（元）",
          child: [
            {
              prop: "amount2",
              name: "数值 4（元）",
            },
            {
              prop: "amount12",
              name: "数值 5（元）",
            },
          ],
        },
        {
          prop: "amount7",
          name: "数值 2（元）",
        },
        {
          prop: "amount8",
          name: "数值 3（元）",
        },
        {
          name: "操作",
          isSlot: "slot",
          slotName: "operating",
        },
      ],
    };
  },
  methods: {
    tableScroll({ scrollTop, scrollLeft, table, judgeFlse }) {
      // {scrollTop， scrollLeft, table, judgeFlse: 这个参数返回一个boolean值，为true则代表表格滚动到了底部了，false没有滚动到底部，必须开起大数据渲染模式才能有值哦}, event
      console.log(scrollTop, scrollLeft, table, judgeFlse);
    },
    setData(num) {
      let data = Array.from({ length: num }, (_, idx) => ({
        id: idx + 1,
        date: "2016-05-03",
        name: 1,
        amount7: "欢迎使用u-table",
        amount8: "欢迎使用u-table",
        amount2: idx,
        amount12: idx,
        address: 1 + idx,
      }));
      this.$refs.plTable.$children[0].reloadData(data);
    },
  },
};
</script>

<template>
  <section class="virtualTable-wrap">
    <v-virtual-table
      :tableHead="columns"
      ref="plTable"
      :max-height="height"
      @table-body-scroll="tableScroll"
      :row-height="rowHeight"
    >
      <u-table-column type="index" width="100" fixed align="center" />
      <template v-slot:operating="slotData">
        <el-button size="mini" type="danger">删除</el-button>
        {{ slotData.data }}
        <el-button size="mini" type="success">编辑</el-button>
      </template>
    </v-virtual-table>
  </section>
</template>

<style scoped></style>
