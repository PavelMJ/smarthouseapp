import React from 'react'
import { Link } from 'react-router-dom'

export default function Allrooms({ rooms, deleteRoom }) {

	return (
		<div className='AllRooms page'>
			<p style={{ fontSize: '25px', margin: '0' }}>All Rooms</p>


			<div className='place'>
				{rooms.map((val, index) => {
					return <div className='roomButton' style={{backgroundColor: val.color,}}>
						<Link className='flexRow' to={`room${val.name}`} style={{textDecoration: 'none', cursor:'pointer'}} key={index}>
							
								<div className='flexCenter' style={{ backgroundColor: '#ffff', borderRadius: '8px 0 0 8px',height: '100%',width:'100px' }}>
									<img src={`img/${val.type}.svg`} alt="icon" style={{ width: "50%"}} />
								</div>
							
									<p style={{
										margin:'15px 0 0 50px',
										fontSize: '25px',
										color:'white'
									}}>{val.name}</p>
								
							</Link>
						<div className='flexCenter trashcan' onClick={() => { deleteRoom(val.name) }}><img style={{ width: '60%' }} src="img/trashcan.svg" alt="" /></div>

					</div>
				})}
			</div>
			<Link to={'/AddRoom'}><button className='addButton'><img style={{ width: '60px', }} src="img/plus.svg" alt="" /></button></Link>

		</div>

	)
}
