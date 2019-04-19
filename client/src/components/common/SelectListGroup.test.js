import React from 'react';
import ReactDOM from 'react-dom';
import SelectListGroup from './SelectListGroup';

it('SelectListGroup renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM
    .render(<SelectListGroup 
            name=""
            value=""
            info=""
            error=""
            onChange= {() => null}
            options={[]}
            />, div);
  ReactDOM.unmountComponentAtNode(div);
});
