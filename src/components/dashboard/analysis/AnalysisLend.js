import React from 'react';
import { Card } from 'antd';
import { Tooltip } from 'antd';
import { Icon } from 'antd';
import ChartLend from './../../UI/bizcharts/bar/ChartLend';
import './../../CardWrap.scss'

class AnalysisLend extends React.Component{
    render(){
        return(
            <Card
                title={'投資筆數'}
                extra={
                    <div>
                        <a href="/">More</a>
                        <Tooltip title="提示字">
                            <span><Icon type="info-circle" theme="outlined" /> </span>                                
                        </Tooltip>
                    </div>
                }
                bordered={false}  
                loading={false}
                type={'inner'}   // inner 變小 
                // headStyle={{display:'none'}}
                // style={{ height: '200px' }} 
            >                
                <div className='chartTop'>                        
                    <ChartLend />
                    <h2 className='Chart__num'>111,111</h2> 
                </div>
                <div className='hr'/>
            </Card>
        )
    }
}
export default AnalysisLend