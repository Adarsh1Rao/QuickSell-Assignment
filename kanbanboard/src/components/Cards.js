import './CardStyle.css'
function Cards(props) {
    return (
        <div className="cards">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }} >
                    <div>
                        <input type="radio" />
                    </div>
                    <div >Status</div>
                </div>
                <div>+</div>
            </div>
            <div className="cardStyle">

            </div>
        </div>
    )
}
export default Cards;