<template>
  <!-- The AG Grid component -->
  <ag-grid-vue
      style="height: 500px"
      class="ag-theme-quartz"
      :rowData="rowData"
      :columnDefs="colDefs"
  >
  </ag-grid-vue>
</template>

<script>
import { ref } from 'vue';
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { AgGridVue } from "ag-grid-vue3"; // Vue Grid Logic

import "ag-grid-enterprise";

export default {
  name: "App",
  components: {
    AgGridVue,
  },
  setup() {

    // Row Data: The data to be displayed.
    const rowData = ref([
      {make: 'Toyota', model: 'Celica', price: 35000},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxster', price: 72000}
    ]);

    // Column Definitions: Defines & controls grid columns.
    const colDefs = ref([
      {field: 'make'},
      {field: 'model'},
      {field: 'price'}
    ]);

    const statusBar = ref({
      statusPanels: [
        {
          statusPanel: 'agTotalAndFilteredRowCountComponent',
          align: 'left',
        }
      ]
    });

    return {
      rowData,
      colDefs,
      statusBar
    };
  },
};
</script>
