import "./video.css"
const Video = ({data}) => {
    return(
        <div className="video">
            <img src={data.data[0].thumbnail} alt="alt"/>
            <a href={data.data[0].url}>Download</a>
        </div>
    )
}

export default Video