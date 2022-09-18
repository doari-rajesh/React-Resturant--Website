import './style.css'
import Menu from './MenuApi';
import { useState } from 'react';
import MenuCard from './MenuCard';


function Resturant() {

    const [menuData, setMenuData] = useState(Menu);
    // console.log(menuData)
    const filterItem = (category) =>{
        const updatedList = Menu.filter((curElement) =>{
            return curElement.category === category;
        });

        setMenuData(updatedList);
    };

  return (
    <>
    <nav className='navbar'>
        <div className="btn-group">
            <button className='btn-group__item' onClick={() => filterItem("breakfast")}>Breakfast</button>
            <button className='btn-group__item' onClick={() => filterItem("lunch")}>Lunch</button>
            <button className='btn-group__item' onClick={() => filterItem("dinner")}>Dinner</button>
            <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>
        </div>
    </nav>
      <MenuCard menuData={menuData}/>
      
    </>
  );
}

export default Resturant;
