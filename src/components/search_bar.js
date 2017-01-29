import React, {Component} from "react";

//const SearchBar = ({onTermInput}) => {
//    return (
//        <div className="search-bar">
//            <input
//                onKeyPress={e => e.key === 'Enter' ? onTermInput(e.target.value) : null}
//                onBlur={e => onTermInput(e.target.value)}
//            />
//        </div>
//    );
//};


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={e => this.updateState(e.target.value)}
                />
            </div>
        );
    }

    updateState(term) {
        this.setState({term});
        this.props.onTermInput(term)
    }

}

export default SearchBar;