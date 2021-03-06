import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Link, browserHistory } from 'react-router'
import Main from './Main'; // Our custom react component

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render

render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="/:competition/:tab" component={Main}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
