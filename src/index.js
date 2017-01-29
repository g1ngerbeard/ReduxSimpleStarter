import _ from 'lodash'
import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetails from "./components/video_detail"
const API_KEY = 'AIzaSyBLN-BoCpR80Np-e1UHhht83CtF0QoFVis';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.searchVideos('planking')
    }

    searchVideos(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });
    }

    render() {

        const onTermInput = _.debounce((term)=> {
            this.searchVideos(term)
        }, 500);

        return (
            <div>
                <SearchBar onTermInput={onTermInput}/>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));