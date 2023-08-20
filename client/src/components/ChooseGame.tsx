import { Container, Row } from "react-bootstrap"
import CardGame from "./CardGame"
import { useEffect, useState } from "react"
import { getGames } from "../api/games";
import { useNavigate } from "react-router-dom";

function ChooseGame() {
	const [games, setGames] = useState<any[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		if(!localStorage.getItem('userName')){
			navigate('/');
		} else {
			getGames(setGames);
		}
	},[])

  	return (
  	  <>
			<Container>
  	          	<h1 className="m-3"><i className="bi bi-controller me-3"></i>Choose games</h1>
  	          	<Row className="justify-content-between">
					{games.map((el) => <CardGame key={el._id} name={el.gameName} descr={el.description} img={el.img}/>)}
  	          	</Row>
		    </Container>
  	  </>
  	)
}

export default ChooseGame