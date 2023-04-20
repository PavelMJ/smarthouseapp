import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Room({ index, name, type, color, products, addDevice,switchCondition }) {

	const [device, setDevice] = useState('')
	// const [toggle, setToggle] = useState(false)


	return (
		<div className='Room page' style={{ backgroundColor: color }}>
			<div className='header roomHeader' >
				<img style={{ width: '10%', margin: '10px' }} src={`img/${type}.svg`} alt="icon" />
				<h1>{name}</h1>
			</div>
			<div onChange={(el) => { setDevice(el.target.value) }} className='header addDevice' style={{ height: '34px' }}>
				<select className='input' name="devices" style={{color:'#373737'}} value={device}>
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
					 addDevice(index, device);
					 setDevice('')
				 }} className='button'>add device</button>
			</div>
			<div className='place devices'>
				{products.map((val, deviceIndex) => {

					return <div key={deviceIndex} className='flexRow' >
					<Link  to={`device${val.type}`} 
						style={
							{
								width:'100%',
								height: '65px',
								textDecoration: 'none',
								textAlign: "center",
								margin: '5px',
								backgroundColor: '#D9D9D9',
								borderRadius: '6px'
							}}>
						<div className='roomButton'>
							<img src={`img/${val.type}.svg`} alt="ico"
								style={
									{
										width: "15%",
										height: '100%',
										margin: '5px'
									}} />
							<div style={
								{
									width: '60%',
									height: "100%",
									borderRadius: '6px',
									backgroundColor: "#FFFFF"
								}}>
								<p style={{ fontSize: '20px', margin: '10px' }} >{val.type}</p>
							</div>
						</div>
						</Link>
						<div className='toggle' onClick={() => {switchCondition(index,deviceIndex)}}> <img src={`${products[deviceIndex].condition === true ? 'img/On icon.svg' : 'img/OFF icon.svg'}`} alt="in" /> </div>
						</div>

				})}
			</div>



		</div>
	)
}
