import { Link } from "react-router-dom"

const Bizhaqimizda = () => {
    return (
        <>
            <div className="top">
                <h3 style={{display: 'flex'}}>Bosh sahifa / <strong style={{color: 'yellow', marginLeft: '10px'}}>Biz haqimizda</strong></h3>
                <hr />
            </div>
            <div className="bottom">
                <div className="baner">
                    <h5>Biz haqimizda</h5>
                    <br />
                </div>
                <div className="baner_bottom">
                    <img src="https://feedup.uz/_next/image?url=%2Fassets%2Fimages%2Fpng%2Faboutus.png&w=1920&q=75" alt="" />
                    <div className="d-flex">
                        <div className="bottom_baner_bottom">
                            <h5>FeedUp haqida</h5>
                            <br />
                            <p>Feed Up bu Ozbekistondagi tez taomlanish tarmogi bolib , 34 ta filialga ega</p>
                            <p>Birinchi filial Algoritmda ochilgan, kompaniya dastlab Dastyor nomi bilan, keyin Bisyor nomi bilan faoliyat yuritgan</p>
                            <p>2016-yilda kompaniya oldiga katta maqsadlar rejalar qoyiladi va kompaniya rebrending amalga oshirib hozirgi siz bilgan Feed Up tarmogiga aylantiriladi!</p>
                        </div>
                        <div>
                            <div className="bottom_baner_bottom baner_width">
                                <h5>Asoschisi</h5>
                                <br />
                                <p>Kompaniyaga 2010-yilda Umid Irgashev tomonidan asos solingan.</p>
                                <p>Hozirga kelib kompaniyamizda 600 ga yaqin xodimlar ishlaydi</p>
                            </div>
                            <div className="bottom_baner_bottom baner_width">
                                <h5>Taklif va hamkorlik uchun</h5>
                                <br />
                                <div className="d-flex">
                                    <div><p>Ofis manzili: </p></div>
                                    <div><Link> Toshkent shahar, Shayxontohur tumani, Qoratosh kochasi 10B uy</Link></div>
                                </div>
                                <div className="d-flex">
                                    <div><p>Ish vaqti: </p></div>
                                    <div><p style={{marginLeft: '5px'}}>9:00 - 18:00</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div>
                    <div>
                        <img src="https://feedup.uz/assets/images/logos/logo.svg" alt="" />
                    </div>
                    <div>
                        <ul>
                            <li>Menyu</li>
                            <li>Filial</li>
                            <li>Ish orinlari</li>
                            <li>Yangiliklar</li>
                        </ul>
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
            </footer>
        </>
    )
}

export default Bizhaqimizda