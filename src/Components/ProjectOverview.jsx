import hallowProject from './../Assets/halloweenProject.png'
import projectSkte from './../json/project.json'

export default function ProjectOverview() {

    return (

        <>

            <div className="flex gap-5 ml-5 mr-5">

                <div>

                    <button className="hero btn rounded-none p-0  border-none hover:bg-zinc-800 justify-items-start items-end h-auto w-auto bg-zinc-800">
                        <img src={hallowProject} className="rounded-none w-96" alt="men catalog" />
                        <div className='gradient-mask-t-50 hero-overlay bg-gradient-to-t from-black to-transparent'></div>
                        <div className="content-end z-20 text-start text-neutral-content m-2">
                            <div className="w-full">
                                <p className="mb-5 font-bold text-2xl">Halloween 2022 <br /> Project</p>
                            </div>
                        </div>
                    </button>

                </div>

                <div className='grid grid-rows-2 grid-flow-col gap-4 ' >


                    {projectSkte.project.map((data, index) => {
                        console.log(data);
                        return (

                            <div key={index} className="hero btn rounded-none p-0  border-none hover:bg-zinc-800 justify-items-start items-end w-56 bg-zinc-800">
                                <img src={data.imageUrl || ''} className="rounded-none w-96" alt="men catalog" />
                                <div className='gradient-mask-t-50 hero-overlay bg-gradient-to-t from-black to-transparent'></div>
                                <div className="content-end z-20 text-start text-neutral-content m-2">
                                    <div className="w-full">
                                        <p className="mb-5 font-bold text-xl">{data.title || ''}</p>
                                    </div>
                                </div>
                            </div>

                        )
                    })}

                </div>

            </div>


            <div className='flex place-content-center mt-20'>
                <a className='text-white '>
                    <button className='btn border-white text-2xl btn-lg rounded-none bg-transparent hover:bg-white hover:text-black'>
                        See More Project
                    </button>
                </a>
            </div>

        </>

    )

}