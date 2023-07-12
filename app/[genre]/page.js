import MovieScroll from "../shared/MovieScroll"

export function generateStaticParams(){
    return [
        {params:{ genre: 'horror'}},
        {params:{ genre: 'comedy'}},
        {params:{ genre: 'drama'}},
    ]
}

export function generateMetadata({params: {genre}}) {
    return {
        title: `My ${genre} Movie Database`,
        description: `Here are some ${genre} movies.`
    }
}

export default function Page({ params: {genre} }) {
    return(
        <main className="p-8">
            <h1 className="text-center capitalize text-2xl text-orange-400 font-semibold">
                {genre} Movies
            </h1>
            <MovieScroll genre={genre} number={12}/>
        </main>
    )
}