import React , { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {listComments, createComment} from '../actions/commentActions'

const CommentForm = ()=>{

	const [comment,setComment]=useState("");

	const dispatch=useDispatch();

	const handleSubmit= (e)=> {
		e.preventDefault();
		dispatch(createComment(comment))
		setComment("");
		dispatch(listComments());
	}

	return (
		<form className= "w-100 pe-5" onSubmit={handleSubmit}>
			<div className="form-group">
				<textarea
					className="form-control"
					required aria-required="true"
					placeholder="What are yours thoughts?"
					value={comment}
					onChange={e=>setComment(e.target.value)}

					>
				</textarea>
			</div>
			<div className="form-group d-flex mb-2 gap-2">
			 <input type="submit" className="form-control btn text-end btn-light" value="Add Comment" />
			</div>
		</form>
		)
};

export default CommentForm