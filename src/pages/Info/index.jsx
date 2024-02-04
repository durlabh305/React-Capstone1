import action from '../../assets/Action.png';
import drama from '../../assets/Drama.png';
import fantasy from '../../assets/Fantasy.png';
import fiction from '../../assets/Fiction.png';
import horror from '../../assets/Horror.png';
import music from '../../assets/Music.png';
import romance from '../../assets/Romance.png';
import thriller from '../../assets/Thriller.png';
import western from '../../assets/Western.png';
import Box from '../../components/MovieBox';
import Chip from '../../components/Chip';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//for selecting and non selecting we will use usestate

// Object passed inside the array.
const genres = [

    {
        id: "Action",
        color: "#FF5209",
        image: <img style={{ width: "160px", height: "120px" }} src={action} />
    },
    {
        id: "Drama",
        color: "#D7A4FF",
        image: <img style={{ width: "160px", height: "120px" }} src={drama} />
    },
    {
        id: "Fantasy",
        color: "#FF4ADE",
        image: <img style={{ width: "160px", height: "120px" }} src={fantasy} />
    },
    {
        id: "Fiction",
        color: "#6CD061",
        image: <img style={{ width: "160px", height: "120px" }} src={fiction} />
    },
    {
        id: "Horror",
        color: "#7358FF",
        image: <img style={{ width: "160px", height: "120px" }} src={horror} />
    },
    {
        id: "Music",
        color: "#E61E32",
        image: <img style={{ width: "160px", height: "120px" }} src={music} />
    },
    {
        id: "Romance",
        color: "#118800",
        image: <img style={{ width: "160px", height: "120px" }} src={romance} />
    },
    {
        id: "Thriller",
        color: "#84C2FF",
        image: <img style={{ width: "160px", height: "120px" }} src={thriller} />
    },
    {
        id: "Western",
        color: "#912500",
        image: <img style={{ width: "160px", height: "120px" }} src={western} />
    },

]
//Grid always apply on parent class
function Info() {

    const [selectedMovies, setSelectedMovies] = useState([])
    const navigate = useNavigate();
    console.log(selectedMovies);
    return (
        <>
            <h1>Info</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                {genres.map((genre) => <Box
                    key={genre.id}
                    data={genre}
                    selectedMovies={selectedMovies}
                    setSelectedMovies={setSelectedMovies} />)}
            </div>

            <div style={{
                display: 'flex',
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "12px",
            }}>
                {selectedMovies.map((movie) =>
                    <Chip
                        key={movie}
                        data={movie}
                        selectedMovies={selectedMovies}
                        setSelectedMovies={selectedMovies} />
                )}
                {selectedMovies.length < 3 ? (
                    <p style={{ color: "red" }}>Minimum 3 categories are required</p>
                ) : (
                    <></>
                )}
                <button style={{ background: "green", padding: "12px", color: "white", borderRadius: "12px", border: "none" }} onClick={() => {
                    window.localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
                    navigate("/showcase")
                }}
                disabled={selectedMovies.length < 3}>Next</button>
            </div>
        </>
    )
}
export default Info;