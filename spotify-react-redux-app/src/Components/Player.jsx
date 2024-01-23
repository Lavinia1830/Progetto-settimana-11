import { Card, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import Next from '../playerbuttons/Next.png';
import Play from '../playerbuttons/Play.png';
import Previous from '../playerbuttons/Previous.png';
import Repeat from '../playerbuttons/Repeat.png';
import Shuffle from '../playerbuttons/Shuffle.png'

const Player = () => {

    const songInStore = useSelector(state => state.selectedSong.song);
    const isSelected = useSelector(state => state.selectedSong.isSelected);
    console.log('isSelected???!?!', isSelected);
    console.log('redux store song', songInStore);

    return (

        <div className="container-fluid fixed-bottom bg-container ">
            <div className="row d-block justify-content-between">
                <div className="col-md-3" style={{}}>
                    {
                        isSelected && (
                            <Card className="mt-2 " style={{float:'left', backgroundColor: 'transparent', width: '250px', border: 'none' }}>
                                <Row className="align-items-center">
                                    <Col xs={4}>
                                        <Card.Img variant="top" src={songInStore?.album.cover_small} className="img-fluid" />
                                    </Col>
                                    <Col xs={8} className="p-0">
                                        <Card.Body className="p-0 h-100 text-music" >
                                            <p className="m-0 fw-bold text-light">{songInStore.title}</p>
                                            <small className="m-0 text-light">{songInStore.artist.name}</small>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        )
                    }
                </div>
                <div className="d-flex flex-row justify-content-center mt-3" style={{float:'left'}}>
                    <div className="player">
                        <Link className="px-3">
                            <img src={Shuffle} alt="shuffle" style={{width: "20px"}}/>
                        </Link>
                        <Link className="px-3">
                            <img src={Previous} alt="previous" style={{width: "20px"}} />
                        </Link>
                        <Link className="px-3">
                            <img src={Play}alt="play" id="playBtn" style={{width: "20px"}} />
                        </Link>
                        <Link className="px-3">
                            <img src={Next} alt="next" style={{width: "20px"}} />
                        </Link>
                        <Link className="px-3">
                            <img src={Repeat} alt="repeat" style={{width: "20px"}} />
                        </Link>
                    </div>
                </div>
                <div className="row justify-content-center playBar py-3">
                    <div className="col-8 col-md-6">
                        <div className="progress">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="0"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player