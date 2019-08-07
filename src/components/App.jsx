import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null};

    onTermSubmit = async term => {
        const response = await YouTube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyCmiwpGcg3NvxfLfyuEFbsDgaZ4jZQh8YI',
                q: term
            }
        });

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div style={{marginTop: '50px'}} className='ui container'>
                <i style={{marginLeft: '42%'}} className="youtube massive red icon"></i>
                <SearchBar  onFormSubmit={this.onTermSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default App;