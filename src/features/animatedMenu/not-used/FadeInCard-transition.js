import { useState, useEffect } from 'react'
import { Col,    
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle, } from 'reactstrap';
import Loading from './Loading';
// import MenuCard from './MenuCard'
// import { FadeTransform } from 'react-animation-components';
import { baseUrl } from '../app/shared/baseUrl';
import Error from './Error'
import { useSpring, animated } from "react-spring";
const FadeInCard = ({ cardItem, isLoading, errMsg }) => {
 
    console.log(cardItem)
    const [itemToDisplay, setItemToDisplay] = useState(cardItem)


    useEffect(() => {
        console.log('in use effect now')
        setTimeout(() => setItemToDisplay(item), Math.random() * 5000)

    }, [item, itemToDisplay])


    const transition = useTransition(itemToDisplay, {
        from: { opacity: 0},
        enter: { opacity: 1},
    })



        if(isLoading){
            console.log('loading')
            return <Loading />
        }
        if(errMsg){
            return <Error errMsg={errMsg}/>
        }
        if(cardItem){
                // console.log(cardItem )
                    transition((style, item, key) => {
                        console.log(item, style, key)
                        return (
                            item ? 
                            <Col key={key} md className='md m-1'>
                                <animated.div style={style}>
                                      hi      
                                <Card>
                                    <CardImg src={baseUrl + item.image} alt={item.name} />
                                    <CardBody>
                                        <CardTitle>{item.name}</CardTitle>
                                        <CardText>{item.description}</CardText>
                                    </CardBody>
                                </Card>

                                
                                </animated.div>
                            </Col>
                            :
                            <div>hi</div>
                        )

                    }
                   

                    
                )
               
        }

        return <></>
    
}
export default FadeInCard