export function HeaderComponents(){

    return(
        <>
        <div className="bg-white w-full h-[65px] pl-10 pr-6">
            <div className="flex gap-5 justify-between ">
                <div className="flex gap-5  ">
                    <img className="w-15 h-[65px]" src="src/assets/nubank.png" alt="" />
                        <div className="mt-5 text-lg hover:text-purple-700 font-semibold cursor-pointer">
                        <a  href="">Página Inicial</a>
                        </div>
                        <div className="mt-5 text-lg hover:text-purple-700 font-semibold cursor-pointer">
                        <a href="">Para você</a>
                        </div>
                        <div className="mt-5 text-lg hover:text-purple-700 font-semibold cursor-pointer">
                        <a href="">Para seu negócio</a>
                        </div>
                        <div className="mt-5 text-lg hover:text-purple-700 font-semibold cursor-pointer">
                        <a href="">O Nubank</a>
                        </div>
                        <div className="mt-5 text-lg hover:text-purple-700 font-semibold cursor-pointer">
                        <a href="">Perguntas</a>
                        </div>
                </div>
            <div className="mt-5 text-lg font-semibold flex gap-3">
                <a href="">Login</a>
                <img className="w-7 h-7" src="src/assets/saida.png" alt="" />
            </div>
            </div>
        </div>
        </>
    )
}