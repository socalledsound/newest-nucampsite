
import { useSelector } from 'react-redux';
import {
    Container,
    Row,
} from 'reactstrap';
import {useParams } from 'react-router-dom';
import { selectFeaturedCampsiteData, selectCampsiteById } from '../features/campsites/campsitesSlice'
import Loading from '../components/Loading';
import Error from '../components/Error';
import Comments from '../features/comments/Comments'
import CampsiteDetail from '../features/campsites/CamspiteDetail'
import SubHeader from '../components/SubHeader'

const CampsiteDetailPage = () => {
    const { campsitesLoading, campsitesErrMsg} = useSelector(selectFeaturedCampsiteData)
    const { campsiteId } = useParams();
    const campsite = useSelector(selectCampsiteById(campsiteId))
    if(campsitesLoading){
        return <Loading />
    }
     
    if(campsitesErrMsg){
        return <Error errMsg={campsitesErrMsg}/>
    }

    if(campsite){
        return (
            <Container>
                <SubHeader current={campsite.name}/>
                <Row>
                    <CampsiteDetail campsite={campsite} />
                    <Comments campsiteId={campsiteId}/>
                </Row>
            </Container>
        )
    }
    
    return null


}

export default CampsiteDetailPage;
