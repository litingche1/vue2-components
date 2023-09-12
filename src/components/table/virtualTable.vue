<template>
  <u-table use-virtual border v-bind="$attrs">
    <slot></slot>
    <template v-for="item in tableHead">
      <u-table-column
        v-if="item.isSlot === 'slot'"
        :key="item.id"
        :resizable="item.resizable"
        :show-overflow-tooltip="item.showOverflow"
        :prop="item.prop"
        :label="item.name"
        :fixed="item.fixed"
        :width="item.width"
        align="center"
      >
        <template v-slot:default="scope">
          <slot :name="item.slotName" :data="scope.row"></slot>
        </template>
        <template v-if="item.child && item.child.length > 0">
          <u-table-column
            v-for="items in item.child"
            :key="items.id"
            :resizable="items.resizable"
            :show-overflow-tooltip="items.showOverflow"
            :prop="items.prop"
            :label="items.name"
            :fixed="items.fixed"
            :width="items.width"
            align="center"
          />
        </template>
      </u-table-column>
      <u-table-column
        v-else
        :key="item.id"
        :resizable="item.resizable"
        :show-overflow-tooltip="item.showOverflow"
        :prop="item.prop"
        :label="item.name"
        :fixed="item.fixed"
        :width="item.width"
        align="center"
      >
        <template v-if="item.child && item.child.length > 0">
          <u-table-column
            v-for="items in item.child"
            :key="items.id"
            :resizable="items.resizable"
            :show-overflow-tooltip="items.showOverflow"
            :prop="items.prop"
            :label="items.name"
            :fixed="items.fixed"
            :width="items.width"
            align="center"
          />
        </template>
      </u-table-column>
    </template>
  </u-table>
</template>

<script>
export default {
  name: "virtualTable",
  props: {
    tableHead: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
