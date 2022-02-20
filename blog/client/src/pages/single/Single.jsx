import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";

export default function Single() {
  const location = useLocation();
  //console.log(location);
  const path = location.pathname.split("/")[2];

  useEffect(()=>{
    const getPost = async () => {
      const res = await axiox.get("/posts/" + path);
      console.log(res);
    };
    getPost();
  }, [path]);

  return (
    <div className="single">
      <SinglePost/>
			<Sidebar/>
    </div>
  );
}
