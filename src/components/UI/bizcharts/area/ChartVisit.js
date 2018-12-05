import React from 'react';
import {Chart, Geom, Tooltip} from "bizcharts";
import './../index.scss'

// 造訪人次

 const data = [
        { day: '1', value: 15468 },
        { day: '2', value: 16100 },
        { day: '3', value: 15900 },
        { day: '4', value: 17409 },
        { day: '5', value: 17000 },
        { day: '6', value: 31056 },
        { day: '7', value: 31982 },
        { day: '8', value: 32040 },
        { day: '9', value: 33233 },
        { day: '10', value: 17000 },
        { day: '11', value: 31056 },
        { day: '12', value: 31982 },
        { day: '13', value: 32040 },
        { day: '14', value: 33233 }
];

const cols={
    value: {
        min: 10000
    },
    day: {
        range: [ 0 , 1 ]
    }
};

export default class ChartBorrow extends React.Component{
    render(){
        return(
            <div>
                {/* <h2 className='Chart__num'>111,111</h2>                 */}
                <Chart height={100} padding={0} data={data} scale={cols} forceFit>
                    {/* <Axis name="year" /> */}
                    {/* <Axis name="value" label={{
                        formatter: val => {
                            return (val / 10000).toFixed(1) + 'k';
                        }
                    }} /> */}
                    <Tooltip crosshairs={{type:'line'}}/>
                    <Geom type="area" position="day*value" />
                    <Geom type="line" position="day*value" size={2} />
                </Chart>
            </div>
        )
    }
}