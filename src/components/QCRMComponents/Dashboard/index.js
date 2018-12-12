import React from 'react';
import { Row, Col } from 'antd';
// import CardWrap from './../../components/CardWrap';
import AnalysisBorrow from './Analysis/AnalysisBorrow';
import AnalysisLend from './Analysis/AnalysisLend';
import AnalysisVisit from './Analysis/AnalysisVisit';
import AnalysisDif from './Analysis/AnalysisDif';

import LoginRecord from './LoginRecord';

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <h1>總覽</h1>  
                <div style={{marginBottom: '50px'}}>
                    <Row gutter={16}>
                        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                            {/* <CardWrap /> */}                            
                            <AnalysisBorrow /> 
                        </Col>

                        <Col xs={24} sm={12} md={12} lg={6} xl={6}>                    
                            <AnalysisLend />  
                        </Col>

                        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                            <AnalysisVisit />      
                        </Col>
                        
                        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
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