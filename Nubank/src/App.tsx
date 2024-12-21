
import './App.css'
import { HeaderComponents } from './components/Header'

function App() {

  return (
    <>
      <HeaderComponents/>
      <div className='bg-[url(src/assets/WP.jpg)] w-full h-screen bg-cover bg-no-repeat '>
              <div className='flex justify-between'>
                    <div className='w-[50%] absolute top-1/3 gap-10 '>
                          <div className='text-white font-semibold  text-6xl pl-10'>
                          Nubank. A escolha mais <br />inteligente.
                          </div>
                          <div className='text-white font-semibold mt-5 text-2xl pl-10'>
                          N Possibilidades de produtos e serviços para você.
                          </div>
                    </div>
                    <div className='ml-[73%]  mt-[10%] '>
                        <div className='bg-white w-[350px] h-[350px] p-10 rounded-2xl'>
                            <div className='font-semibold text-2xl '>Peça sua conta e cartão <br /> de crédito do Nubank</div><br /><br />
                              <div  className='font-semibold '><input type="text" className='w-full ' name="CPF" id="" placeholder='Digite seu cpf'/></div> <hr /><br /><br /><br />
                                <div className='bg-gray-200 w-[100%] h-[50px] text-gray-400 hover:text-black hover:bg-purple-600 hover:text-white transform transition duration-2 text-2xl font-semibold  rounded-2xl p-2'>
                                  <div className='justify-between flex'><div><button type="submit">Continuar</button></div>
                                    <div><label htmlFor="">↪</label></div>
                                  </div>
                                </div>
                        </div>
                    </div>
              </div>
          </div>

      <div className='bg-white w-full h-screen p-2 '>
        <div className='bg-gray-100 w-full h-[60%] mb-10 mt-7 rounded-xl '>
            <div className='flex justify-between'>
              <div className='w-[50%]'>
                <div className='text-5xl font-semibold mt-[20%] ml-[9%] text-purple-700'>Conheça nosso Cartão de <br />Crédito</div><br />
                <div className='ml-[9%] font-semibold text-2xl'> Pode chamar ele de roxinho. Além diso, pode <br /> chamar ele de moderno, gratuito e prático também.</div><br />
                <a className='ml-[9%] font-bold' href="">Saiba Mais</a>
              </div>
                <div className='w-[50%]'>
                  <img className='w-[70%] ml-[20%] mt-[10%]' src="src/assets/Cartao.png" alt="" />
                </div>
            </div>
        </div>

       <div className='bg-purple-900 w-full h-[60%] rounded-xl mb-2 flex '>
            <div className='w-[50%] h-[100%] pt-[5%]'><img className='w-[70%] mx-auto itens-center justify-center' src="src/assets/mulher.jpg" alt="" /></div>
            <div className='w-[50%] h-[100%] pt-[5%] mt-[5%]'>
               <span className='text-5xl font-semibold text-white'>Nubank Ultravioleta</span> <br /> <br />
               <span className='text-3xl font-semibold text-white'>A experiência exclusiva para clientes de alta renda.</span><br /><br /><br />
               <a className='text-white font-bold' href="https://nubank.com.br/ultravioleta/">Saiba Mais </a>
            </div>
        </div>
        

        <div className='bg-ehite w-full h-[2%] font-bold rounded-xl mb-2'>
            <div className='mt-3 mx-auto itens-center justify-center flex'>
              <div>Direitos reservados by</div>
              <div><a className=' hover:text-purple-600' href="https://nubank.com.br/" target='blank'>@Nubank</a></div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
