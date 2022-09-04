import { Col, Row, Card, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { StyledApplicantCard } from "./styled/ApplicantCard.styled";


export const ApplicantCard = () => {
    return(
        <StyledApplicantCard>
        <Row className="mt-2">
            <Col>
                <Card>
                    <Card.Header className="text-center"><b>Letters of recommandations</b></Card.Header>
                    <Card.Body>
                        <Row>
                            <Col className="text-center">
                                <p>lorena torrens Educators United Inc.</p>
                                <Button variant="primary" size="sm"> <AiOutlineDownload/> Download</Button>
                            </Col>
                            <Col className="text-center">
                                <p>lorena torrens Educators United Inc.</p>
                                <Button variant="primary" size="sm"> <AiOutlineDownload/> Download</Button>
                            </Col>
                            <Col className="text-center">
                                <p>lorena torrens Educators United Inc.</p>
                                <Button variant="primary" size="sm"> <AiOutlineDownload/>Download</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Header className="text-center"><b>Essays</b></Card.Header>
                    <Card.Body>
                        <Row>
                            <Col className="text-center">
                                <p>lorena torrens Educators United Inc.</p>
                                <Button variant="primary" size="sm"> <AiOutlineDownload/> Download</Button>
                            </Col>
                            <Col className="text-center">
                                <p>lorena torrens Educators United Inc.</p>
                                <Button variant="primary" size="sm"> <AiOutlineDownload/> Download</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                </Col>
            <Col >
                <Card>
                    <Card.Header className="text-center"><b>Transcriptions</b></Card.Header>
                    <Card.Body>
                        <Row>
                            <Col className="text-center">
                                <p>lorena torrens Educators United Inc.</p>
                                <Button variant="primary" size="sm"> <AiOutlineDownload/> Download</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
      </Row>
      </StyledApplicantCard>
    )
}