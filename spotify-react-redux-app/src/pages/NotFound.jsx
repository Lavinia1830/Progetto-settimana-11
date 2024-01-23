import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import SidebarVertical from "../Components/SidebarVertical";

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <>

            <SidebarVertical />
            <div className="col-12 col-md-9 offset-md-3 mainPage text-center my-5">
                <h3 className="text-light">Pagina Non Disponibile!</h3>
                <Button variant="dark" className="my-5" onClick={() => {
                    alert('Stai per essere reindirizzato alla Home...');
                    navigate('/');
                }}>Ritorna alla Home</Button>
            </div>
        </>
    )
}

export default NotFound;