import { useEffect, useState } from "react"
import '../js files/app'
import { instance } from "../axios"
import { useParams } from "react-router-dom"

const Admin = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [cost, setCost] = useState('')
    const [img, setImg] = useState('')
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            instance.get(`post/${id}`).then(res => {
                setName(res.data.name);
                setDesc(res.data.desc);
                setCost(res.data.cost);
                setImg(res.data.img);
            }).catch(err => {
                console.error('Xatolik yuz berdi:', err);
            });
        }
    }, [id]);

    const handleSubmit = e => {
        e.preventDefault();
        if (id) {
            instance.put(`post/${id}`, { name, desc, cost, img }).then(res => {
                console.log('Post yangilandi:', res.data);
            }).catch(err => {
                console.error('Post yangilanishida xatolik:', err);
            });
        } else {
            instance.post('post', { name, desc, cost, img }).then(res => {
                console.log("Post yaratildi:", res.data);
            }).catch(err => {
                console.error('Post yaratishda xatolik:', err);
            });
        }
        
    };


    return (
        <>
            <form className="form" action="" onSubmit={handleSubmit}>
                <br />
                <label htmlFor="">Product img url:</label>
                <br />
                <input type="text" placeholder="URL" value={img} onChange={e => setImg(e.target.value)} />
                <br />
                <label htmlFor="">Product name</label>
                <br />
                <input type="text" placeholder="Product name" value={name} onChange={e => setName(e.target.value)} />
                <br />
                <label htmlFor="">Product Description</label>
                <br />
                <input type="text" placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
                <br />
                <label htmlFor="">Product Cost</label>
                <br />
                <input type="text" placeholder="Product cost" value={cost} onChange={e => setCost(e.target.value)} />
                <br />
                <div>
                    <br />
                    <button type="submit" className="btn btn-warning">{id ? "Update post" : "Create"}</button>
                </div>
            </form>
        </>
    )
}

export default Admin