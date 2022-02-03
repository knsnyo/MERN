import Siderbar from "../../components/sidebar/Siderbar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
			<Siderbar/>
    </div>
  );
}
