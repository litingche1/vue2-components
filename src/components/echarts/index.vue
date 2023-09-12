<template>
  <div class="csg-sas-echarts"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "csg-sas-Echarts",
  props: {
    // echarts中的Option
    configOption: {
      type: Object,
      default: () => ({}),
    },
    event: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {};
  },
  methods: {
    /**
     * 加载echarts
     */
    renderChart() {
      this.chart.off("click");
      this.chart.setOption(this.configOption, true);
      if (this.event.show) {
        this.chart.on("click", (params) => {
          this.$emit(this.event.eventName, params);
        });
      }
      if (this.event.timeLine) {
        //监听时间切换事件
        this.chart.off("timelinechanged");
        this.chart.on("timelinechanged", (params) => {
          this.$emit(this.event.eventName, params);
        });
      }
    },
    /**
     * 当窗口缩放时，echart动态调整自身大小
     */
    handleWindowResize() {
      if (!this.chart) return;
      this.chart.resize();
    },
    //设置echart的高度
    setHeight(value) {
      this.chart.getDom().style.height = `${value}px`;
      this.chart.resize();
    },
    //导出联动的图表图片
    getImageSrc() {
      return this.chart.getConnectedDataURL({ type: "png" });
    },
  },
  computed: {
    //this.$el---它指的是当前组件的的元素
    chart() {
      return echarts.init(this.$el);
    },
  },
  watch: {
    configOption: {
      handler: function () {
        this.renderChart();
      },
      deep: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.renderChart();
    });
    window.addEventListener("resize", this.handleWindowResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
};
</script>

<style scoped>
.csg-sas-echarts {
  width: 100%;
  height: 100%;
}
</style>
