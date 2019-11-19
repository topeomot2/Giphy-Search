import React from 'react'

function SearchBox() {
    return (
        <div className="container">
            <form className="form" id="searchText">
                <div className="SearchBox-header">Giphy Search</div>
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <input className="form-control form-control-lg" type="text" placeholder="Enter Text"/>
                    </div>
                </div>
                <div className="row justify-content-center m-2">
                    <button type="button" className="m-2 btn btn-secondary">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBox;
