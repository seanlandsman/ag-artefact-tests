import { AgChart, AgChartOptions } from 'ag-charts-community';

class Chart {
    private options: AgChartOptions = <AgChartOptions>{};

    constructor() {
        this.options = <AgChartOptions>{
            container: document.getElementById('myChart'),
            autoSize: true,
            title: {
                text: 'Average expenditure on coffee',
            },
            subtitle: {
                text: 'per person per week in Krakozhia',
            },
            data: [
                {
                    year: '2015',
                    spending: 35,
                },
                {
                    year: '2016',
                    spending: 40,
                },
                {
                    year: '2017',
                    spending: 43,
                },
                {
                    year: '2018',
                    spending: 44,
                },
            ],
            series: [
                {
                    xKey: 'year',
                    yKey: 'spending',
                },
            ],
        }

        AgChart.create(this.options)
    }
}

new Chart();
