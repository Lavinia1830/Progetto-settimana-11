import { Link } from "react-router-dom"
import AlbumCard from "../Components/AlbumCard"
import { useState, useEffect } from "react"
import MainNavbar from "../Components/MainNavbar";
import SidebarVertical from "../Components/SidebarVertical";
import Player from "../Components/Player";

const Main = () => {

    const [albums, setAlbums] = useState([]);


    let rockArtists = [
        'queen',
        'u2',
        'thepolice',
        'eagles',
        'thedoors',
        'oasis',
        'thewho',
        'bonjovi',
    ]

    let popArtists = [
        'maroon5',
        'coldplay',
        'onerepublic',
        'jamesblunt',
        'katyperry',
        'arianagrande',
    ]

    let hipHopArtists = [
        'eminem',
        'snoopdogg',
        'lilwayne',
        'drake',
        'kanyewest',
    ]

    let headers = new Headers({
        // sets the headers
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
    })

    const handleArtist = async (artistName, domQuerySelector) => {
        // artistName = "eminem", "metallica", etc...
        // domQuerySelector = "#rockSection" etc...
        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
                artistName,
                {
                    method: 'GET',
                    headers,
                }
            ) // gets the information
            if (response.ok) {
                let result = await response.json()
                console.log('result', result); // transforms the response to json
                let songInfo = result.data //array di oggetti
                console.log('handle artist song info:', songInfo[0], typeof (songInfo))
                setAlbums(albums => [...albums, songInfo[0]])

            } else {
                console.log('error')
            }
        } catch (err) {
            console.log(err)
        }
    }

    const start = async () => {
        let rockRandomArtists = []
        let popRandomArtists = []
        let hipHopRandomArtists = []

        document.querySelector('#searchField').value = '' // empties search field on page load

        while (rockRandomArtists.length < 4) {
            // pushes elements inside the array until it has 4 strings
            let artist =
                rockArtists[Math.floor(Math.random() * rockArtists.length)] // select an element from the array with an index between 0 and 7
            if (!rockRandomArtists.includes(artist)) {
                // checks if the artist is not already present in the array
                rockRandomArtists.push(artist) // pushes the artist in the array
            }
        }

        while (popRandomArtists.length < 4) {
            let artist = popArtists[Math.floor(Math.random() * popArtists.length)]
            if (!popRandomArtists.includes(artist)) {
                popRandomArtists.push(artist)
            }
        }

        while (hipHopRandomArtists.length < 4) {
            let artist =
                hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)]
            if (!hipHopRandomArtists.includes(artist)) {
                hipHopRandomArtists.push(artist)
            }
        }

        for (let j = 0; j < rockRandomArtists.length; j++)
            await handleArtist(rockRandomArtists[j], '#rockSection')

        for (let k = 0; k < popRandomArtists.length; k++)
            await handleArtist(popRandomArtists[k], '#popSection')

        for (let l = 0; l < hipHopRandomArtists.length; l++)
            await handleArtist(hipHopRandomArtists[l], '#hipHopSection')
    }

    useEffect(() => { //componentDidMount
        start();
        
    }, [])

    return (
        <>
            <SidebarVertical />

            <div className="col-12 col-md-9 offset-md-3 mainPage">
            <MainNavbar/>
                
                <div className="row">
                    <div className="col-10">
                        <div id="searchResults" style={{ display: "none" }}>
                            <h2>Search Results</h2>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        <div id="rock">
                            <h2>Rock Classics</h2>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                                {
                                    albums && (
                                        albums.slice(0, 4).map((album, index) => {
                                            return <AlbumCard key={index} albumInfo={album} />
                                        })
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        <div id="pop">
                            <h2>Pop Culture</h2>
                            <div
                                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                                id="popSection"
                            >
                                {
                                    albums && (
                                        albums.slice(4, 8).map((album, index) => {
                                            return <AlbumCard key={index} albumInfo={album} />
                                        })
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        <div id="hiphop">
                            <h2>#HipHop</h2>
                            <div
                                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                                id="hipHopSection"
                            >
                                {
                                    albums && (
                                        albums.slice(8, 12).map((album, index) => {
                                            return <AlbumCard key={index} albumInfo={album} />
                                        })
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Player/>
            </div>
        </>
    )
}

export default Main;