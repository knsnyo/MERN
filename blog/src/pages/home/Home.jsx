import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Siderbar from "../../components/sidebar/Siderbar";
import "./home.css";

export default function Home() {
	return (
		<>
		  <Header/>
	    <div className="home">
				<Posts/>
				<Siderbar/>
		  </div>
		</>
	);
}
