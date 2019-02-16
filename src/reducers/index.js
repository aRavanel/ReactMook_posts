import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
// import PostReducer from './reducer_posts';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
  });


export default rootReducer;
