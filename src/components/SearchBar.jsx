import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onHandleFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div>
                <div className="search-bar ui icon input">
                    <form className='ui form' onSubmit={this.onHandleFormSubmit} >
                        <div className='ui icon input'>
                            <input 
                                type="text" 
                                placeholder={this.state.term} 
                                onChange={ e => this.setState({term: e.target.value})} 
                            />
                            <i className="search icon"></i>
                        </div>
                    </form>
                    
                </div>
            </div>
        );
    }
}

export default SearchBar;