export default function Chip({data, selectedMovies, setSelectedMovies}) {

    const handleClick = () => {
        if (selectedMovies.includes (data)) {
            setSelectedMovies((prev) => prev.filter((item) => item !== data));
        }
        else {
            setSelectedMovies((prev) => [...prev, data]);
        }
    };

    return (
        <div style={{ background: "green", padding: "12px", borderRadius: "12px", color: "white" }}>{data}
            &nbsp;&nbsp;
            <span onClick={handleClick}>  x</span>
        </div>
    );
} 