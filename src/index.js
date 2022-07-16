import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

const unsubscribe = store.subscribe(()=>{
    console.log('store Changed...',store.getState());
})

// it is actions for adding bugs
store.dispatch(bugAdded('bug-1'));

// unsubscribe();


// it is actions for resolving bugs
store.dispatch(bugResolved(1));


// it is actions for remove bugs
store.dispatch(bugRemoved(1));


console.log("store", store.getState());
