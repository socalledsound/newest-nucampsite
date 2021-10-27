import { useSelector } from 'react-redux'
import { selectItems } from './animationSelectors'
import { Row } from 'reactstrap'
import TransitionItem from './TransitionItem'
const CarouselRow = () => {

  
  const categories = useSelector(selectItems) 

    return ( 
        <div>
        <Row>

               {categories.map((category, i) => <TransitionItem category={category} delay={(i + 1) * 2000 + Math.random() * 1000}/>)}

        </Row>
        </div>
     );
}
 
export default CarouselRow;