import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(<Card />, document.getElementById('root'));
registerServiceWorker();
