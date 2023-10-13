function Food() {
    
    const foodArray = ["Orange", "Banana", "Apple"];
    const drinks = ["Tea", "Coffee"];
    
    return(

        <>

        <ul>
            {
                foodArray.map((food) =>
                <li>{food}</li>
                )
            }
        </ul>

        <ul>
            {
                drinks.map((drinks) =>
                <li>{drinks}</li>
                )
            }
        </ul>

        </>
    );
}

export default Food