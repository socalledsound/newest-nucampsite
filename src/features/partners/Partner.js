import { baseUrl } from '../../app/shared/baseUrl';
import {
    Media,
} from 'reactstrap';

const Partner = ({ partner }) => {
    if (partner) {
        return (
            <>
                <Media
                    object
                    src={baseUrl + partner.image}
                    alt={partner.name}
                    width='150'
                />
                <Media body className='ml-5 mb-4'>
                    <Media heading>{partner.name}</Media>
                    {partner.description}
                </Media>
            </>
        );
    }
    return null;
}
export default Partner