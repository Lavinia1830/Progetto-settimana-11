import { Link } from "react-router-dom";

const AlbumCard = (props) => {
    console.log('prop ricevuta:', props.albumInfo);
    return (
        <div className="col text-center">
            <Link to={`/albumPage/${props.albumInfo.album.id}`}>
                <img className="img-fluid" src={props.albumInfo.album.cover_medium} alt="1" />
            </Link>
            <p className="text-truncate">
                <Link to={`/albumPage/${props.albumInfo.album.id}`}>
                    Album: "{props.albumInfo.album.title <16
                        ? props.albumInfo.title
                        : props.albumInfo.title.substring(0,16)}..."
                </Link>
            <br/>
                <Link to={`/artistPage/${props.albumInfo.artist.id}`}>
                    Artist: {props.albumInfo.artist.name}
                </Link>
                
            </p>
        </div>
    )
}

export default AlbumCard;