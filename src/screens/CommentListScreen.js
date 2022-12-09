import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col,Container } from 'react-bootstrap'
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux'
import { listComments} from '../actions/commentActions'
import { COMMENT_CREATE_RESET } from '../constants/commentConstants'
import { useNavigate } from 'react-router-dom';
import CommentForm from '../components/CommentForm'
import ReplyForm from '../components/ReplyForm';
import ShowReplies from '../components/ShowReplies';
import { timeAgo} from '../utils/conversion';
import Header from '../components/Header'

function CommentListScreen() {

    const now = moment(new Date());

    const dispatch = useDispatch()
    let navigate = useNavigate();

    const commentList = useSelector(state => state.commentList)
    const { loading, error, comments} = commentList

    const userLogin = useSelector(state => state.userLogin)
    const { userLoginError, userLoginLoading, userInfo } = userLogin
    console.log('i',userInfo===null)

    useEffect(() => {
        if (userInfo) {
            dispatch(listComments());
        }
        else{
            navigate('/login')
        }

    }, [dispatch,navigate,userInfo])

    
    return (
        <Container>
        <Header />
        <div className="d-flex">
            
            <div className="col-md-12" style={{marginTop:30}}>
                <p>Comment as {userInfo.user.username}</p>
                <CommentForm/>
            <div className="col-md-12 pe-5 mt-5">
            {
                comments.map((comment)=>{

                const then = moment.duration(now.diff(comment.created_at));
                return (
                 <div className="w-100 card border border-dark px-5 py-3 my-2" style={{marginLeft:0}}>
                     <div className='w-100 d-flex align-items-center justify-content-between'>
                         <div className="d-flex">
                             <p className="my-0 text-capitalize text-white bg-dark py-2 me-4 px-3 rounded-circle" 
                             >
                              {comment.username[0]}
                             </p>
                             <div style={{marginTop:10,marginLeft:-10}}>
                                <p className="my-0 card-title">{comment.username}
                                    <span className="pl-2"> - {timeAgo(then.asMinutes())} </span>
                                </p>
                             </div>
                        </div>
                    </div>
                    <p className='mt-4'>{comment.description}</p>
                    <ReplyForm comment={comment} />
                    <div className="form-group px-3">

                        {
                            comment.replies.map((reply)=>{
                            const then = moment.duration(now.diff(reply.created_at));
                            return (
                             <div className="w-100 card border border-dark px-5 py-3 my-2" style={{marginLeft:-12}}>
                                 <div className='w-100 d-flex align-items-center justify-content-between'>
                                     <div className="d-flex">
                                         <p className="my-0 text-capitalize text-white bg-dark py-2 me-4 px-3 rounded-circle" 
                                         >
                                          {reply.username[0]}
                                         </p>
                                         <div style={{marginTop:10,marginLeft:-10}}>
                                            <p className="my-0 card-title">{reply.username}
                                            <span className="pl-2"> - {timeAgo(then.asMinutes())} </span>
                                            </p>
                                         </div>
                                    </div>
                                </div>
                                <p className='mt-4'>{reply.description}</p>
                                <ReplyForm comment={comment} />
                                <div className="form-group px-3">

                                </div>
                                    
                            </div>
                            )
                            }
                            )
                        }

                    </div>
                        
                </div>
                )
                }
                )
                }
            
            </div>
            </div>
        </div>
        </Container>
    )
}

export default CommentListScreen