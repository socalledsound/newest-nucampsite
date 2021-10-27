import { useDispatch } from 'react-redux'
import { setCurrentUser } from './userSlice'
import {
    Button,
    FormGroup,
    Label,
} from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateUser } from './validateUser';
import defaultAvatar from '../../app/assets/images/unicorn.jpg'

const Login = ({toggleModal}) => {
    const dispatch  = useDispatch()
    const handleLogin = (values) => {
        // alert(
        //     `Username: ${values.username} Password: ${values.password} Remember: ${values.remember}`
        // );
        const currentUser = {
            id: '01gsf@3',
            // I'd kind of like to implement a user avatar here?
            // and show it in the header if there's a user?
            avatar: defaultAvatar,
            username: values.username,
            password: values.password,
        }
        dispatch(setCurrentUser(currentUser))
        toggleModal(false);
    };
    
    
    return (
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                            // remember: false,
                        }}
                        onSubmit={handleLogin}
                        validate={validateUser}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Field
                                    id='username'
                                    name='username'
                                    placeholder='Username'
                                    className='form-control'
                                />
                                <ErrorMessage name='username'>
                                    {(msg) => (
                                        <p className='text-danger'>{msg}</p>
                                    )}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Password</Label>
                                <Field
                                    id='password'
                                    name='password'
                                    placeholder='Password'
                                    className='form-control'
                                />
                            </FormGroup>
                            {/* <FormGroup check>
                                <Label check>
                                    <Field
                                        name='remember'
                                        type='checkbox'
                                        className='form-check-input'
                                    />
                                    Remember me
                                </Label>
                            </FormGroup> */}
                            <Button type='submit' color='primary'>
                                Login
                            </Button>
                        </Form>
                    </Formik>

      );
}
 
export default Login;