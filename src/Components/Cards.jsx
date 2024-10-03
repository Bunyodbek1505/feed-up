/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Modal from 'react-bootstrap/Modal'
import { instance } from '../axios'

const CardList2 = () => {
    const [posts, setPosts] = useState([]) // Mahsulotlar ro'yxati
    const [cart, setCart] = useState([]) // Savatcha
    const [show, setShow] = useState(false) // Modalni ko'rsatish
    const [selectedPost, setSelectedPost] = useState(null) // Tanlangan mahsulot
    const [totalPrice, setTotalPrice] = useState(0) // Savatchaning umumiy narxi

    // Mahsulotlarni olish
    useEffect(() => {
        instance
            .get('post')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    }, [])

    // Savatchadagi mahsulotlarni olish
    useEffect(() => {
        instance
            .get('cart')
            .then(res => {
                setCart(res.data)
                const total = res.data.reduce((sum, item) => sum + Number(item.cost) || 0, 0) // Narxlarni son formatida qo'shish
                setTotalPrice(total) // Savatchaning umumiy narxini hisoblash
            })
            .catch(err => console.log(err))
    }, [])

    // Mahsulot kartasini bosganda modal ochish
    const handleCardClick = post => {
        setSelectedPost(post)
        setShow(true)
    }

    const handleClose = () => setShow(false) // Modalni yopish

    // Savatchaga qo'shish funksiyasi
    const handleSavat = (id, name, cost, img, title) => {
        const newCartItem = { id, name, cost: Number(cost), img, title } // Narxni son formatida saqlash
        instance
            .post('cart', newCartItem) // Savatchaga qo'shishni saqlash
            .then(() => {
                setCart(prevCart => [...prevCart, newCartItem])
                setTotalPrice(prevTotal => prevTotal + Number(cost)) // Narxni son formatida qo'shish
            })
            .catch(err => console.log(err))
    }

    // Savatchani tozalash funksiyasi
    const handleClearCart = () => {
        // Har bir mahsulotni alohida o'chirish
        const deletePromises = cart.map(item => instance.delete(`cart/${item._id}`)) // To'g'ri endpoint bo'lishi mumkin: cart/:id
        Promise.all(deletePromises)
            .then(() => {
                setCart([]) // Savatchani bo'shatish
                setTotalPrice(0) // Umumiy narxni 0 ga tushirish
            })
            .catch(err => console.log(err))
    }

    // Narxlarni formatlash funksiyasi
    const formatPrice = price => {
        return Number(price).toLocaleString('uz-UZ') // Narxni son formatida formatlash
    }

    return (
        <>
            {/* Mahsulotlar ro'yxati */}
            {posts.map(value => (
                <Card
                    key={value._id}
                    style={{ width: '18rem' }}
                    onClick={() => handleCardClick(value)}
                >
                    <Card.Img variant='top' src={value.img} alt={value.name} />
                    <Card.Body>
                        <Card.Title>{value.name}</Card.Title>
                        <Card.Text style={{ color: 'grey' }}>{value.desc}</Card.Text>
                    </Card.Body>
                    <ListGroup className='list-group-flush'>
                        <ListGroup.Item>{formatPrice(value.cost)} so'm</ListGroup.Item>{' '}
                        {/* Narxni formatlash */}
                        <ListGroup.Item style={{ color: 'grey' }}>
                            Rating: ★★★★☆
                        </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <button
                            type='button'
                            style={{
                                backgroundColor: 'yellow',
                                border: 'none',
                                padding: '10px',
                                width: '100%',
                            }}
                            onClick={e => {
                                e.stopPropagation()
                                handleSavat(
                                    value._id,
                                    value.name,
                                    value.cost,
                                    value.img,
                                    value.desc
                                )
                            }}
                        >
                            Savatchaga qo'shish
                        </button>
                    </Card.Body>
                </Card>
            ))}

            {/* Savatcha */}
            <div
                style={{
                    marginTop: '20px',
                    padding: '10px',
                    backgroundColor: '#f9f9f9',
                    border: '1px solid #ccc',
                    marginLeft: '800px',
                    width: '350px',
                }}
            >
                <h3>Savatcha</h3>
                {cart.length > 0 ? (
                    <div>
                        <ul>
                            {cart.map((item, index) => (
                                <ul key={item._id || index}>
                                    <li>
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            style={{ width: '100px' }}
                                        />
                                    </li>
                                    <li>{item.title}</li>
                                    <li>
                                        {item.name} - {formatPrice(item.cost)} so'm
                                    </li>
                                </ul>
                            ))}
                        </ul>
                        <button onClick={handleClearCart}>Savatchani tozalash</button> {/* Clear tugmasi */}
                    </div>
                ) : (
                    <p>Savatchada hech narsa yo'q.</p>
                )}
                {/* Umumiy narxni formatlash */}
                <h4>Umumiy narx: {formatPrice(totalPrice)} so'm</h4>
            </div>

            {/* Modalni ko'rsatish */}
            {selectedPost && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedPost.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='d-flex'>
                        <img
                            src={selectedPost.img}
                            alt={selectedPost.name}
                            style={{ width: '100%' }}
                        />
                        <p>{selectedPost.desc}</p>
                    </Modal.Body>
                    <p>Cost: {formatPrice(selectedPost.cost)} so'm</p>{' '}
                    {/* Modalda ham narxni formatlash */}
                    <p>Rating: ★★★★☆</p>
                </Modal>
            )}
        </>
    )
}

export default CardList2
