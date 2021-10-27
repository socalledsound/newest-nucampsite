import { useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { selectItems } from './animationSelectors'
import { Row, Col } from 'reactstrap'
import MenuCard from "../../components/MenuCard";
const CarouselRow = () => {

  
  const categories = useSelector(selectItems) 

    const [index0, setIndex0] = useState(0)
    const [index1, setIndex1] = useState(0)
    const [index2, setIndex2] = useState(0)

    useEffect(() => {
        const interval1 = setInterval(() => {
          setIndex0((state) => (state + 1) % 4);
        }, 4000);
    
        return () => clearInterval(interval1);
      }, [index0, setIndex0]);

      useEffect(() => {
        const interval2 = setInterval(() => {
          setIndex1((state) => (state + 1) % 4);
        }, 5000);
    
        return () => clearInterval(interval2);
      }, [index1, setIndex1]);

      useEffect(() => {
        const interval3 = setInterval(() => {
          setIndex2((state) => (state + 1) % 4);
        }, 3000);
    
        return () => clearInterval(interval3);
      }, [index2, setIndex2]);

      console.log(index2)
      

    return ( 
        <div>
        <Row>

                <Col md className='md m-1'>
                    <MenuCard 
                        item={categories[0].items[index0]}
                        isLoading={categories[0].isLoading}
                        errMsg={categories[0].errMsg}
                    />
                </Col>
                <Col md className='md m-1'>
                    <MenuCard 
                        item={categories[1].items[index1]}
                        isLoading={categories[1].isLoading}
                        errMsg={categories[1].errMsg}
                    />
                </Col>
                <Col md className='md m-1'>
                    <MenuCard 
                        item={categories[2].items[index2]}
                        isLoading={categories[2].isLoading}
                        errMsg={categories[2].errMsg}
                    />
                </Col>

        </Row>
        </div>
     );
}
 
export default CarouselRow;