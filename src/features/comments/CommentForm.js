import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { postComment } from './commentsSlice';
import { validateComments } from '../../utils/validateComments';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Label,
    FormGroup,
} from 'reactstrap';

const CommentForm = ({ campsiteId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleSubmit = (values) => {
        const payload = {
            campsiteId: +campsiteId,
            rating: values.rating,
            author: values.author,
            commentText: values.commentText,
        };
        dispatch(postComment(payload));
        setIsModalOpen(false);
    };

    return (
        <>
            <Button outline onClick={toggleModal}>
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Add Comment</ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            rating: undefined,
                            author: '',
                            commentText: '',
                        }}
                        onSubmit={handleSubmit}
                        validate={validateComments}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='rating'>Rating</Label>
                                <Field
                                    name='rating'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Field>
                                <ErrorMessage name='rating'>
                                    {(msg) => (
                                        <p className='text-danger'>{msg}</p>
                                    )}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='author'>Your Name</Label>
                                <Field
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                                />
                                <ErrorMessage name='author'>
                                    {(msg) => (
                                        <p className='text-danger'>{msg}</p>
                                    )}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='commentText'>Comment</Label>
                                <Field
                                    name='commentText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
}

export default CommentForm
