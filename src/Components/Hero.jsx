
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import heroSatu from './../Assets/heroSatu.png';


const Hero = () => {




    return (


        <>

            <div className="top-0">
                <img src={heroSatu} className="gradient-mask-b-50 bg-gradient-to-t from-black to-transparent w-full h-full" alt="" />                
                <div className="left-8 top-72 mt-5 absolute center">
                    <div>
                        <h1 className='text-4xl font-bold uppercase text-white'>Everyone's going crazy <br /> deep in their minds</h1>
                    </div>

                    <div className="mt-10">                        
                        <button className="btn rounded-none btn-lg bg-transparent text-white border-white hover:text-black hover:bg-white">More About Us</button>
                    </div>
                </div>
            </div>


        </>


    )
}





export default Hero

