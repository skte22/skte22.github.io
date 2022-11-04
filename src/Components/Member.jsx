
import hero from './../json/hero.json'

const Member = () => {
    return (

        <>



            <div className="grid grid-rows-1 grid-flow-col gap-5 place-content-center">


                {hero.hero.map((data, index) => {

                    return (

                        <div key={index} className="hero btn rounded-none p-0  border-none hover:bg-zinc-800 justify-items-start items-end h-auto w-auto bg-zinc-800">
                            <img src={data.imageUrl || ''} className="rounded-none w-44" alt="men catalog" />
                            <div className='gradient-mask-t-10 hero-overlay bg-gradient-to-t from-black via-black to-transparent'></div>
                            <div className="content-end z-20 text-start text-neutral-content m-2">
                                <div className="w-full">
                                    <p className="mb-2 font-bold text-xl">{data.title || ''}</p>
                                    <button className="bg-transparent font-light text-white rounded-none hover:text-white hover:underline">See Profile</button>
                                </div>
                            </div>
                        </div>

                    )
                })}


            </div>

        </>

    )
}

export default Member