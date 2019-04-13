import React, { Component } from 'react';

class Search extends Component{
    render(){
        
        return(
            <div className='searchString'>
                <input className='searchInput' value={this.props.searchText} 
                placeholder="Имя героя"
                onChange={(e) => this.props.search(e.target.value)}/>
                 </div>
        )
    }
}

export default Search;