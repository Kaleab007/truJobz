import React from "react";
import { useState, useEffect} from "react"

import Posting from "./posting";

function Home(props){
    const [postings, setPostings] = useState([])
    
 // This method fetches the records from the database.
    useEffect(() => {
        async function getPostings() {
            const response = await fetch(`http://localhost:3000/posting`)
            //  const response = await fetch(`/posting/`)

        
            if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
            }
        
            const postings = await response.json();
            setPostings(postings);
        }

        getPostings();
        return;
    }
    )

    return(
        <div className="jobPostings">
            {props.renderList(postings)}
        </div>
    )
}

export default Home