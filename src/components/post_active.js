import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {fetchActivePost, deletePost, clearActivePost} from "../actions/index"

class PostActive extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchActivePost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
            .then(() => {
                this.context.router.push('/');
            })
    }

    onBackClick() {
        this.props.clearActivePost();
    }

    render() {
        const {post} = this.props;

        if (!post) {
            return <div>Loading...</div>;
        }

        const {title, categories, content} = post;

        return (
            <div>
                <Link onClick={this.onBackClick.bind(this)}
                      to="/"
                      className="btn">
                    Back to all posts
                </Link>
                <button className="btn btn-danger pull-xs-right"
                        onClick={this.onDeleteClick.bind(this)}>Delete
                </button>
                <div>
                    <h3>{title}</h3>
                    <h6>Categories: {categories}</h6>
                    <p>{content}</p>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts.active
    };
}

export default connect(mapStateToProps, {fetchActivePost, deletePost, clearActivePost})(PostActive);


