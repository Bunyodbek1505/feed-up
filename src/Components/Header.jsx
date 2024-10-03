/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import '../Css files/feed.css'

const Header = () => {
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th style={{ backgroundColor: 'black', padding: '10px' }}>
              <img height={'60px'} src="https://feedup.uz/assets/images/logos/logo.svg" alt="" />
            </th>
            <th>
              <ul className='main_header'>
                <li><Link to={''}>Menyu</Link></li>
                <li><Link to={'/filiallar'}>Filial</Link></li>
                <li><Link to={'/ishorinlari'}>Ish o'rinlari</Link></li>
                <li><Link to={'/yangiliklar'}>Yangiliklar</Link></li>
                <li><Link to={'/bizhaqimizda'}>Biz haqimizda</Link></li>
              </ul>
            </th>
            <th style={{ borderLeft: '1px grey' }}>
              <ul className='main_header'>
                <img src="https://feedup.uz/assets/images/svg/star.svg" alt="" />
                <li>XIT sotuvlar</li>
              </ul>
            </th>
            <th style={{ borderLeft: '1px grey' }}>
              <ul className='main_header'>
                <li><img src="https://feedup.uz/assets/images/svg/bag.svg" alt="" /><Link to={'/savatcha'}>Savatcha</Link></li>
              </ul>
            </th>
            <th style={{ borderLeft: '1px grey' }}>
              <select style={{ border: 'none' }} name="" id="">
                <option value="">Uz</option>
                <option value="eng">ENG</option>
                <option value="ru">RU</option>
              </select>
            </th>
          </tr>
        </thead>

      </table>
    </>
  )
}

export default Header