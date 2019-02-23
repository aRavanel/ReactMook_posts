import React, {Component } from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';
import {Link} from 'react-router-dom';


class PostsShow extends Component{

    // cest une methode classique du lifecycle
    componentDidMount(){
        const {id} = this.props.match.params.id;
        this.props.fetchPost(id);
    }

    onDeleteClick(){
        const {id} = this.props.match.params;
        // quand post delete on revient a la racine
        this.props.deletePost(id, () =>{
            this.props.history.push('/');
        } ); // on l'appelle depuis this.props car c'est un action creator
    }


    render(){

        const {post} = this.props;

        // la premier fois que la page est affichée(avant componentDidMount), le post n'a pas encore ete cherché
        // post est donc a undefined, on rajoute donc  :
        if(!post){
            return <div>Loading...</div>;
        }

        // si post defined alors : 
        // this.props === ownProps (plus bas)
        return(
            <div>
                <Link to="/"> Back to index </Link>
                <button
                    className = "btn  btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

// on ne s'occuppe que de posts dans le state (1er arg)
// rappel mapStateToProps est appellé quand le composant est sur le point detre reaffiché
function mapStateToProps({posts}, ownProps){
    // fait qqes calculs intermediaires ici
    console.log(posts[ownProps.match.params.id]);
    return {post: posts[ownProps.match.params.id]};

}

export default connect (mapStateToProps, {fetchPost, deletePost}) (PostsShow);