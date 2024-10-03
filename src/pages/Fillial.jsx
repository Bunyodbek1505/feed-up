import { Link } from "react-router-dom"
import WithHeaderStyledExample from "../Components/card"

const Fillial = () => {
    return (
        <>
            <div className="s1-sloy">
                <div className="s1-sloy2">
                    <div className="p-20">
                        <strong>Filial</strong>
                    </div>
                    <div>
                        <button style={{ color: 'yellow' }}>Royxat</button>
                        <button><Link to={'/xarita'}>Xarita</Link></button>
                    </div>
                </div>
                <div className="s2-sloy_body">
                    <div>
                        <WithHeaderStyledExample/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fillial