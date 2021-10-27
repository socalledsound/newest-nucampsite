import { useState, useEffect} from 'react'
import { Col } from 'reactstrap'
import MenuCard from "../../components/MenuCard";
const IntervalItem = ({category, delay}) => {


    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval1 = setInterval(() => {
          setIndex((state) => (state + 1) % 4);
        }, delay);
    
        return () => clearInterval(interval1);
      }, [index, setIndex, delay]);


    return ( 
   

                <Col md className='md m-1'>
                    <MenuCard 
                        item={category.items[index]}
                        isLoading={category.isLoading}
                        errMsg={category.errMsg}
                    />
                </Col>

        
      
     );
}
 
export default IntervalItem;