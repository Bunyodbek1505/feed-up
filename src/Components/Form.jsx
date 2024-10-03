/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form"
import { IoLocation } from "react-icons/io5"
import { Link } from "react-router-dom"


export default function Form() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => console.log(data)


    console.log(watch("example")) // watch input value by passing the name of it


    return (
        <div className="d-flex p-30">
            <div>
                <form style={{ border: '1px solid', padding: '10px' }} onSubmit={handleSubmit(onSubmit)}>
                    <div className="bottom xits">
                        <h3>BUYURTMA BERISH</h3>
                        <p>Shaxsiy ma'lumotlar</p>
                    </div>
                    <div className="d-flex">
                        <div style={{ marginRight: '10px' }}>
                            <label htmlFor="">Ism <span style={{ color: 'red' }}>*</span></label>
                            <br />
                            <input className="input" placeholder="Bu yerga kiriting" {...register("example", { required: true })} />
                            <br />
                            {errors.example && <span style={{ color: 'red' }}>This field is required</span>}
                            <br />
                        </div>
                        <div className="d-flex2">
                            <label htmlFor="">Telefon raqam <span style={{ color: 'red' }}>*</span></label>
                            <br />
                            <input className="input" type="tel" defaultValue={'+998 '} {...register("exampleRequired", { required: true })} />
                            <br />
                            {errors.exampleRequired && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>
                    </div>
                    <input type="submit" language="en" /><br />
                    <label>
                        Yetkazib berish <input className="checkbox" type="checkbox" id="checkbox" name="myCheckbox" checked />
                    </label>
                    <label>
                        Borib olish <input className="checkbox" type="checkbox" id="checkbox" name="myCheckbox" />
                    </label><br />
                    <label>
                        <IoLocation />
                        <Link to={''}>
                            Manzilini tanlang
                        </Link>
                    </label><br />
                    <label htmlFor="">
                        <h3>To'lov usuli</h3>
                        <div className="yellow_border d-flex">
                            <div className="d-flex">
                                <div>
                                    <img width={'30px'} height={'30px'} src="https://feedup.uz/_next/image?url=%2Fassets%2Fimages%2Fpng%2Fcash.png&w=48&q=75" alt="" />
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <div className="d-flex">
                                            <h3 style={{ marginLeft: '10px' }}> naqd pul</h3>
                                            <span>
                                                <input className="checkbox" type="checkbox" name="" id="" />
                                            </span>
                                        </div>
                                        <div style={{ marginLeft: '20px' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                    <br />
                    <label htmlFor="">
                        <h3>Izoh</h3>
                        <textarea className="yellow_border" name="" id="" placeholder="Masalan, 104-uy 2-yolak 4-qavat 103-xonadon eshik kodi 1234"></textarea>
                    </label>
                </form>
            </div>
            <div className="form2 ml-10">
                <div style={{ border: '1px solid', padding: '40px' }}>
                    <label htmlFor="">
                        <h3>Promo-kod</h3>
                    </label>
                    <br />
                    <input className="input2" type="text" placeholder="Bu yerga kiriting" /><button style={{ backgroundColor: 'yellow', border: 'none', padding: '20px' }}>Yuborish</button>
                    <hr />
                    <div className="">
                        <br />
                        <h4><strong>Jami</strong>: </h4>
                        <h5>Mahsulot:</h5>
                        <h5>Yetkazib berish:</h5>
                        <h5>Promo-kod:</h5>
                    </div>
                    <hr />
                    <div>
                        <h4><strong>To'lash</strong></h4>
                        <h5>Yetkazib berish vaqti:</h5>
                    </div>
                    <button className="form_button" type="submit"><strong>Buyurtma berish</strong></button>
                </div>

            </div>
        </div>
    )
}