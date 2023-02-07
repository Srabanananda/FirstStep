import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/Route';
import { Provider } from 'react-redux';
import reducers from './src/Redux/Reducer';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/Redux/Saga';
import { Text, TextInput} from 'react-native';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)


export default class App extends React.Component {
   
    render() {
        return (
            <Provider store={store} >
                <Router />
            </Provider>
        );
    }
}
