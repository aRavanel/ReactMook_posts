import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom'; // semblable a un hyperlink html
import {connect} from 'react-redux';
import {createPost} from '../actions';



class PostsNew extends Component{

    renderField(field){
        const {meta } = field; // pour avoir meta, touched, error au lieu de field.meta, field.meta.touched
        // const {meta :{touched, error} } = field; // pour avoir meta, touched, error au lieu de field.meta, field.meta.touched
        const className = `form-group ${meta.touched && meta.error ? 'has-danger' : '' }`


        return(
            // has-danger met en rouge
            // <div className="form-group has-danger">
            <div className = {className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type = "text"
                    // onChange = {field.input.onChange}
                    // onFocus = 
                    // onBlur = 
                    {...field.input} // toutes les proprietes de cet objet doivent etre communiquées comme props au tag input
                />
                <div className="text-help">
                    {/* si vrai -> error affiché sinon '' */}
                    {meta.touched ? meta.error : ''}
                </div>
            </div>
        )

    }

    onSubmit(values){
        
        this.props.createPost(values, ()=> {
            this.props.history.push('/');
        });
    }


    render(){
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderField}
                />

                <Field 
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />     

                <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />

                <button 
                    type="submit" 
                    className="btn btn-primary">
                    Submit
                </button>    
              
                {/* link tag est en fait un anchor tab donc le style defini dans style.css s'applique */}
                <Link className="btn btn-danger" to="/">
                    Cancel
                </Link>
              
            </form>
        );
    }

}

function validate(values){
    // console.log(values)->{title:'asds', categories:'',content:''}
    const errors ={};
    // vlaidate the inputs from 'values'
    if (!values.title){
        errors.title = "Enter a title!";
    }
    if (!values.categories){
        errors.categories = "Enter some categories!";
    }
    if (!values.content){
        errors.content = "Enter some contents!";
    }

    // If errors is empty, the form is fine to submit
    // if errors has any propertis, reduc form assus form is invalid
    return errors;
}

//validate function will be called wehn form is submitted
export default reduxForm({
    validate: validate,
    form:'PostsNewForm'
})(
    connect(null,{createPost}) (PostsNew)
    );