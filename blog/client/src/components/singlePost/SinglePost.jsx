import "./singlePost.css";
import Music from "./img/music.png"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={Music} alt="" className="singlePostImg" />
        <h1 className="singPostTitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor: <b>knsn</b>
          </span>
          <span className="singlePostDate">1 hours ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minima
          architecto porro dolor maiores quo expedita. Itaque non, inventore
          blanditiis possimus voluptatem obcaecati ducimus aliquam harum ipsam
          ut, quia maiores?
        </p>
      </div>
    </div>
  );
}
