import React, { useState } from 'react';
import { AgChartsReact, AgChartProps } from 'ag-charts-react';
import './App.scss';

import "ag-charts-enterprise";

const data = [
  {
    beverage: 'Coffee',
    Q1: 700,
    Q2: 600,
    Q3: 560,
    Q4: 450,
  },
  {
    beverage: 'Tea',
    Q1: 520,
    Q2: 450,
    Q3: 380,
    Q4: 270,
  },
  {
    beverage: 'Milk',
    Q1: 200,
    Q2: 190,
    Q3: 170,
    Q4: 180,
  },
];

const options = {
  data,
  title: { text: 'Beverage Expenses' },
  subtitle: { text: 'per quarter' },
  footnote: { text: 'Based on a sample size of 200 respondents' },
  padding: {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40,
  },
  series: [
    { type: 'bar', xKey: 'beverage', yKey: 'Q1', stacked: true },
    { type: 'bar', xKey: 'beverage', yKey: 'Q2', stacked: true },
    { type: 'bar', xKey: 'beverage', yKey: 'Q3', stacked: true },
    { type: 'bar', xKey: 'beverage', yKey: 'Q4', stacked: true },
  ],
  legend: { spacing: 40 },
} as AgChartProps['options'];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello Vite + React!</h1>
      <AgChartsReact options={options} />
    </div>
  );
}

export default App;
