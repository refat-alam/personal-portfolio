
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          {/* texts */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span>Refat Alam</span>
            </h1>
            <p>
              I am skilled at creating sophisticated digital interfaces and have a strong command of multiple programming languages and tech tools.
            </p>
          </div>
          <div>Image</div>
        </div>
      </div>
    </section>
  )
}

export default Home