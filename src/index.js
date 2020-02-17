import React from 'react';
import ReactDOM from 'react-dom';
import TODO from './Todo'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TODO />, document.getElementById('root'));


serviceWorker.unregister();
