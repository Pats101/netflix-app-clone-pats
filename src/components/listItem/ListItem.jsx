import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import "./ListItem.scss";

export default function ListItem() {
  return (
    <div className="listItem">
        <img src="https://i.annihil.us/u/prod/marvel/i/mg/9/f0/57fe4ef408a29/standard_incredible.jpg" alt="" />
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow/>
            <Add/>
            <ThumbUpAltOutlined/>
            <ThumbDownOutlined/>
          </div>
          <div className="itemInfoTop">
            <span>1 hour 14 mins</span>
            <span className="limit">+16</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odio iste in nihil dolorem dolor quos similique assumenda harum, ex blanditiis, voluptates sint fugit officiis sed delectus quis deserunt consequuntur.
          </div>
          <div className="genre">Sci-fi</div>
        </div>
    </div>
  )
}
