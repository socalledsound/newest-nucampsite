import { useState, useEffect } from 'react'
import { Col,    
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle, } from 'reactstrap';
import Loading from '../../components/Loading';
// import MenuCard from './MenuCard'
// import { FadeTransform } from 'react-animation-components';
import { baseUrl } from '../../app/shared/baseUrl';
import Error from '../../components/Error'
import { useSpring, animated } from "react-spring";
const FadeInCard = ({ item, isLoading, errMsg }) => {
    // console.log(item, isLoading, errMsg)
    const [toggle, setToggle] = useState(false)
    // const [loaded, setLoaded] = useState(false)

    const animatedStyle = useSpring({ opacity : toggle ? 1 : 0, transform: toggle ?  'scale(1,1)' : 'scale(1,0)', config: {duration: 500}})
    if(item){
        if(item.name === 'Mountain Adventure'){
             console.log(animatedStyle)
        }
    }

    useEffect(() => {
        if(!isLoading){
            if(!toggle){
                setToggle(true)
            }
        }
        console.log(item, toggle)
    }, [isLoading, toggle, item])



        if(isLoading){
            // console.log('loading')
            return <Loading />
        }
        if(errMsg){
            return <Error errMsg={errMsg}/>
        }
        if(item){
                
                        return (
                            
                            
                                <animated.div style={animatedStyle}>
                                    <Col md className='md m-1'>        
                                        <Card>
                                            <CardImg src={baseUrl + item.image} alt={item.name} />
                                            <CardBody>
                                                <CardTitle>{item.name}</CardTitle>
                                                <CardText>{item.description}</CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>  
                                </animated.div>
                            
                            
                        )

                    }       
        return <></>
    
}
export default FadeInCard