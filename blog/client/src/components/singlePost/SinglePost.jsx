import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./singlePost.css";
import Music from "./img/music.png";

export default function SinglePost() {
  const location = useLocation();
  //console.log(location);
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" />
        )}
        <img src={Music} alt="" className="singlePostImg" />
        <h1 className="singPostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor: <b>{post.username}</b>
          </span>
          <span className="singlePostDate">
            {new Date(post.createAt).toDateString}
          </span>
        </div>
        <p className="singlePostDescription">{post.description}</p>
      </div>
    </div>
  );
}
