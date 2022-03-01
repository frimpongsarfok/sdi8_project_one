import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DetailsCard from './components/Modules/DetailsCard';

beforeEach(() => {
    render (<DetailsCard fish={{id:'1','file-name':'catfish'}} />);
});

test('Verify ID is there', (props) =>{
    console.log('dddd ',props.done)
    //expect(screen.getByText(catfish)).toBeInTheDocument(); 
}); 


// test ('Verify ID is there', (props) =>{
//     console.log(props)
//     //expect(screen.getByText(39)).toBeInTheDocument(); 
// }); 