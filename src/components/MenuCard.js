import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from 'reactstrap';
import Loading from './Loading';
// import { FadeTransform } from 'react-animation-components';
import { baseUrl } from '../app/shared/baseUrl';
import Error from './Error'

const MenuCard = ({ item, isLoading, errMsg }) => {
        console.log(item)
        if(isLoading){
            console.log('loading')
            return <Loading />
        }
        if(errMsg){
            return <Error errMsg={errMsg}/>
        }
        if(item){
            console.log(item)
            return(
                
                    <Card>
                        <CardImg src={baseUrl + item.image} alt={item.name} />
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            <CardText>{item.description}</CardText>
                        </CardBody>
                    </Card>
                
            )
        }

        return <></>
    
}
export default MenuCard