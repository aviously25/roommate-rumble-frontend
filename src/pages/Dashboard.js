import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import '../App.scss'
import PersonInfo from '../components/PersonInfo'

//The Demo User's data
const DemoUser = {
    name: 'John Smith'
}

//Other demo person with the data
const DemoPerson = {
    matchPercent: '99.23%',
    name: 'Joe Mama',
    email: 'joemama3241@gmail.com',
    sleepPref: '3am',
    wakingPref: 'Just in Time',
    visitorPref: 'Only a few',
    personalSpace: 'Mostly Neat',
    messyFloor: '14%',
    sharing: 'All my stuff is yours!',
    bio: 'we chillin',
    timeInRoom: 'I do be a roomrat doe',
    doingInRoom: 'gamesgamesgames'
}
//Array filled with multiple demo people
const SampleDataArray = [DemoPerson, DemoPerson, DemoPerson, DemoPerson, DemoPerson, DemoPerson, DemoPerson]

//default props for person info
PersonInfo.defaultProps = {
    personData: { //Same info as Demo Person
        matchPercent: '99.23%',
        name: 'Joe Mama',
        email: 'joemama3241@gmail.com',
        sleepPref: '3am',
        wakingPref: 'Just in Time',
        visitorPref: 'Only a few',
        personalSpace: 'Mostly Neat',
        messyFloor: '14%',
        sharing: 'All my stuff is yours!',
        bio: 'we chillin',
        timeInRoom: 'I do be a roomrat doe',
        doingInRoom: 'gamesgamesgames'
    }
 }

function Dashboard() {
    return (
    <div>
        {/**Header Content*/}
        <Container fluid>
            <Row>
                <Col>
                    <Row>
                        <Col>matchTAMS</Col>
                    </Row>
                    <Row>
                        <Col><h1 className='display-5'>{DemoUser.name}</h1></Col>
                    </Row>
                </Col>
                <Col>
                    <Button variant="outline-primary" size='lg' className='float-right'>
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                </Col>
            </Row>
        </Container>

        {/** Main Dashboard Content*/}
        <Container fluid>
            <Row>
                {SampleDataArray.map((person, i) => {
                    return(
                        <Col md='4' s='12' className='mt-3'>
                            <PersonInfo personData={person} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </div>)
}

export default Dashboard;