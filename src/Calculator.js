import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CalculatorOperator from './Components/CalculatorOperator';
import Keypad from './Components/Keypad';
import Display from './Components/Display';
import './App.css';
class Calculator extends Component {
    state = {
        equation: "",
        answer: "",
        value: 0,
        error: ""
    };

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(value) {
        this.setState(() => {
            return CalculatorOperator(this.state, value);
        });
    }
    render() {
        return (
            <>
                <Container fluid >

                    <Row className="justify-content-evenly mt-3">
                        <Col md="4 ">
                            <div className="calculator  ">
                                <Display equation={this.state.equation} answer={this.state.answer} error={this.state.error} />
                                <Keypad click={this.handleClick} />
                            </div>
                        </Col>
                    </Row>

                </Container>

            </>
        )
    }
}

export default Calculator
