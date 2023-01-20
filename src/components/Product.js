import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Product({ product }) {
    return (
        <Card className="my-3 p-3 rounded">

            <Card.Body>
                <Card.Text as="h3">
                    {product.id}
                </Card.Text>
                <Card.Text as="h3">
                    {product.username}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
