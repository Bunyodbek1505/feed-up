import { Link } from "react-router-dom"
import '../js files/app'
import Map from "../Components/Map"

const Xarita = () => {
    return (
        <>
            <div className="s1-sloy">
                <div className="s1-sloy2">
                    <div className="p-20">
                        <strong>Filial</strong>
                    </div>
                    <div>
                        <button><Link to={'/filiallar'}>Royxat</Link> </button>
                        <button style={{ color: 'yellow' }}>Xarita</button>
                    </div>
                </div>
                <div className="s2-sloy_body">
                    <div>
                        <Map/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Xarita