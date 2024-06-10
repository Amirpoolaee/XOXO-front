import './styles/names.css'


function Names({p1 , p2 , wins }){
    


    if (wins != '') {
        document.getElementById('whoWon').innerHTML = wins + " won"
    }

    return <div className="d-flex justify-content-center flex-column align-items-center text-white names">
        <h1>Tic-Tac-Toe</h1>
        <div className="d-flex justify-content-around">
            <h1 className="m-5 my-4">{p1} is X</h1>
            <h1 id="whoWon"></h1>
            <h1 className="m-5 my-4">{p2} is O</h1>
        </div>
        
    </div>
}

export default Names;