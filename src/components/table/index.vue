<template>
  <el-table
    class="admin-table-wrapper"
    :data="tableData"
    :border="setTable.border ? setTable.border : true"
    :height="setTable.height ? setTable.height : '100%'"
    :style="{ width: setTable.width ? setTable.width : '100%' }"
    v-bind="$attrs"
    v-on="$listeners"
    v-loading="ifLoading"
  >
    <slot></slot>
    <template v-for="(item, idx) in tableHead">
      <el-table-column
        v-if="item.isSlot === 'slot'"
        :key="tableKey + idx + item?.prop"
        :prop="item.prop"
        :label="item.name"
        :width="item.width"
        :fixed="item.fixed"
        :min-width="item.minWidth"
        align="center"
        :label-class-name="`tableColumn tableColumn-${idx * 1 + 1}`"
        :index="idx"
        :sortable="item.sortable"
      >
        <template v-slot:default="scope">
          <slot
            :name="item.slotName"
            :data="scope.row"
            :index="scope.$index"
          ></slot>
        </template>
      </el-table-column>

      <el-table-column
        v-else
        :key="tableKey + idx + item?.prop"
        :prop="item.prop"
        :label="item.name"
        :sortable="item.sortable"
        :fixed="item.fixed"
        :width="item.width ? item.width : ''"
        :min-width="item.minWidth"
        align="center"
        :label-class-name="`tableColumn tableColumn-${idx * 1 + 1}`"
        :index="idx"
      >
        <template v-if="item.child && item.child.length > 0">
          <template v-for="(items, index) in item.child">
            <el-table-column
              v-if="items.isSlot === 'slot'"
              :key="tableKey + index + items.prop"
              :prop="items.prop"
              :label="items.name"
              :sortable="item.sortable"
              :width="items.width ? items.width : ''"
              :min-width="items.minWidth"
              align="center"
              :index="index"
            >
              <template v-slot:default="scope">
                <slot :name="items.slotName" :data="scope.row"></slot>
              </template>
            </el-table-column>
            <el-table-column
              v-else
              :key="tableKey + index + items.prop"
              :prop="items.prop"
              :sortable="item.sortable"
              :label="items.name"
              :width="items.width ? items.width : ''"
              :min-width="items.minWidth"
              align="center"
              :index="index"
            >
              <template v-if="items.child && items.child.length > 0">
                <template v-for="(child, index) in items.child">
                  <el-table-column
                    :key="tableKey + index + child.prop"
                    :prop="child.prop"
                    :label="child.name"
                    :sortable="item.sortable"
                    :width="child.width ? child.width : ''"
                    :min-width="child.minWidth"
                    align="center"
                    :index="index"
                  >
                  </el-table-column>
                </template>
              </template>
            </el-table-column>
          </template>
        </template>
      </el-table-column>
    </template>
    <div slot="append">
      <slot name="appends"></slot>
    </div>
  </el-table>
</template>

<script>
export default {
  name: "admin-table-wrapper",
  props: {
    tableHead: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    setTable: {
      type: Object,
      default: () => ({}),
    },
    tableKey: {
      type: [String, Number],
      default: "",
    },
    ifLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less">
.admin-table-wrapper {
  height: 100%;
  width: 100%;
  .el-table td {
    padding: 12px 0;
    font-size: 14px;
  }

  .el-table--scrollable-y .el-table__body-wrapper {
    overflow-y: auto;
  }

  .el-table__footer-wrapper,
  .el-table__header-wrapper {
    overflow: hidden;
    // border-bottom: 1px solid #CECECE;
  }

  .el-table__footer-wrapper tbody td,
  .el-table__header-wrapper tbody td {
    background-color: #ffffff;
    color: #333333;
  }

  .el-table {
    //overflow:auto;
    background-color: transparent;
    color: #333333;
  }

  .el-table thead.is-group th {
    background: #f1f1f1;
    color: #333333;
  }

  .el-table th {
    background: #f1f1f1;
  }

  .el-table tr {
    background-color: #fff;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td.el-table__cell {
    background-color: #f5f7fa;
  }
  .el-table-column--selection .cell {
    padding-right: 10px;
  }
  .el-table--border th.gutter:last-of-type {
    border-bottom: 1px solid #cecece;
    /*border-bottom-width: 1px;*/
  }

  .el-table th > .cell {
    //color: #333333 !important;
    color: #333333;
  }

  .el-table--border td,
  .el-table--border th,
  .el-table__body-wrapper
    .el-table--border.is-scrolling-left
    ~ .el-table__fixed {
    border-right: 1px solid #cecece !important;
    border-bottom: 1px solid #cecece !important;
  }

  .el-table td,
  .el-table th.is-leaf {
    border-bottom: 1px solid #cecece !important;
  }

  .el-table--border,
  .el-table--group {
    border: 1px solid #cecece !important;
    border-bottom: 1px solid #cecece !important;
  }

  .el-table thead {
    color: #333333;
    font-weight: 500;
  }

  .el-table__header {
    border-right: 1px solid #cecece !important;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #096eda !important;
    border-color: #096eda !important;
  }

  .el-table__body tr.current-row > td {
    background-color: #ecf5ff !important;
  }

  .el-table th .cell {
    // height: 35px;
    // line-height: 35px;
  }
}
</style>
