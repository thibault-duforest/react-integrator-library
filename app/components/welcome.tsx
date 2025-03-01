const Welcome = () => {
  return (
    <div className="mx-auto max-w-xl mt-16">
      <h1 className="text-xl font-bold text-center">
        Welcome to the React Integrator Library!
      </h1>
      <span className="flex items-center mt-2 mb-8">
        <span className="h-px flex-1 bg-black"></span>
        <span className="shrink-0 px-6">
          (I will find a better name for it!)
        </span>
        <span className="h-px flex-1 bg-black"></span>
      </span>
      <p className="mt-2">
        This small react app will allow you to preview your html/css components, it has a
        nice router, hot reloading, simple UI (thanks to TailwindCSS) and its
        easy to use and extend.
      </p>
      <p className="mt-2">For more informations, checkout the README!</p>
      <p className="text-right">Thibault Duforest</p>
    </div>
  )
}

export default Welcome
