import React from 'react'

function Header() {
  return (
    <div className="bg-black text-white">
       <header className="container mx-auto p-4">
        <nav className="flex items-center justify-between">
          <button className="text-green-500 text-xl font-bold">Street88</button>
          <ul className="flex space-x-4">
            <li><a href="!" className="hover:text-green-500">Корзина <span className="bg-green-500 text-black px-2 py-1 rounded-full">2</span></a></li>
            <li><a href="!" className="hover:text-green-500">Меню</a></li>
            <li><a href="!" className="hover:text-green-500">О нас</a></li>
            <li><a href="!" className="hover:text-green-500">Контакты</a></li>   
          </ul>
          <i className='bx bx-menu text-2xl'></i>
        </nav>
        <div className="text-center mt-8">
            <h1 className="text-5xl font-bold text-green-500">Большой гамбургер</h1>
            <h4 className="text-xl mt-2">говядина</h4>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом, - таков классический портрет гамбургера, наиболее распространенной «быстрой» еды в США, от отравления которой ежедневно на больничных койках оказываются десятки тысяч американцев</p>
            <button className="mt-6 bg-green-500 text-black px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-600">14 500</button>
        </div>
      </header>
    </div>
  )
}

export default Header