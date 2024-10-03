/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { instance } from "../axios";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
// eslint-disable-next-line no-unused-vars
import Button from 'react-bootstrap/Button'; // no need to disable this ESLint rule now
import { useNavigate } from "react-router-dom";

const CardList2 = () => {
    const [posts, setPosts] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null); // To store the clicked post data
    // eslint-disable-next-line no-unused-vars
    const [cart, setCart] = useState([]); // New state to store cart items
    const navigate = useNavigate();

    useEffect(() => {
        instance.get(`post`).then(res => setPosts(res.data));
    }, []);

    const handleEdit = (id) => {
        navigate(`/allproducts/edit/${id}`);
    };

    const handleCardClick = (post) => {
        setSelectedPost(post);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    const handleDelete = (id) => {
        if (window.confirm("Bu postni o'chirishni xohlaysizmi?")) {
            instance.delete(`post/${id}`).then(() => {
                setPosts(posts.filter((post) => post._id !== id));
                alert("Post muvaffaqiyatli o'chirildi!");
            }).catch((err) => {
                console.error("O'chirishda xatolik yuz berdi:", err);
                alert("Postni o'chirishda xatolik yuz berdi.");
            });
        }
    };

    return (
        <div className="grid">
            {posts.map((value) => (
                <Card key={value._id} style={{ width: '18rem' }} onClick={() => handleCardClick(value)}>
                    <Card.Img variant="top" src={value.img} />
                    <Card.Body>
                        <Card.Title>{value.name}</Card.Title>
                        <Card.Text style={{ color: 'grey' }}>
                            {value.desc}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{value.cost} so'm</ListGroup.Item>
                        {/* <ListGroup.Item>{value.Category}</ListGroup.Item> */}
                        <ListGroup.Item style={{ color: 'grey' }}>Rating: ★★★★☆</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <br /><br />
                        <button
                            style={{ backgroundColor: 'aliceblue', border: 'none', padding: '10px', width: '100%' }}
                            onClick={() => handleEdit(value._id)}
                        >
                            Edit
                        </button>
                        <br /><br />
                        <button
                            style={{ backgroundColor: 'red', border: 'none', padding: '10px', width: '100%' }}
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent card click event when delete button is clicked
                                handleDelete(value._id);
                            }}
                        >
                            Delete
                        </button>
                    </Card.Body>
                </Card>
            ))}

            {/* Modal to display the selected post details */}
            {selectedPost && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedPost.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex">
                        <img src={selectedPost.img} alt={selectedPost.name} style={{ width: '100%' }} />
                        <p>{selectedPost.desc}</p>
                    </Modal.Body>
                    <br />
                    <br />
                    <p>Cost: {selectedPost.cost} so'm</p>
                    <p>Rating: ★★★★☆</p>
                </Modal>
            )}
        </div>
    );
};

export default CardList2;
