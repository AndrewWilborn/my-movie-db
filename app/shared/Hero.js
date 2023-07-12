export default function Hero() {
  return (
    <section className="text-zinc-400 bg-zinc-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-zinc-50 font-medium text-3xl mb-4 sm:text-4xl">
            Fight Club
          </h1>
          <p className="mb-8 leading-relaxed">
            An office worker with a bad case of insomnia teams up with a rebel soap maker and insanity ensues.
          </p>
          <a href="https://www.imdb.com/title/tt0137523" className="text-white bg-orange-400 border-0 py-2 px-6 rounded-lg text-lg hover:bg-orange-500">Learn more</a>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="Fight Club Poster" src="https://i.etsystatic.com/18242346/r/il/c9908e/2412674268/il_fullxfull.2412674268_1sgm.jpg" />
        </div>
      </div>
    </section>
  )
}