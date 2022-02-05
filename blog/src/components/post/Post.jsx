import "./post.css";
import MusicImg from "../../img/music.png"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={MusicImg} alt="" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Music</span>
          <span className="postCategory">Life</span>
        </div>
        <span className="postTitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam,
        vitae inventore nisi quasi exercitationem nostrum, aliquam, tenetur
        natus sit excepturi impedit praesentium enim similique. Atque explicabo
        temporibus deserunt ratione?
      </p>
    </div>
  );
}
