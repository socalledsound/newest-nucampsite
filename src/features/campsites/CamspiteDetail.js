import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    Col,
} from 'reactstrap';
import { baseUrl } from '../../app/shared/baseUrl';
const CampsiteDetail = ({campsite}) => {
    return (
        <Col md='5' className='col-md-5 m-1'>
                <Card>
                    <CardImg
                        top
                        src={baseUrl + campsite.image}
                        alt={campsite.name}
                    />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
  
        </Col>
    );
}
 
export default CampsiteDetail;