import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { Row, Col, Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap'
import noCover from '../images/cover_not_found.jpg'

const API = () => {
    const [data, setData] = useState(null)
    const fetchData = (searchTerm) => {
        const apiUrl = `https://openlibrary.org/search.json?title=${searchTerm}`
        fetch(apiUrl)
            .then(response => response.json())
            .then(json => { setData(json) })
    }

    return (
        <>
            <SearchBar onSearch={fetchData} />
            <div className="books container">
                <Row className='' style={{ marginTop: "100px" }}>
                    {data && data.docs.map((item) => (
                        <Col md="3">
                            <Card style={{ width: '18rem' }} className='my-3'>
                                {item.cover_i ? (
                                    <img
                                        alt={`Cover for ${item.title}`}
                                        src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`}
                                        className="card-img-top"
                                        style={{ width: '100%' }}
                                    />
                                ) : (
                                    <img
                                        alt={`Default Cover for ${item.title}`}
                                        src={noCover}// Change this to the path of your local image
                                        className="card-img-top"
                                        style={{ width: '100%' }}
                                    />
                                )}
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {item.title}
                                    </CardTitle>
                                </CardBody>
                                <ListGroup flush>
                                    <ListGroupItem style={{textOverflow:"ellipsis"}}>
                                        {item.author_name && `Author: ${item.author_name.join(', ')}`}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        {item.publish_date && `Publish Date: ${item.publish_date[0]}`}
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default API
