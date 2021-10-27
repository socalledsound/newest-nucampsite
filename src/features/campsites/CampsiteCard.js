import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../app/shared/baseUrl';

const CampsiteCard = ({ campsite }) => {
    return (
        <Card>
            <Link to={`/campsites/${campsite.id}`}>
                <CardImg
                    width='100%'
                    src={baseUrl + campsite.image}
                    alt={campsite.name}
                />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}
export default CampsiteCard