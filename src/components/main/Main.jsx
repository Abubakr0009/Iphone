import React from 'react'
// import Phone from "../../img/.png"
import "./index.css"

function Header() {
  return (
    <div className="bg-gray-100 p-4">
       <header className="container mx-auto">
        <nav className="flex items-center justify-between">
          <button className="text-xl font-bold text-green-600">Street88</button>
          <ul className="flex space-x-4">
            <li><a href="!" className="hover:text-green-500">Корзина <span className="bg-green-500 text-white px-2 py-1 rounded-full">2</span></a></li>
            <li><a href="!" className="hover:text-green-500">Меню</a></li>
            <li><a href="!" className="hover:text-green-500">О нас</a></li>
            <li><a href="!" className="hover:text-green-500">Контакты</a></li>   
          </ul>
          <i className='bx bx-menu text-2xl'></i>
        </nav>
        <div className="text-center mt-8">
            <h1 className="text-4xl font-bold text-green-500">Большой гамбургер</h1>
            <h4 className="text-lg mt-2">говядина</h4>
            <p className="mt-4 text-gray-700 max-w-xl mx-auto">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета...</p>
            <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">14 500</button>
        </div>

        {/* Cardlar bo'limi */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Burger {item}</h3>
              <p className="text-gray-600 mb-4">Mazali va yangi tayyorlangan burger.</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Buyurtma</button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Header;
