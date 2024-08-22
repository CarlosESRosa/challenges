import "./App.css";
import trashIcon from "./img/trash-can.png";
import likeIcon from "./img/like.png";
import loveIcon from "./img/love.png";
function App() {
  return (
    <>
      <h1>LEFT OR RIGHT?</h1>

      <div className="container">
        <div className="card-2">
          <div className="trash-container">
            <div className="trash-box">
              <img src={trashIcon} alt="trash icon"></img>
            </div>
          </div>
          <h3>Delete Account?</h3>
          <p>
            Are you sure you want to <span> delete your account?</span>
          </p>
          <div className="buttons-box">
            <button id="delete">Delete</button>
            <button id="cancel">Cancel</button>
          </div>
        </div>

        <div className="card-1">
          <div className="trash-container">
            <div className="trash-box">
              <img src={trashIcon} alt="trash icon"></img>
            </div>
          </div>
          <h3>Delete Account?</h3>
          <p>
            Are you sure you want to <span> delete your account?</span>
          </p>
          <div className="buttons-box">
            <button id="delete">Delete</button>
            <button id="cancel">Cancel</button>
          </div>
        </div>
      </div>
      <div className="like-box">
        <div className="like-container">
          <div>
            <img src={likeIcon}></img>
          </div>
        </div>
        <div className="love-container">
          <div>
            <img src={loveIcon}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
