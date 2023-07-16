export async function getVans(id){
    const url = id ? `/api/vans/${id}` : `/api/vans`  
    const response = await fetch(url)
    if(!response.ok){
        throw new Error ({
            message: "Failed to fetch vans",
            statusText: response.statusText,
            status: response.status
        })
    }
    const data = await response.json()
    return data.vans
}

export async function getHostVans(id){
    const url = id ? `/api/host/vans/${id}` : `/api/host/vans`
    const response = await fetch(url)
    if(!response.ok){
        throw new Error({
            message: "Failed to fetch van data",
            statusText: response.statusText,
            status: response.status
        })
    }
    const data = await response.json()
    return data.vans
}