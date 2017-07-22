/**
 * Created by Jhalak on 7/22/2017.
 */
import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
    switch (action.type){
        case FETCH_WEATHER:
            // add action.payload.data to the existing state // NEVER MANIPULATE/MUTATE THE STATE
            // concat is not changing/mutating our state,
            // it is giving a new state alltogether.
            // return state.concat([ action.payload.data ]); same as ES6 syntax of it..
            return [ action.payload.data, ...state ] // [city, city, city]
    }
    return state;
}
