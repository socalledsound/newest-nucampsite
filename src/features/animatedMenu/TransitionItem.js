import { useState, useEffect} from 'react'
import { Col } from 'reactstrap'
import { useTransition, animated } from 'react-spring'
import MenuCard from "../../components/MenuCard";
const TransitionItem = ({category, delay}) => {


    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval1 = setInterval(() => {
          setIndex((state) => (state + 1) % 4);
        }, delay);
    
        return () => clearInterval(interval1);
      }, [index, setIndex, delay]);


      const transitions = useTransition(category.items[index],{
        from: { opacity: 0, position: 'absolute'},
        enter: { opacity: 1, position: 'absolute'},
        leave: { opacity: 0, position: 'absolute'},
        config: {duration: delay/2},
      })



    return ( 
   
        <Col md className='md md-1' style={{minHeight: '600px', marginTop: '1.2rem'}}>
            {
                transitions((style, item, key) => 
                item ? 
                <animated.div className='item' style={style}>
                    <MenuCard 
                        item={item}
                        isLoading={category.isLoading}
                        errMsg={category.errMsg}
                    />
                </animated.div>
                :
                ''
                )
            }
        </Col>
              
                

                
                    
                

        
      
     );
}
 
export default TransitionItem;