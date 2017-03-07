import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class PostNew extends Component {
    render() {
        const {fields:{title, categories, content}, handleSubmit} = this.props;

        return (
            <form onsubmit={handleSubmit}>
                <h3>Add new post</h3>

                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                </div>

                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <input type="text-area" className="form-control" {...content}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostNewForm',
    fields: ['title', 'categories', 'content']
})(PostNew);