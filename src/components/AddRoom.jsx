import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default function AddRoom({createRoom}) {
	const nav = useNavigate()

	const [name, setName]=useState('')
	const [type, setType]=useState('')
	const [color,setColor]=useState('')


	return (
		<div className='AddRoom page'>
			<div style={{ fontSize: '22px' }}>Add Room</div>
			<div className='place center flexCenter'>
				<p style={{ fontSize: "20px", textAlign: 'center', color: '' }}>Parameters of the room</p>
				<input onChange={(el)=>{
					setName(el.target.value)
				}} className='input' type="text" placeholder='Room name' />
				<select style={{color: '#373737' }} onChange={(el)=>{setType(el.target.value)}} className='input'>
					<option value="">Type of Room</option>
					<option value="kitchen">Kitchen</option>
					<option value="bathroom">Bathroom</option>
					<option value="livingRoom">Living room</option>
					<option value="bedroom">Bedroom</option>

				</select>
				<select style={{color: '#3B6FD2' }} onChange={(el)=>{setColor(el.target.value)}} className='input'>Room Color
					<option style={{ color: '#3B6FD2' }} value="">Room Color</option>
					<option style={{backgroundColor:'#FF623F'}} value="#FF623F">orange </option>
					<option style={{backgroundColor:'#5CC1D7'}} value="#5CC1D7">cyan</option>
					<option style={{backgroundColor:'#53DB32'}} value="#53DB32">green</option>
					<option style={{backgroundColor:'#A83AEC'}} value="#A83AEC">violett</option>
				</select>
				<button onClick={()=>{createRoom(name, type, color); nav('/')}} className='addButton roomAdd'>Add</button>
			</div>
		</div>
	)
}
