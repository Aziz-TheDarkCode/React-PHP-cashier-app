export default function History({date}) 
{
    return(
        <>
            <p class="text-larger text-bolder mb-4">Historique de la Journée</p>
            <div className="bg-white p-3 rounded-box mb-3">         
                    <p className="text-bolder py-3"> Vendredi 15 Septembre 16 : 45 : 27</p>
                    <p className="py-2">Pot de Sardine</p>
                    <p className="py-2">Beurre President 500 mg</p>
                    <p className="py-2">1kg Bananes</p>
                    <h3 className="text-primary text-right">6000 Fcfa</h3>
            </div>
            <div className="bg-white p-3 rounded-box mb-3">         
                    <p className="text-bolder py-3"> Vendredi 15 Septembre 18 : 06 : 10</p>
                    <p className="py-2">Javascript Burger</p>
                    <p className="py-2">Steak de Porc</p>
                    <p className="py-2">Pizza Alfredo</p>
                    <h3 className="text-primary text-right">2400 Fcfa</h3>
            </div>

        </>
    )    
}