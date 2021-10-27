// import AnimatedRow from '../../components/FadeInRow';
import { useState } from 'react'
import { Button, ButtonGroup} from 'reactstrap';
import IndividuallyAnimatedRow from './IndividuallyAnimatedRow'
import CarouselRow from './CarouselRow'

const AnimatedMenu = () => {

    const [ defaultMode, toggleDefaultMode] = useState(true)

    return ( 
        <>
            <ButtonGroup>
                <Button outline color='info' active={defaultMode} onClick={() => toggleDefaultMode(true)}>1</Button>
                <Button outline color='info' active={!defaultMode} onClick={() => toggleDefaultMode(false)}>2</Button>
            </ButtonGroup>
            {
            defaultMode ?
           
                <IndividuallyAnimatedRow />
            :
                <CarouselRow />
            }

        </>           
                     
     );
}
 
export default AnimatedMenu;


