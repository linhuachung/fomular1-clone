import {useEffect} from 'react';
import {Bar} from "react-chartjs-2";
import {BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip,} from "chart.js";

Chart.register(LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend );
function ChartComponents() {
    useEffect(() => {
        handleGetDataChart()
    }, [])
    const handleGetDataChart = () => {
        const dataSelector = document.querySelectorAll("tr")
        const arrDataList: any[] = [];
        const key: string[] = [];
        dataSelector?.forEach((tr, index) => {
            if (index === 0) {
                const valueSelector = tr.querySelectorAll('th')

                valueSelector.forEach(item => {
                    key.push(item.innerText)
                })
            } else {
                const valueSelector = tr.querySelectorAll('td')
                arrDataList.push({});
                valueSelector.forEach((td, indexRow) => {
                    const label: string = key[indexRow] ?? 'default'

                    arrDataList[index - 1][label] = td.innerText
                })

            }

        })
        const dataChart = arrDataList.map(x => x.PTS || x.LAPS )
        const labelChart = arrDataList.map(x => x.DRIVER || x.WINNER || x.TEAM || x.PRIX || x.DATE)
        const data =  {
            labels: labelChart,
            datasets: [
                {
                    label: 'Bar Chart',
                    data: dataChart,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)',
                        'rgba(405, 202, 145, 0.2)',
                        'rgba(231, 364, 134, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                },
            ],
        }
        const options = {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
        }
        return <Bar data={data} options={options}/>

    }

    return handleGetDataChart()
}

export default ChartComponents
