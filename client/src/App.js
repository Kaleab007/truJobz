import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import PostingList from "./components/posting_components/postingsList"
 
const App = () => {
 return (
   <div className="App">
     <PostingList />
     {/* <Navbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes> */}
   </div>
 );
};
 
export default App;