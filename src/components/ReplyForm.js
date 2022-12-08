import React,{useState} from "react";
import { BsFillChatSquareFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux'
import {listComments,createReply} from '../actions/commentActions'

const ReplyForm=({comment})=>{
	const dispatch=useDispatch();

	const [openReplyForm,setOpenReplyForm]=useState(false);
	const [reply,setReply]=useState("");

	const handleSubmit= (e)=> {
		e.preventDefault();
		dispatch(createReply(reply,comment.id))
		setReply("");
		dispatch(listComments());
	}

	return (
		<>
		  {
		  	openReplyForm ?
		  	(
		  	<form className="mt-5" onSubmit={handleSubmit}>
		  		<div className="form-group">
		  			<textarea placeholder="Do reply.." 
		  					className="form-control"
		  					required aria-required="true"
		  					value={reply}
		  					onChange={e=>setReply(e.target.value)}
		  					></textarea>
		  		</div>
		  		<div className="form-group text-end ">
		  			<button
						type="button"
						onClick={()=>setOpenReplyForm(false)}
						className="btn text-danger"
					>
					Cancel
		  				</button>
		  			<button type="submit" className="btn text-dark me-3">
		  			Reply</button>
		  		</div>
		  	</form>
		  	):
		  	(
		  	<p
				onClick={()=>setOpenReplyForm(true)}
				className="btn text-dark text-start"
				style={{cursor:"pointer",marginLeft:0}}
			>
			<span style={{marginRight:5}}>
             	<BsFillChatSquareFill size={15}/>
            </span>
			Reply
			</p>

		  )}
			
		</>
		);
};

export default ReplyForm;