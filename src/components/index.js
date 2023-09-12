import Echarts from "./echarts/index";
import Table from "./table/index";
import VirtualTable from "./table/virtualTable";
const ComponentsConfig = [
  { name: "v-echart", component: Echarts },
  { name: "v-table", component: Table },
  { name: "v-virtual-table", component: VirtualTable },
];

function addGlobal() {
  return {
    install: function (Vue) {
      ComponentsConfig.forEach((config) => {
        Vue.component(config.name, config.component);
      });
    },
  };
}

const components = addGlobal();

export default components;
