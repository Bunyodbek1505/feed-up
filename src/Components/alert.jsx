import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { HiOutlineXMark } from 'react-icons/hi2';

function BasicExample() {
    // function aler_close() {
    //     alert.style.display = 'none'
    // }
    // return (
    //     <>
    //         {[
    //             'dark',
    //         ].map((variant) => (
    //             <Alert className='Alert' style={{ width: '75%', marginLeft: '10%', position: 'absolute', zIndex: '999' }} key={variant} variant={variant}>
    //                 <img width={'100%'} src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fmedia%2Fpromo%2F4_HEys6k4.jpg&w=1080&q=75" alt="" />
    //                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    //                     <h5>Yangilik Aksiya</h5>
    //                     <button className='alert_button' onClick={aler_close}>
    //                         <HiOutlineXMark style={{ fontSize: '25px' }} />
    //                     </button>
    //                 </div>
    //             </Alert>
    //         ))}
    //     </>
    // );
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
    };

    if (!visible) {
        return null;
    }

    return (
        <Alert className='Alert' style={{ width: '75%', marginLeft: '10%', position: 'absolute', zIndex: '999' }}>
            <img width={'100%'} src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fmedia%2Fpromo%2F4_HEys6k4.jpg&w=1080&q=75" alt="" />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h5> </h5>
                <button className='alert_button' onClick={handleClose}>
                    <HiOutlineXMark style={{ fontSize: '25px' }} />
                </button>
            </div>
        </Alert>
    );
}

export default BasicExample;