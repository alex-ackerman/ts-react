import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello';
import { List, futuramaCharacters } from './components/List';

ReactDOM.render(
    <div>
        <Hello compiler="TypeScript" framework="React" />
        <List items={futuramaCharacters} />
    </div>,
    document.querySelector('main')
);