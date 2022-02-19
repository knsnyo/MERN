import "./post.css";
import MusicImg from "../../img/music.png"

export default function Post({post}) {
  return (
    <div className="post">
      {post.photo}
      <img className="postImg" src={MusicImg} alt="" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Music</span>
          <span className="postCategory">Life</span>
        </div>
        <span className="postTitle">
          {post.title}
        </span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDescription">
        {post.description}
      </p>
    </div>
  );
}
