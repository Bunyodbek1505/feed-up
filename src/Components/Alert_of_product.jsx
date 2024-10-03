/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import { instance } from "../axios"
import { Alert } from "bootstrap";
import { HiOutlineXMark } from "react-icons/hi2";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";


const Alert_product = () => {
    const [posts, setPosts] = useState([])

    console.log(posts)

    useEffect(() => {
        instance.get(`post`).then(res => setPosts(res.data))
    }, [])
    // <div key={value._id}>
    //   <h1>{value.Title}</h1>
    //   <h1>{value.Desc}</h1>
    //   <h1>{value.Cost}</h1>
    // </div>
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
    };

    if (!visible) {
        return null;
    }

    return (
        <>
            {
                posts.map(value => {
                    return (
                        <Link to={''}>
                            <Alert className='Alert' style={{ width: '75%', marginLeft: '10%', position: 'absolute', zIndex: '999', top: '600px' }}>
                                <div>
                                    <img width={'50%'} src={value.Img} alt="" />
                                </div>
                                <div>
                                    <h3>{value.Title}</h3>
                                    <p>{value.Desc}</p>
                                    <ListGroup.Item>{value.Cost} so'm</ListGroup.Item>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <button className='alert_button' onClick={handleClose}>
                                        <HiOutlineXMark style={{ fontSize: '25px' }} />
                                    </button>
                                </div>
                            </Alert>
                        </Link>
                    )
                })
            }

        </>
    )
}

export default Alert_product