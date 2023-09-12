<template>
  <div class="example">
    <v-table
      :tableHead="tableHead"
      :tableData="tableData"
      :setTable="setTable"
      @row-click="rowClick"
      @header-click="headerClick"
      :span-method="objectSpanMethod"
    >
      <template v-slot:operating="slotData">
        <el-button size="mini" type="danger">删除</el-button>
        {{ slotData.data }}
        <el-button size="mini" type="success">编辑</el-button>
      </template>
    </v-table>
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
  </div>
</template>

<script>
export default {
  name: "tableExample",
  data() {
    return {
      tableHead: [
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
      tableData: [
        {
          amount2:
            "Mnimsds tasitdef clsltlzeb gmaofg rofjxnky imnivlm gonbvku tinzgn sisz ogrkykjpp yukne njwgtq auwfgg jisjhl ixgren.",
          amount7: 3773,
          amount8: "1979-09-23 23:21:15",
          id: "510000201708084109",
          name: "name",
          status: "published",
        },
        {
          amount2:
            "Mnimsds tasitdef clsltlzeb gmaofg rofjxnky imnivlm gonbvku tinzgn sisz ogrkykjpp yukne njwgtq auwfgg jisjhl ixgren.",
          amount7: 3773,
          amount8: "1979-09-23 23:21:15",
          id: "510000201708084109",
          name: "name",
          status: "published",
        },
        {
          amount2:
            "Mnimsds tasitdef clsltlzeb gmaofg rofjxnky imnivlm gonbvku tinzgn sisz ogrkykjpp yukne njwgtq auwfgg jisjhl ixgren.",
          amount7: 3773,
          amount8: "1979-09-23 23:21:15",
          id: "510000201708084109",
          name: "name",
          status: "published",
        },
        {
          amount2:
            "Mnimsds tasitdef clsltlzeb gmaofg rofjxnky imnivlm gonbvku tinzgn sisz ogrkykjpp yukne njwgtq auwfgg jisjhl ixgren.",
          amount7: 3773,
          amount8: "1979-09-23 23:21:15",
          id: "510000201708084109",
          name: "name",
          status: "published",
        },
      ],
      setTable: {
        border: true,
        // height: 300,
      },
      radio: 1,
      height: 400,
      rowHeight: 50,
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
    rowClick(row, column, event) {
      console.log(row, column, event);
    },
    headerClick(column, event) {
      console.log(column, event);
    },
    objectSpanMethod({ rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
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
  mounted() {
    this.setData(10000);
  },
};
</script>

<style scoped>
.example {
  width: 100%;
  height: 92%;
  /* background: #142d42; */
}
</style>
