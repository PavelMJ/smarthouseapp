import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Room({ index, name, type, color, products, addDevice, switchCondition, deleteDevice }) {

	const [device, setDevice] = useState('')
	const [id, setID] = useState(1)


	// const [toggle, setToggle] = useState(false)
	console.log(id);

	return (
		<div className='Room page' style={{ backgroundColor: color }}>
			<div className='header roomHeader' >
				<img style={{ width: '10%', margin: '10px' }} src={`img/${type}.svg`} alt="icon" />
				<h1>{name}</h1>
			</div>
			<div onChange={(el) => { setDevice(el.target.value) }} className='header addDevice' style={{ height: '34px' }}>
				<select className='input' name="devices" style={{ color: '#373737' }} value={device}>
					<option value="" >Choose device</option>
					<option value="Speaker">Speaker</option>
					<option value="Lamp">Lamp</option>
					<option value="Air Conditioner">Air Conditioner</option>
					<option value="Microwave">Microwave</option>
					<option value="TV">TV</option>
					<option value="Oven">Oven</option>
					<option value="Stereo">Stereo System</option>
					<option value="Boiler">Boiler</option>
				</select>
				<button onClick={() => {
					addDevice(id, index, device,);
					setDevice('');
					setID(id + 1)

				}} className='button'>add device</button>
			</div>
			<div className='place devices'>
				{products.map((val, deviceIndex) => {

					return <div key={deviceIndex} className='roomButton' style={
						{
							width: '97%',
							textAlign: "center",
							margin: '5px',
							backgroundColor: '#D9D9D9',
							borderRadius: '8px',
							justifyContent: 'space-between'

						}} >
						<Link to={`device${val.type}`} style={{ textDecoration: 'none', width:'70%',height:'100%' }} >
							<div className='flexRow' style={
								{

								}}>
								<img src={`img/${val.type}.svg`} alt="ico"
									style={
										{
											width: "25%",
											height: '100%',
											margin: '10px'
										}} />
								<div style={{ height: '100%', width: '40%', textAlign: 'left' }}><p style={{ fontSize: '20px ', margin: '10px 30px', color: 'black' }} >{val.type}</p></div>
							</div>
						</Link>
						<div  onClick={() => { switchCondition(index, deviceIndex) }} style={{width:'20%',height:'100%'}} > <img className='toggle' src={`${products[deviceIndex].condition === true ? 'img/On icon.svg' : 'img/OFF icon.svg'}`} alt="in" /> </div>
						<div onClick={() => { deleteDevice(index, val.id) }} className='flexCenter exe'><p style={{ margin: '0 0 5px 0' }}>x</p></div>
					</div>

				})}
			</div>



		</div>
	)
}
