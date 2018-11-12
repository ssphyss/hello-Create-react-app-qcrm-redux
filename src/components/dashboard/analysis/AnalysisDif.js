import React from 'react';
import { Card } from 'antd';
import { Tooltip } from 'antd';
import { Icon } from 'antd';
import { Skeleton } from 'antd';
import ChartDif from './../../UI/bizcharts/pie/ChartDif';

class AnalysisDif extends React.Component{

    state = {
        loading: true,
    }

    render(){
            
        return(
            <div>
                <Skeleton loading={this.state.loading} paragraph={true} active>
                    <Card
                        title={'差異分析'}
                        extra={
                            <div>
                                <a href="https://www.google.com.tw/">More</a>
                                <Tooltip title="prompt text">
                                    <span><Icon type="info-circle" theme="outlined" /> </span>                                
                                </Tooltip>
                            </div>
                        }
                        bordered={false}                     
                        // haverable={true}                    
                        loading={false}
                        type={'inner'}   // inner 變小   
                        // headStyle={{display:'none'}}
                        // style={{ height: '200px' }}                 
                    >       
                        <div className='chartTop'>
                            <ChartDif />
                            <h2 className='Chart__num'>111,111</h2> 
                        </div>
                        <div className='hr'/>           
                    </Card>
                </Skeleton>
            </div>
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

export default AnalysisDif