import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AddRoom from './components/AddRoom';
import Allrooms from './components/Allrooms';
import Room from './components/Room'
import NavBar from './components/NavBar';




function App() {


	const[rooms,setRooms]=useState([{ name: 'Salon', type: 'livingRoom', color: '#D23BBA', products:[{condition: false, type: "stereo"}]}])

	const createRoom = (name, type, color) => {
		setRooms([...rooms, { name: name, type: type, color: color, products:[]}])
	}
	

	const addDevice=(index, typeOfDevice)=>{
		let temp = {condition: false, type: typeOfDevice}
		rooms[index].products.push(temp)
		setRooms([...rooms])
	}

	const switchCondition =(index, deviceIndex)=>{

		rooms[index].products[deviceIndex].condition = !rooms[index].products[deviceIndex].condition
		setRooms([...rooms])
	}

	console.log(rooms)

	return (

		<div className="App">
	
			<BrowserRouter>
				<NavBar/>

				<Routes>
					<Route path='/' element={<Allrooms rooms={rooms} />} />
					<Route path='/AddRoom' element={<AddRoom createRoom={createRoom} />} />
					{rooms.map((val, index) => {
						return <Route path={`room${val.name}`} element={
						<Room
							key={index}
							index={index}
							name={val.name}
							type={val.type}
							color={val.color}
							products={val.products} 
							addDevice={addDevice}
							switchCondition={switchCondition}
							/>}	key={index}
							
							/>

					})}

				</Routes>
			</BrowserRouter>


			{/* <div className='allRooms'></div> */}
		</div>
	);
}

export default App;
