import { useContext } from "react"
import { Col, Row } from "react-bootstrap";
import { applicantDetailsContext } from "../App";
import { ApplicantCard } from "./ApplicantCard";
import { ApplicantTabs } from "./ApplicantTabs";

export const Applicant = () => {
    const data = useContext(applicantDetailsContext);
    return(
        <>
      <Row>
        <Col><h2>{data.name}</h2>
            <p><strong>Applicant for scholorship No. {data.scholarshipNumber}</strong></p></Col>
        <Col >Placeholder</Col>
      </Row>
      <ApplicantCard/>
      <ApplicantTabs data={data} />
     </>
    )
}