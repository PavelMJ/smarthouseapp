import React from 'react'
import { Link } from 'react-router-dom'

export default function Allrooms({ rooms }) {

	return (
		<div className='AllRooms page'>
			<p style={{ fontSize: '25px', margin: '0' }}>All Rooms</p>


			<div className='place'>
				{rooms.map((val, index) => {
					return <Link to={`room${val.name}`} style={{
						textDecoration: 'none'

					}} key={index}><div className='roomButton' >
							<div style={{ backgroundColor: '#ffff', borderRadius: '8px 0 0 8px' }}>
								<img src={`img/${val.type}.svg`} alt="icon" style={{ width: "50%", height: '100%', margin: '0 5px 0 20px' }} />
							</div>
							<div className='flexRow' style={{
								backgroundColor: val.color,
								color: 'white',
								width: "80%",
								height: '100%',
								borderRadius: '0 8px 8px 0',
								margin: '0',
								justifyContent:'space-between'
							}}>
								<p style={{
									fontSize: '25px',
									textDecoration: 'none',
									margin: '13px 0 0 25px'
								}}>{val.name}</p>
								<div className='flexCenter trashcan'><img style={{width:'60%'}} src="img/trashcan.svg" alt="" /></div>
							</div>
						</div></Link>
				})}
			</div>
			<Link to={'/AddRoom'}><button className='addButton'><img style={{ width: '60px', }} src="img/plus.svg" alt="" /></button></Link>

		</div>

	)
}
