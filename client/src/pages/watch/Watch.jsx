import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./Watch.scss";

export default function () {
  const location = useLocation();
  const movie = location.state?.movie;
  return (
    <div className="watch">
      <div className="back">
          <Link to="/netflix-app-clone-pats" className="link">
            <ArrowBackOutlined/>
            Home
          </Link>
      </div>
      <video 
        className="video" 
        autoPlay 
        progress 
        controls 
        src={movie.video}
      />
    </div>
  );
}
