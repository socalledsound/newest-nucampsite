
import Loading from '../../components/Loading';
import {
    Col,
    Media,
} from 'reactstrap';
// import { Fade, Stagger } from 'react-animation-components';
import { useSelector } from 'react-redux';
import Partner from './Partner'
import Error from '../../components/Error';


const PartnersList = () => {
    const { isLoading, errMsg, partnersArray } = useSelector(
        (state) => state.partners
    );

        return (
            isLoading ?
            <Loading />
            :
            errMsg ?
            <Error errMsg={errMsg} />
            :
            <Col className='mt-4'>
                <Media list>
                    {
                    partnersArray.map((partner) => {
                        return (
                            // <Fade in key={partner.id}>
                                <Media tag='li' key={partner.id}>
                                    <Partner partner={partner} />
                                </Media>
                            //</Fade>
                        );
                        })
        
                    }
  
                </Media>
            </Col>

   
    );
}

export default PartnersList