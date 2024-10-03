import { CiSearch } from "react-icons/ci";
import Admin from "./Admin";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div style={{display: 'flex'}}>
            <div style={{ backgroundColor: '#E0E0E0', width: '400px', height: '670px' }}>
                <div style={{ padding: '30px' }}>
                    <input style={{ border: 'none' }} type="text" placeholder="Search..." /><CiSearch style={{ width: '50px', height: '45px', backgroundColor: 'white' }} />
                    <br /><br />
                    <div>
                        <br /><br />
                        <h3 style={{ color: 'red' }}>Dashboard</h3>
                    </div>
                    <ul>
                        <li style={{ listStyle: 'none', marginBottom: '20px', border: '2px solid blue', backgroundColor: 'blue', padding: '10px', width: '200px', borderRadius: '15px', color: 'white'}}><Link to={'/allproducts'} style={{color: 'white', textDecoration: 'none'}}>Allproducts</Link></li>
                        <li style={{ listStyle: 'none', marginBottom: '20px', border: '2px solid blue', backgroundColor: 'blue', padding: '10px', width: '200px', borderRadius: '15px', color: 'white'}}><Link style={{color: 'white', textDecoration: 'none'}}>Create product</Link></li>
                        <li style={{ listStyle: 'none', marginBottom: '20px', border: '2px solid blue', backgroundColor: 'blue', padding: '10px', width: '200px', borderRadius: '15px', color: 'white'}}><Link style={{color: 'white', textDecoration: 'none'}}>Delete & Edit product</Link></li>
                    </ul>
                </div>
            </div>
            <Admin />
        </div>
    )
}

export default Dashboard