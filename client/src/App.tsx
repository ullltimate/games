import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { addName } from './api/user';
import { useNavigate } from 'react-router-dom';

function App() {
	const [name, setName] = useState('');
	const navigate = useNavigate();

	useEffect(()=>{
		if(localStorage.getItem('userName')){
			navigate('/games');
		}
	},[])

	async function newGame(e:any){
		e.preventDefault();
		if(name){
			await addName(name);
			navigate('/games');
		}
	}

  return (
    <>
	<Container>
		<Row style={{ height: '100vh' }} className='align-items-center'>
			<Col>
				<Card border="success" style={{ width: '20rem' }} className='p-3 mx-auto text-center'>
      				<Card.Body>
					  	<Form onSubmit={newGame}>
    					  	<Form.Group className="mb-3 text-start" controlId="formBasicEmail">
    					  	  <Form.Label>Your name:</Form.Label>
    					  	  <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
    					  	</Form.Group>
    					  	<Button variant="success" type="submit">
    					  	  New game
    					  	</Button>
    					</Form>
      				</Card.Body>
    			</Card>
			</Col>
		</Row>
	</Container>
    </>
  )
}

export default App
