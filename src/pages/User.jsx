import { useNavigate } from "react-router-dom";


export function User() {

    const navigate = useNavigate();

  return (
    <div className="user-layout">
        <button className="user-btn simple-button" onClick={()=>navigate("/boon/home")}>Home</button>
    </div>
  )
}