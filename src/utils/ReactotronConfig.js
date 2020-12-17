import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import AsyncStorage from '@react-native-community/async-storage'

const react = Reactotron
    .setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '192.168.15.6' })//IP DO COMPUTADOR
    .useReactNative({ asyncStorage: false })
    .use(reactotronRedux())

if (__DEV__) {
    react.connect()
}

console.tron = Reactotron

export default react
