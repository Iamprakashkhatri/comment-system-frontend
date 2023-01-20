import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Paginate from '../components/Paginate'
import { listReplies } from '../actions/commentActions'
import Product from '../components/Product'
import { useLocation } from 'react-router-dom';


function ReplyListScreen({ history }) {
    const dispatch = useDispatch()
    const replyList = useSelector(state => state.replyList)
    const { error, loading, replies, page, pages } = replyList

    console.log('replies',replies)
    console.log('pages',pages)
    let location = useLocation();

    let keyword = location.search

    useEffect(() => {
        dispatch(listReplies(keyword))

    }, [dispatch, keyword])

    return (
        <div>
            <h1>Latest Products</h1>
            <div>
                <Row>
                    {replies.map(reply => (
                        <Col key={reply.id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={reply} />
                        </Col>
                    ))}
                </Row>
                <Paginate page={page} pages={pages}/>
            </div>
        </div>
    )
}

export default ReplyListScreen
