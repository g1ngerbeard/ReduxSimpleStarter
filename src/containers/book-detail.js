import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        const activeBook = this.props.activeBook;

        if (activeBook) {
            return (
                <div>
                    <h3>Details for:</h3>
                    <div>Title: {activeBook.title}</div>
                    <div>Pages: {activeBook.pages}</div>
                </div>
            );
        }

        return <div>No book is selected</div>;

    }
}

function mapStateToProps(state) {
    return {
        activeBook: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail)