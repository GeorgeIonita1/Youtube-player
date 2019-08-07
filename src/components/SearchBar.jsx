import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onHandleFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div >
                <div style={{width: '100%'}} className="ui input">
                    <form style={{width: '100%'}} className='ui form' onSubmit={this.onHandleFormSubmit} >
                        <div style={{width: '100%'}} className='ui icon input'>
                            <input 
                                type="text" 
                                placeholder={this.state.term} 
                                onChange={ e => this.setState({term: e.target.value})} 
                            />
                            <i className="search icon" onClick={this.onHandleFormSubmit}></i>
                        </div>
                    </form>
                    
                </div>
            </div>
        );
    }
}

export default SearchBar;