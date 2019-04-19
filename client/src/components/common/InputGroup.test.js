import React from 'react';
import ReactDOM from 'react-dom';
import InputGroup from './InputGroup';

it('InputGroup renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM
    .render(<InputGroup 
            placeholder=""
            name=""
            icon=""
            iconlabel=""
            value=""
            onChange= {() => null}
            error=""
            />, div);
  ReactDOM.unmountComponentAtNode(div);
});
