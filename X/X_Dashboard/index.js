import React from 'react';
import { Row, Col } from 'antd';
// import CardWrap from './../../components/CardWrap';
import AnalysisBorrow from './../../components/QCRMComponents/dashboard/analysis/AnalysisBorrow';
import AnalysisLend from './../../components/QCRMComponents/dashboard/analysis/AnalysisLend';
import AnalysisVisit from './../../components/QCRMComponents/dashboard/analysis/AnalysisVisit';
import AnalysisDif from './../../components/QCRMComponents/dashboard/analysis/AnalysisDif';

import LoginRecord from './../../components/QCRMComponents/dashboard/loginRecord';

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <h1>總覽</h1>  
                <div style={{marginBottom: '50px'}}>
                    <Row gutter={16}>
                        <Col span={6}>
                            {/* <CardWrap /> */}                            
                            <AnalysisBorrow /> 
                        </Col>

                        <Col span={6}>                    
                            <AnalysisLend />  
                        </Col>

                        <Col span={6}>
                            <AnalysisVisit />      
                        </Col>
                        
                        <Col span={6}>
                            <AnalysisDif />  
                        </Col>
                    </Row>
                </div>
                <div style={{marginBottom: '50px'}}>
                    <LoginRecord />
                </div>
            </div>
        )
    }
}
export default Dashboard