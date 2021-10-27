import {
    Container,
    Row,
    Col,
} from 'reactstrap';

const Error = ({errMsg}) => {
    return ( 
        <Container>
        <Row>
            <Col>
                <h4>{errMsg.message}</h4>
            </Col>
        </Row>
    </Container>
     );
}
 
export default Error;