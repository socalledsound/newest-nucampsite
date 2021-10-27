
const Comment = ({comment}) => {
    return (    
            <p>
                {comment.commentText}
                <br />
                {comment.rating}/5 stars -- {comment.author}
                ,{' '}
                {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                }).format(
                    new Date(Date.parse(comment.date))
                )}
            </p>
     );
}
 
export default Comment;