import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const PF = "http://localhost:5000/images/";
  const location = useLocation();
  //console.log(location);
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title: title,
        desc: description,
      });
      setUpdateMode(false);
      //window.location.repload();
    } catch (err) {}
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singPostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(!updateMode)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            <Link to={`/?user=${post.username}`} className="link">
              Autor: <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createAt).toDateString}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescriptionInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className="singlePostDescription">{description}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
