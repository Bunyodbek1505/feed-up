import Card from 'react-bootstrap/Card';
import OutlineTypesExample from './Button';
import { IoPersonAdd } from "react-icons/io5";

function TextExample() {
    return (
        <>
            <div className='grid'>
                <div className='ish_orinlari_card'>
                    <Card>
                        <Card.Body>
                            <div className='d-flex justify-between'>
                                <div>
                                    <Card.Title>Biz izlayapmiz:</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Call Operatori</Card.Subtitle>
                                </div>

                                <div style={{ backgroundColor: 'yellow', }}>

                                    <IoPersonAdd style={{ fontSize: '30px', marginRight: '30px' }} />
                                </div>
                            </div>
                            <Card.Text>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijozlar bilan birinchi aloqani ornatish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mahsulotlar, narxlar va yetkazib berish shartlari haqida toliq malumot berish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijoz buyurtmalarini aniq va tezkor qayd etish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijoz shikoyatlarini hal qilish va kerakli yordam korsatish.</p></li>
                                    </div>
                                </ul>
                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
                            <br /><br />
                            <OutlineTypesExample />
                        </Card.Body>
                    </Card>
                </div>
                <div className='ish_orinlari_card'>
                    <Card style={{ width: '650px', height: '600px' }}>
                        <Card.Body>
                            <div className='d-flex justify-between'>
                                <div>
                                    <Card.Title>Biz izlayapmiz:</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Tozalik Xodimi</Card.Subtitle>
                                </div>

                                <div style={{ backgroundColor: 'yellow', }}>

                                    <IoPersonAdd style={{ fontSize: '30px', marginRight: '30px' }} />
                                </div>
                            </div>
                            <Card.Text>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijozlar bilan birinchi aloqani ornatish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Ovqatlanish joylarini, jamoat joylarini va hojatxonalarini muntazam tozalash.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijoz buyurtmalarini aniq va tezkor qayd etish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijoz shikoyatlarini hal qilish va kerakli yordam korsatish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijoz shikoyatlarini hal qilish va kerakli yordam korsatish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijoz shikoyatlarini hal qilish va kerakli yordam korsatish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijoz shikoyatlarini hal qilish va kerakli yordam korsatish.</p></li>
                                    </div>
                                </ul>
                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                            <br />
                            <OutlineTypesExample />
                        </Card.Body>
                    </Card>
                </div>
                <div className='ish_orinlari_card'>
                    <Card style={{ width: '450px', height: '600px' }}>
                        <Card.Body>
                            <div className='d-flex justify-between'>
                                <div>
                                    <Card.Title>Biz izlayapmiz:</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Kassir</Card.Subtitle>
                                </div>

                                <div style={{ backgroundColor: 'yellow', }}>

                                    <IoPersonAdd style={{ fontSize: '30px', marginRight: '30px' }} />
                                </div>
                            </div>
                            <Card.Text>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijozlar bilan birinchi aloqani ornatish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mahsulotlar, narxlar va yetkazib berish shartlari haqida toliq malumot berish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijoz buyurtmalarini aniq va tezkor qayd etish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijoz shikoyatlarini hal qilish va kerakli yordam korsatish.</p></li>
                                    </div>
                                </ul>
                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <OutlineTypesExample />
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <br /><br />
            <div className='grid'>
                <br />
                <div className='ish_orinlari_card'>
                    <Card style={{ width: '450px', height: '600px' }}>
                        <Card.Body>
                            <div className='d-flex justify-between'>
                                <div>
                                    <Card.Title>Biz izlayapmiz:</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Kassir</Card.Subtitle>
                                </div>

                                <div style={{ backgroundColor: 'yellow', }}>

                                    <IoPersonAdd style={{ fontSize: '30px', marginRight: '30px' }} />
                                </div>
                            </div>
                            <Card.Text>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijozlar bilan birinchi aloqani ornatish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mahsulotlar, narxlar va yetkazib berish shartlari haqida toliq malumot berish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijoz buyurtmalarini aniq va tezkor qayd etish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijoz shikoyatlarini hal qilish va kerakli yordam korsatish.</p></li>
                                    </div>
                                </ul>
                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <OutlineTypesExample />
                        </Card.Body>
                    </Card>
                </div>
                <div className='ish_orinlari_card'>
                    <Card style={{ width: '450px', height: '600px' }}>
                        <Card.Body>
                            <div className='d-flex justify-between'>
                                <div>
                                    <Card.Title>Biz izlayapmiz:</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Kassir</Card.Subtitle>
                                </div>

                                <div style={{ backgroundColor: 'yellow', }}>

                                    <IoPersonAdd style={{ fontSize: '30px', marginRight: '30px' }} />
                                </div>
                            </div>
                            <Card.Text>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijozlar bilan birinchi aloqani ornatish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mahsulotlar, narxlar va yetkazib berish shartlari haqida toliq malumot berish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijoz buyurtmalarini aniq va tezkor qayd etish.</p></li>
                                    </div>
                                </ul>
                                <ul className='yellow_li'>
                                    <div>
                                        <li><p style={{ color: 'grey' }}>-Mijoz shikoyatlarini hal qilish va kerakli yordam korsatish.</p></li>
                                    </div>
                                </ul>
                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <OutlineTypesExample />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default TextExample;