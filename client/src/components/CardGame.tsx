import { Button, Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

function CardGame(props: any) {

  return (
    <>
        <Col className="m-3">
	    	<Card className="p-3 h-100 text-center" border="success">
        	  	<Card.Img variant="top" src={props.img} style={{ width: '15rem', height: '15rem'}} className="mx-auto"/>
        	  	<Card.Body>
        	  	    <Card.Title className="text-uppercase">{props.name}</Card.Title>
        	  	    <Card.Text className="text-justify">{props.descr}</Card.Text>
        	  	</Card.Body>
                <Card.Footer className="bg-transparent">
                    <Link to={`/${props.name}`}>
                      <Button variant="success">Start game <i className="bi bi-joystick"></i></Button>
                    </Link>
                </Card.Footer>
        	</Card>
        </Col>
    </>
  )
}

export default CardGame