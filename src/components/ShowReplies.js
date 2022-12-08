import React , {useState} from 'react'

const ShowReplies = ({allReplies})=>{
	const [replies,setReplies]=useState(false);

	return (
		<>
		 <button className="btn text-primary mt-4">
		 	{replies ? "Hide":"View"} {allReplies.length} reply(s)
		 </button>
		</>
		);
}

export default ShowReplies