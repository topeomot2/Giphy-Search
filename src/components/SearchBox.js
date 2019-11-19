import React from 'react'

function SearchBox() {
    return (
        <div className="container">
            <form className="form" id="searchText">
            <div className="SearchBox-header">Gliphy Search</div>
            <div className="row justify-content-center">
            <div class="col-sm-8">
                
                <input class="form-control form-control-lg" type="text" placeholder="Enter Text"/>
               
            </div>
            </div>
            </form>
        </div>
    )
}

export default SearchBox;
