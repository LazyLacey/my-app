import React, { Component } from 'react';

class SearchString extends Component{
    render(){
        
        return(
            <div class='searchString'>
                <input class='searchInput' onChange={this.props.search(this.value)}/> 
            </div>
        )
    }
}

export default SearchString;