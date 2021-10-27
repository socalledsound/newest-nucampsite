import { useSelector } from 'react-redux'
import CommentsList from "./CommentsList";
// import CommentForm from "./CommentForm";
import { selectCampsiteComments } from './commentsSlice'

const Comments = ({campsiteId}) => {

    const comments = useSelector(selectCampsiteComments(campsiteId));

    return ( 
        <>
            <CommentsList comments={comments}/>
            {/* <CommentForm /> */}
        </>
     );
}
 
export default Comments;