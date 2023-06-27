import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const [vanInfo, setVanInfo] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVanInfo(data.vans))
    }, [params.id])

    return (
        <div className="van-detail-container">
            {vanInfo ? (
                <div className="van-detail">
                    <img src={vanInfo.imageUrl} className="van-detail-img" alt="photo of a van"/>
                    <div className="van-detail-intro">
                        <i className={`van-type ${vanInfo.type} selected`}>
                            {vanInfo.type}
                        </i>
                        <h2 className="van-desc-name">{vanInfo.name}</h2>
                        <p className="van-price">${vanInfo.price}/day</p>
                        <p className="van-detail-desc">{vanInfo.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}