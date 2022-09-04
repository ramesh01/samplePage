import { Tab } from "bootstrap";
import { useState } from "react";
import { Col, Form, Row, Tabs } from "react-bootstrap";
import { StyledApplicantTabs } from "./styled/ApplicantTabs.styled";
export const ApplicantTabs = (props) => {
    const { data } = props;
    const { general } = data;
    const { birth } = general;
    const [birthData, setBirthData] = useState(birth);
    const changeHandler = () => {

    }
    return (
        <StyledApplicantTabs>
            <hr />
            <Tabs defaultActiveKey="general"
                id="fill-tab-example" className="mt-2 mb-3" fill>
                <Tab eventKey="general" title="General">
                    <Row>
                        <Col>
                            <p className="tab-form-header"><b>Birth</b></p>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>NAME</Form.Label>
                                    <Form.Control type="text" placeholder="Name" 
                                    value={data.name} 
                                    onChange={changeHandler}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>GENDER</Form.Label>
                                    <Form.Control type="text" placeholder="Gender"
                                    value={birthData.gender} 
                                    onChange={changeHandler} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>DATE OF BIRTH</Form.Label>
                                    <Form.Control type="text" placeholder="DOB"
                                    value={birthData.dob} 
                                    onChange={changeHandler} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>BIRTH PLACE</Form.Label>
                                    <Form.Control type="text" placeholder="birth place"
                                    value={birthData.birthPlace} 
                                    onChange={changeHandler} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>ETHNICITY</Form.Label>
                                    <Form.Control type="text" placeholder="ethnicity" 
                                    value={birthData.citizenship} 
                                    onChange={changeHandler} />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            <p className="tab-form-header"><b>Contact</b></p>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>EMAIL</Form.Label>
                                    <Form.Control type="text" placeholder="email address" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>PHONE</Form.Label>
                                    <Form.Control type="text" placeholder="phone number" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            <p className="tab-form-header"><b>Additional</b></p>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>MARITAL STATUS</Form.Label>
                                    <Form.Control type="text" placeholder="marital status" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>I HAVE APPLIED FOR FEDERAL STUDENT AID</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>

                </Tab>
                <Tab eventKey="academic" title="Academic">
                    <p>Tab data here</p>
                </Tab>
                <Tab eventKey="experience" title="Experience">
                    <p>Tab data here</p>
                </Tab>
                <Tab eventKey="family" title="Family">
                    <p>Tab data here</p>
                </Tab>
                <Tab eventKey="activities" title="Activities">
                    <p>Tab data here</p>
                </Tab>
            </Tabs>
        </StyledApplicantTabs>
    );
}