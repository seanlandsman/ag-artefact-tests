<template>
  <!-- The AG Charts component with chartsOptions as an attribute -->
  <ag-charts-vue :options="options"> </ag-charts-vue>
</template>

<script>
import { ref } from 'vue';

import { AgChartsVue } from 'ag-charts-vue';

import "ag-charts-enterprise";

// Core Charts Logic
export default {
  name: 'App',
  components: {
    AgChartsVue,
  },
  setup() {
    // Chart Options
    const options = ref({
      data: [
        { department: 'Finance', low: 75, high: 110 },
        { department: 'Engineering', low: 75, high: 125 },
        { department: 'Marketing', low: 55, high: 75 },
        { department: 'Sales', low: 60, high: 85 },
        { department: 'Legal', low: 70, high: 100 },
        { department: 'Operations', low: 55, high: 80 },
        { department: 'Research', low: 60, high: 80 },
        { department: 'Development', low: 70, high: 90 },
      ],
      title: {
        text: 'Salary Ranges By Department',
      },
      subtitle: {
        text: 'Low and High Salary Brackets Across Various Departments (in thousands)',
      },
      series: [
        {
          type: 'range-bar',
          xKey: 'department',
          yLowKey: 'low',
          yHighKey: 'high',
        },
      ],
    });
    return {
      options,
    };
  },
};
</script>
