import { useState, useEffect} from 'react'
import { Row, Col } from 'reactstrap'
import MenuCard from "../../components/MenuCard";
const CarouselRow = ({categories}) => {

    console.log(categories)

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((state) => (state + 1) % 2);
        }, 1000);
    
        return () => clearInterval(interval);
      });


      console.log(categories[0].items[index])

    return ( 
        <div>
        <Row>
        {
            categories.map((category, idx) => {
              
                return  (
                <Col md className='md m-1' key={`${idx}${category.items[index].id}`}>
                    <MenuCard 
                        item={category.items[index]}
                        isLoading={category.isLoading}
                        errMsg={category.errMsg}
                    />
                </Col>
                
            )})
        }
        </Row>
        </div>
     );
}
 
export default CarouselRow;