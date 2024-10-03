import { Link } from "react-router-dom"

const Yangiliklar = () => {
    return (
        <>
            <div className="top">
                <h3 style={{ display: 'flex' }}>Bosh sahifa / <strong style={{ color: 'yellow', marginLeft: '10px' }}>Yangiliklar</strong></h3>
                <hr />
            </div>
            <div className="bottom">
                <div className="baner">
                    <h5>Biz haqimizda</h5>
                    <br />
                </div>
                <div className="baner_bottomn d-flex">
                    <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fmedia%2Fnews%2Ffeedup_drink_1.jpg&w=640&q=75" alt="" />
                    <div className="d-flex baner_corp">
                        <div>
                            <div className="bottom_baner_bottom baner_width">
                                <h5>Asoschisi</h5>
                                <br />
                                <p>Kompaniyaga 2010-yilda Umid Irgashev tomonidan asos solingan.</p>
                                <p>Hozirga kelib kompaniyamizda 600 ga yaqin xodimlar ishlaydi</p>
                            </div>
                            <div className="bottom_baner_bottom">
                                <h5>FeedUp haqida</h5>
                                <br />
                                <p>Feed Up bu Ozbekistondagi tez taomlanish tarmogi bolib , 34 ta filialga ega</p>
                                <p>Birinchi filial Algoritmda ochilgan, kompaniya dastlab Dastyor nomi bilan, keyin Bisyor nomi bilan faoliyat yuritgan</p>
                                <p>2016-yilda kompaniya oldiga katta maqsadlar rejalar qoyiladi va kompaniya rebrending amalga oshirib hozirgi siz bilgan Feed Up tarmogiga aylantiriladi!</p>
                            </div>
                            <div className="bottom_baner_bottom baner_width">
                                <h5>Taklif va hamkorlik uchun</h5>
                                <br />
                                <div className="">
                                    <div><p>Ofis manzili: </p></div>
                                    <div><Link> Toshkent shahar, Shayxontohur tumani, Qoratosh kochasi 10B uy</Link></div>
                                </div>
                                <div className="">
                                    <div><p>Ish vaqti: </p></div>
                                    <div><p style={{ marginLeft: '5px' }}>9:00 - 18:00</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Yangiliklar