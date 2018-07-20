// styles
import React from 'react';
import {render} from 'react-dom';

// app
import App from './App';

// src
const div = document.createElement('div');

render(<App foo={123} />, div);

document.body.appendChild(div);
