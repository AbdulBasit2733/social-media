import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import CreatePost from "./Components/CreatePost/CreatePost";
import PostList from "./Components/Posts/PostList";
const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="content">
        <Header />
        {selectedTab === "Home" ? <PostList /> : <CreatePost />}

        <Footer />
      </div>
    </div>
  );
};

export default App;
