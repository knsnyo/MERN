import "./write.css";
import WriteBackground from "./img/writeBackground.png";

export default function Write() {
  return (
    <div className="write">
			<img className="writeImg" src={WriteBackground} alt=""/>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus-square"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          />
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
