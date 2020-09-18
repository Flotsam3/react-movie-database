import React, {useEffect, useRef} from 'react'

function Search(props) {
    const inputField = useRef();

    useEffect(()=>{
        inputField.current.focus();
    },[])

    return (
        <div>
            <input ref={inputField} type="text" placeholder="Search For Film Title or IMDB" onChange={(e)=>{
                props.onSearchValue(e.target.value);
            }}></input>
            <button onClick={props.onGetData}>Search</button>
        </div>
    )
}

export default Search
