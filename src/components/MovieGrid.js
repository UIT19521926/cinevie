import KidMovieCard from "./KidMovieCard";
import movie from "@/constant/movie";
export default function MovieGrid() {
    return (
        <div className="flex" style={{ overflowX: "auto", scrollbarWidth: "none" }}>
            <div className="flex space-x-8">
            {movie.slice(0, 6).map((movie, index) => (
                    <KidMovieCard
                    key={index + 1}
                    title={movie?.Title}
                    image_url={movie?.Poster}
                    genre={movie?.Genre}
                    runtime={movie?.Runtime}
                    year={movie?.Year}
                    />
                ))}
            </div>
        </div>
    );
}
