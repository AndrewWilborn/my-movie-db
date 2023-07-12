import Link from "next/link"

const genres = [
    {title: 'Comedies', slug: 'comedy'},
    {title: 'Dramas', slug: 'drama'},
    {title: 'Horrors', slug: 'horror'},
]

export default function Navbar(){

    return (
        <header className="text-zinc-300 bg-gray-900">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex text-xl title-font font-medium items-center text-zinc-50 mb-4 md:mb-0">
                    My Movie DB
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {
                        genres.map(genre => (
                            <Link href={'/' + genre.slug} className="mr-5 hover:text-orange-300">{genre.title}</Link>
                        ))
                    }
                </nav>
            </div>
        </header>
    )
}