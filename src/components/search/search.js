import React, { Component } from 'react';

class Search extends Component{
    render(){
        
        return(
            <div className='searchString'>
                <input className='searchInput' value={this.props.searchText} onChange={(e) => this.props.search(e.target.value)}/> 
            </div>
        )
    }
}

export default Search;