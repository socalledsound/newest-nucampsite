import {
    Button,
} from 'reactstrap'
const AnimationControls = ({options, toggleParent}) => {
    return ( 
        <div>
            <Button outline color="primary" active={options[0]}>option1</Button>{' '}
            <Button outline color="info" active={options[1]}>option2</Button>{' '}
            <Button outline color="danger" active={options[2]}>option3</Button>{' '}
        </div>
     );
}
 
export default AnimationControls;