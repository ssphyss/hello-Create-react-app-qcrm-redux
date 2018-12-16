import React from 'react';
import { Card } from 'antd';
import { Tooltip } from 'antd';
import { Icon } from 'antd';
import { Skeleton } from 'antd';
import ChartLend from './../../../UI/bizcharts/bar/ChartLend';
import './../../../UI/CardWrap/CardWrap.scss'

class AnalysisLend extends React.Component{

    state = {
        loading: true,
    }

    render(){
        return(
            <Skeleton loading={this.state.loading} paragraph={true} active>
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
            </Skeleton>
        )
    }
    
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                loading: false
            })   
        }, 500);
    }
}
export default AnalysisLend