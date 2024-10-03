import TextExample from "../Components/card_ish"

const Ishorinlari = () => {
    return (
        <>
            <div className="top">
                <h3 style={{ display: 'flex' }}>Bosh sahifa / <strong style={{ color: 'yellow', marginLeft: '10px' }}>Ish orinlari</strong></h3>
                <hr />
            </div>
            <div className="bottom">
                <div className="baner">
                    <h5>Ish orinlari</h5>
                    <br />
                </div>
                <div className="baner_bottomn d-flex">
                </div>
                <TextExample />
            </div>
        </>
    )
}

export default Ishorinlari