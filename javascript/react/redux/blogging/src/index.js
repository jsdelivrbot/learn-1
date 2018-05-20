import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import reducers from './reducers';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PostsIndex from "./components/posts_index";
import promise from 'redux-promise';
import PostsNew from "./components/posts_new";
import PostShow from "./components/post_show";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/posts/new" component={PostsNew}/>
                    <Route path="/posts/:id" component={PostShow}/>
                    <Route path="/" component={PostsIndex}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
