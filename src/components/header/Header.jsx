import React from 'react'

function Header() {
  return (
    <div className="bg-gray-100 p-4">
       <header className="container mx-auto">
        <nav className="flex items-center justify-between">
          <button className="text-xl font-bold text-green-600">Street88</button>
          <ul className="flex space-x-4">
            <li><a href="!" className="hover:text-green-500 text-red-500">Корзина <span className="bg-green-500 text-white px-2 py-1 rounded-full">2</span></a></li>
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
      </header>
    </div>
  )
}

export default Header