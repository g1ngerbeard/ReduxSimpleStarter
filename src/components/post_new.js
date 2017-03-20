import React, {Component, PropTypes} from "react";
import {reduxForm} from "redux-form";
import {createPost} from "../actions/index";
import {Link} from "react-router";

class PostNew extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                this.context.router.push('/');
            })
    }

    render() {
        const {fields:{title, categories, content}, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Add new post</h3>

                <div className={this.hasDangerClass(title)}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div className={this.hasDangerClass(categories)}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>

                <div className={this.hasDangerClass(content)}>
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }

    hasDangerClass(field) {
        return `form-group ${field.touched && field.invalid ? 'has-danger' : ''}`;
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a user name';
    }

    if (!values.categories) {
        errors.categories = 'Enter categories';
    }

    if (!values.content) {
        errors.content = 'Enter content';
    }

    return errors;
}

export default reduxForm({
    form: 'PostNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, {createPost})(PostNew);