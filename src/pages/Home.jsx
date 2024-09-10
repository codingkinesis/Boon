import { useNavigate } from "react-router-dom";


export function Home() {

    const navigate = useNavigate();

  return (
    <div className="home-layout">
      <button className="user-btn simple-button" onClick={()=>navigate("/boon/user")}>User</button>
      <button className="play-btn simple-button" onClick={()=>navigate("/boon/game")}>Play</button>
    </div>
  )
}