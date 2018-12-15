import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;

    span {
        font-size: 24px;
        display: block;
        line-height: 30px;
    }
`
const LightText = styled.div`
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    margin-top: 54px;
`
const CallButton = styled.button`
    display: block;
    width: 247px;
    height: 67px;
    background-color: #ffa14b;
    border-radius: 30px;
    border: none;
    text-align: center;
    line-height: 67px;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    margin-top: 32px;
`

class Main extends React.Component {
    render () {
        return (
            <Row>
                <Col lg={5}>
                    <Repair>
                        Качественный ремонт 
                        <span>Iphone за 5 минут и гарантия 1 год</span>
                    </Repair>
                    <LightText>
                        Оставьте заявку на бесплатную диагностику без очереди, и получите защитное стекло, стоимостью 100 рублей, с установкой в подарок!
                    </LightText>
                    <CallButton>
                        Отправить заявку!
                    </CallButton>
                </Col>
                <Col lg={6} lgOffset={1}>
                    
                </Col>
            </Row>
        );
    }
}
export default Main;