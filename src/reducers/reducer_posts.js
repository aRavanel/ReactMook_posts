import _ from 'lodash';
import {FETCH_POSTS} from '../actions';

export default function (state= {}, action){
    switch (action.type){

        case FETCH_POSTS:

            // cela renvoie l'array des objets posts
            console.log(action.payload.data)

            // mapKeys transforme un array d'objet en un seul objet indexé par le deuxieme argument
            return _.mapKeys(action.payload.data,'id');

        // case CREATE_POST:
        //     return _.mapKeys(action.payload.data)

        default:
            return state;

    }
}