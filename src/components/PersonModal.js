import React from 'react';
import {Container, Row, Col, Modal} from 'react-bootstrap'
import '../App.scss'

//Person Information Modal
export default class PersonModal extends React.Component {
    closeModal = e => {
        this.props.closeModal && this.props.closeModal(e)
    }

    render(){
        if(!this.props.show){
            return null
        }
        return(
            <Modal show={this.props.show} onHide={this.closeModal} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.person.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid>
                        <Row>
                            <Col>
                                <Row className="mb-3">
                                    <div className='rounded-pill bg-warning text-center text-dark' style={{'width': '100px'}}>
                                        <p className='my-auto'>{this.props.person.matchPercent}</p>
                                    </div>
                                </Row>
                                <Row className="mb-3">
                                    Sleep Preference: {this.props.person.sleepPref} <br/>
                                    Waking Preference: {this.props.person.wakingPref} <br/>
                                    Visitor Preference: {this.props.person.visitorPref} <br/>
                                    Personal Space: {this.props.person.personalSpace} <br/>
                                    Messy Floor: {this.props.person.messyFloor} <br/>
                                    Sharing: {this.props.person.sharing} <br/>
                                </Row>
                                <Row>
                                    <strong>Time Spent in Room: </strong> &nbsp;
                                    <p>{this.props.person.timeInRoom}</p>
                                </Row>
                                <Row>
                                    <strong>What Doing in Room: </strong> &nbsp;
                                    <p>{this.props.person.doingInRoom}</p>
                                </Row>
                            </Col>
                            <Col>
                                <Row className='justify-content-center mb-3'>
                                    <h3 className='text-center' style={{'width': '100%'}}>{this.props.person.name}</h3>
                                    <small className='text-muted'>{this.props.person.email}</small>
                                </Row>
                                <Row className='justify-content-center'>
                                    <strong>Bio:</strong> <br /> &nbsp;
                                    <p>{this.props.person.bio}</p>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        )
    }
}