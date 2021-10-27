import { useEffect, useState} from 'react'
import { Col, Row } from 'reactstrap'
import { useTransition, animated } from "react-spring";
import MenuCard from "./MenuCard";

const AnimatedRow = ({items}) => {

    const [itemsToRender, setItemsToRender] = useState(null);


    useEffect(() => {
        setTimeout(() => setItemsToRender(items), 100)
    }, [items, itemsToRender])


    // const transition = useTransition(show, (p) => p, {
    //     duration: 5000,
    //     from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    //     enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    //     leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    //     config: config.molasses,
    //   })

    const transitions = useTransition(items, {
        from: { opacity: 0},
        enter: { opacity: 1},
        leave: { opacity: 0},
        config: {duration: 5000},

    })


    return ( 
        <Row>
            
                    {
                        transitions((style, item, key) => 
                        item ? 
                        <Col md className='md m-1'>
                        <animated.div className='item' style={style}>
                        
                        <MenuCard 
                            item={item.featured}
                            isLoading={item.isLoading}
                            errMsg={item.errMsg}
                        />
                        
                        </animated.div>
                        </Col>
                        :
                        <></>

                        )

                    }
            
                
                
        
        
        </Row>
     );
}
 
export default AnimatedRow;