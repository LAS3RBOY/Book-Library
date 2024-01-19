import React, { useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import './SearchBar.css'


const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value)
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm)
    }
    return (
        <>
            <div class="input-group d-flex flex-column justify-content-center align-items-center">
                <h2 className='quote text-light fw-bolder display-1'>Find Your Book Of Choice.</h2>
                <form onSubmit={handleFormSubmit} className='d-flex justify-content-center align-items-center gap-2'>
                    <input type="text" className="searchInput form-control " style={{ borderRadius: "20px", height: "2.8rem", width: "350px" }} onChange={handleInputChange} placeholder="Enter the Title" value={searchTerm} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button className="btn p-2" style={{ background: "#F9629F", borderRadius: "50px" }} type="submit"><FaMagnifyingGlass size={25} /></button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SearchBar