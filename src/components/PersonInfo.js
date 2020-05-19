import React from 'react';
import {Card} from 'react-bootstrap'
import '../App.scss'
import PersonModal from '../components/PersonModal'

//Should pass in personData prop
export default class PersonInfo extends React.Component {
    //state of the modal
    state = { modalShow: false }

    //toggles the modal show state
    showModal = e => {
        this.setState(
            { modalShow: !this.state.modalShow }
        )
    }

    render(){
        return(
            <div>
                {/** Modal */}
                <PersonModal show={this.state.modalShow} person={this.props.personData} closeModal={this.showModal}/>
                {/** The Actual Card */}
                <Card className='bg-primary text-white' onClick={e => {this.showModal()}}>
                    <Card.Body>
                        <Card.Title className='float-right'>{this.props.personData.name}</Card.Title>
                        <div className='rounded-pill bg-warning text-center text-dark' style={{'max-width': '100px'}}>
                            <p>{this.props.personData.matchPercent}</p>
                        </div>
                        <Card.Text>
                            Sleep Preference: {this.props.personData.sleepPref} <br/>
                            Waking Preference: {this.props.personData.wakingPref} <br/>
                            Visitor Preference: {this.props.personData.visitorPref} <br/>
                            Personal Space: {this.props.personData.personalSpace} <br/>
                            Messy Floor: {this.props.personData.messyFloor} <br/>
                            Sharing: {this.props.personData.sharing} <br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}