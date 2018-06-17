import { createStore } from 'redux';
const demoState = {
    count: 0
}
const store = createStore((state = demoState) => {
    return state;
})

console.log(store.getState());