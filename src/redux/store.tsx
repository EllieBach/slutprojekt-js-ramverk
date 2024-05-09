import { createStore } from 'redux';
import rootReducer from './rootReducer'; // Assuming you have a rootReducer

const store = createStore(rootReducer);

export default store; // Export the store as default
