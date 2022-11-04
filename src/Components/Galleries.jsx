import projectSkte from './../json/project.json'
// import hallowProject from './../Assets/halloweenProject.png'

export default function Galleries() {
    return (

        <>

            <div className="flex place-content-start">
                <h1 className="text-white text-5xl underline underline-offset-8 decoration-red-700 uppercase font-bold text-start">Gallery</h1>
            </div>

            <div className='mt-14 mr-5'>

                <div className='grid grid-cols-4 grid-flow-rows gap-4 h-96 ' >


                    {projectSkte.project.map((data, index) => {
                        console.log(data);
                        return (

                            <div key={index} className="hero btn rounded-none p-0  border-none hover:bg-zinc-800 justify-items-start items-end bg-zinc-800">
                                <img src={data.imageUrl} className="rounded-none w-96" alt="men catalog" />
                                
                                <div className="content-end z-20 text-start text-neutral-content m-2">
                                    
                                </div>
                            </div>

                        )
                    })}

                </div>

                <div className='flex place-content-center mt-20'>
                <a className='text-white '>
                    <button className='btn border-white text-2xl btn-lg rounded-none bg-transparent hover:bg-white hover:text-black'>
                        Show More
                    </button>
                </a>
            </div>

            </div>

        </>

    )
}