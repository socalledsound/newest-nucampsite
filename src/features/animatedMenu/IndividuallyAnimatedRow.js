import { useSelector} from 'react-redux'
import { selectFeaturedItems } from './animationSelectors';
import { Col, Row } from 'reactstrap'
import FadeInCard from "./FadeInCard";

const IndividuallyAnimatedRow = () => {


    const items = useSelector(selectFeaturedItems)

    return ( 
        <Row>
            {   
                items && 
                items.length > 0 &&
                items.map( item => 
                    <Col md className='md m-1'>
                        
                    <FadeInCard 
                        item={item.featured}
                        isLoading={item.isLoading}
                        errMsg={item.errMsg}
                    />

                    </Col>
                )
            }        
        </Row>
     );
}
 
export default IndividuallyAnimatedRow;