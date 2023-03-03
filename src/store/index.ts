import { createStore } from 'redux'
import reducer from './reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

const storageConfig = {
  key: 'root', // 必须有的
  storage: storageSession // 缓存机制
}

const myPersistReducer = persistReducer(storageConfig, reducer)
const store = createStore(myPersistReducer)
export const persistor = persistStore(store)

export default store
