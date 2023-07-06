import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const location = useLocation()
    const [vanInfo, setVanInfo] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVanInfo(data.vans))
    }, [params.id])

    const url = location.state && location.state.search || ""

    return (
        <div className="van-detail-container">
            <Link
                to={`..${url}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
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