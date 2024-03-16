import axios from "axios"
const API = {
    url : process.env.REACT_APP_API_URL,
    key : process.env.REACT_APP_API_KEY
}

export const DownloadVIdeo = async (input) =>{
    if (!API.key || !API.url) {
        return false
    }
    const {data} = await axios.post(API.url,{
        type : "instagram",
        video_url : input.current.value
    },{
        headers : {
            Accept : "application/json",
            "X-Avatar-Key" : API.key
        }
    })

    return data
}