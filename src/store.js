import Reactotron from './utils/ReactotronConfig'
import createSagaMiddleware from 'redux-saga'

//SAGAS
import rootSaga from './store/sagas'

//REDUX
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './store/reducers'

const sagaMiddleware = createSagaMiddleware()

const store = __DEV__ ? createStore(reducers, compose(Reactotron.createEnhancer(), applyMiddleware(sagaMiddleware))) : createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store