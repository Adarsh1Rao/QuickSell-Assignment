import './PriorityStyle.css'
function Priority(props) {
    console.log(props.cardData.tickets)
    return (
        <div className="mainComponent">
            <div className="cards">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }} >
                        <div>
                            <input type="radio" />
                        </div>
                        <div >Backlog</div>
                    </div>
                    <div>+</div>
                </div>
                {props?.cardData?.tickets?.map((data) => {
                    console.log(data);
                    if (data.status === "Backlog") {
                        return (
                            <div className="cardStyle">
                                <div style={{ color: "gray" }}>
                                    {data.id}
                                </div>
                                <div style={{ fontWeight: 600, margin: "5px 0" }}>
                                    {data.title}
                                </div>
                                <div style={{
                                    border: "1px solid lightgray",
                                    borderRadius: "5px",
                                    padding: "3px",
                                    width: "fit-content",
                                    marginLeft: "10px",
                                    position: "absolute",
                                    bottom: "5px"

                                }}>
                                
                                </div>
                            </div>
                        )
                    }

                })}
            </div>

            <div className="cards">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }} >
                        <div>
                            <input type="radio" />
                        </div>
                        <div >Todo</div>
                    </div>
                    <div>+</div>
                </div>
                {props?.cardData?.tickets?.map((data) => {
                    console.log(data);
                    if (data.status === "Todo") {
                        return (
                            <div className="cardStyle">
                                <div style={{ color: "gray" }}>
                                    {data.id}
                                </div>
                                <div style={{ fontWeight: 600, margin: "5px 0" }}>
                                    {data.title}
                                </div>
                                <div style={{
                                    border: "1px solid lightgray",
                                    borderRadius: "5px",
                                    padding: "3px",
                                    width: "fit-content",
                                    marginLeft: "10px",
                                    position: "absolute",
                                    bottom: "5px"
                                }}>
                                
                                </div>
                            </div>
                        )
                    }

                })}
            </div>
            <div className="cards">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }} >
                        <div>
                            <input type="radio" />
                        </div>
                        <div >In progress</div>
                    </div>
                    <div>+</div>
                </div>
                <div style={{ height: "87vh", overflowY: "scroll" }}>
                    {props?.cardData?.tickets?.map((data) => {
                        console.log(data);
                        if (data.status === "In progress") {
                            return (
                                <div className="cardStyle">
                                    <div style={{ color: "gray" }}>
                                        {data.id}
                                    </div>
                                    <div style={{ fontWeight: 600, margin: "5px 0" }}>
                                        {data.title}
                                    </div>
                                    <div style={{
                                        border: "1px solid lightgray",
                                        borderRadius: "5px",
                                        padding: "3px",
                                        width: "fit-content",
                                        marginLeft: "10px",
                                        position: "absolute",
                                        bottom: "5px"

                                    }}>
                                    
                                    </div>
                                </div>
                            )
                        }

                    })}
                </div>
            </div>
            
            

        </div >
    )
}
export default Priority