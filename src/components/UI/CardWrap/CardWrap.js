import React from 'react';
import { Card } from 'antd';
import { Tooltip } from 'antd';
import { Icon } from 'antd';
import { Avatar } from 'antd';
import './CardWrap.scss'

export default class CardWrap extends React.Component{
    render(){
        // const { Meta } = Card;
        const styleHead = {
            backgroundColor: 'rgb(229, 255, 31)'
        }
        const styleBody = {
            pddding: '30px',
            backgroundColor: 'rgba(4, 64, 62, 0.1)'
        }
        const styleMeta = {
            pddding: '30px',
            backgroundColor: '#fff'
        }
        return(
            <Card
                // loading={true}
                extra={
                    <div>
                        {/* <a href="#">More</a> */}
                        <Tooltip title="提示字">
                            {/* <span>Tooltip will show when mouse enter.</span> */}
                            <Icon type="info-circle" theme="outlined" />
                        </Tooltip>
                    </div>
                }
                bordered={false} 
                style={{ width: 300 }}
                styleHead={styleHead}
                styleBody={styleBody}
                haverable={true}                
                loading={false}
                type={'inner'}   // inner 變小
                actions={
                    [<Tooltip>
                      <Icon type="info-circle-o" /> 說明事項
                    </Tooltip>]
                }
                // cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            >
                <Card.Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="卡片meta-Card title"
                    description="卡片meta-This is the description"     
                    style={styleMeta}               
                >    
                </Card.Meta>
            </Card>
        )
        
    }
}