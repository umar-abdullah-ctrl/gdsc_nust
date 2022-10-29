import React, {useState} from 'react'

export const Body = () => {
	const [data, set_fetched_data] = useState(null)
	if (!data) {
		fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then((response)=>response.json()).then((data)=>{
			set_fetched_data(data)
			console.log(data.data)
		})
	}
	return (
		<div className='body'>
			{JSON.stringify(data)}
		</div>
	)
}
