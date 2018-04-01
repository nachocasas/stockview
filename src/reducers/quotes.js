import { FETCH_QUOTE, UPDATE_QUOTE, REMOVE_QUOTE } from '../actions/index';

export default function(state = [], action){
    switch(action.type){
        case FETCH_QUOTE+'_PENDING':
            if(!state.data){
                return Object.assign({}, { data: state }, { loading: true });
            } 
            return Object.assign({}, { data: state.data }, { loading: true });
            break;
        case FETCH_QUOTE+'_FULFILLED':
            return insertOrUpdate(state, action.payload.data)
            break;
        case FETCH_QUOTE+'_REJECTED':    
            return state;
            break;
        case REMOVE_QUOTE:
            return removeQuote(state, action.payload)
            break;
        case UPDATE_QUOTE+'_FULFILLED':
            return insertOrUpdate(state, action.payload.data)
            break;
    }

    return state;
}

function removeQuote(state, symbol){
    let newStateValue = {};
    for(let value of state.data) {
        const symbolOnState = value["Meta Data"]["2. Symbol"]
        if(symbolOnState !== symbol){
            newStateValue = [ value, ...newStateValue ];
        }
    }
   
    return Object.assign({}, { data : newStateValue }, { loading: false });;
}

function insertOrUpdate(state, data) {

    let update = false;
    if(!data["Meta Data"]){
        return Object.assign({}, { data : state.data  }, { loading: false });
    };

    if(state.data.length > 0){
        for(let value of state.data) {
            const symbol = value["Meta Data"]["2. Symbol"]
            if(symbol == data["Meta Data"]["2. Symbol"]){
                update = true;
                break;
            }
        }
    }

    if(!update){
        return Object.assign({}, { data : [ data, ...state.data ] }, { loading: false });
    }

    const newDataState = state.data.map( (item, index) => {
        if(item["Meta Data"]["2. Symbol"] !== data["Meta Data"]["2. Symbol"]) {
            // This isn't the item we care about - keep it as-is
            return item;
        }
        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...data
        };    
    });

    return Object.assign({}, { data : newDataState }, { loading: false });

}
