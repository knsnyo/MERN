import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Profile from "../../img/profile.png";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={Profile} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
					<label>Username</label>
            <input type="text" placeholder="abc" />
            <label>Email</label>
            <input type="email" placeholder="abc@email.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
