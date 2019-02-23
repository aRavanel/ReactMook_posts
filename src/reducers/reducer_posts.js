import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';

export default function (state= {}, action){
    switch (action.type){

        case DELETE_POST:
            return _.omit(state, action.payload);

        case FETCH_POST:

            // const post = action.payload.data;
            // const newState = {...state};
            // newState[post.id] = post;
            // return newState;

            // entre accolades : on renvoie un objet
            
            return { ...state, [action.payload.data.id]: action.payload.data};
           
           

        case FETCH_POSTS:

            // cela renvoie l'array des objets posts
            // console.log(action.payload.data)

            // mapKeys transforme un array d'objet en un seul objet indexé par le deuxieme argument
            return _.mapKeys(action.payload.data,'id');

        default:
            return state;

    }
}