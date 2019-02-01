import {createStore} from 'redux';

export default function configStore(initialState){

    const store = createStore(() => {}, initialState);
    return store;
}