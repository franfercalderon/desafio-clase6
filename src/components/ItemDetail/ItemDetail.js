export default function ItemDetail ({item}) {

    console.log(item)

    return(
        <div className="itemDetailBackground">
            <div className="itemDetailContainer">
                <h1>{item.title}</h1>
                <div className="detailInnerContainer">
                    <img src={item.picture} alt={item.title}/>
                    <div>
                        <p>{item.price}</p>
                    </div>
                </div>
            </div>

        </div>
    )

    console.log(item.title)
    
}