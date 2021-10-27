import {
    Col,
} from 'reactstrap';
// import { useSelector } from 'react-redux'
// import { selectCampsiteComments } from './commentsSlice'
// import { FadeTransform, Fade, Stagger } from 'react-animation-components';
// import { Fade, Stagger } from 'react-animation-components';
import Comment from './Comment'
import CommentForm from '../comments/CommentForm'


const CommentsList = ({ comments, campsiteId }) => {

    // const comments = useSelector(selectCampsiteComments(campsiteId));
    // console.log(comments)


    if (comments) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {/* <Stagger in> */}
                    {comments.map((comment) => {
                        return (
                            // <Fade in key={comment.id}>
                                <Comment key={comment.id} comment={comment}/>
                            // {/* </Fade> */}
                        );
                    })}
                {/* </Stagger> */}
                <CommentForm campsiteId={campsiteId} />
            </Col>
           
        );
    }
    return null;
}
export default CommentsList