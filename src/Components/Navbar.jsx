import logo from './../Assets/logo.png';

export default function Navbar(props) {
    return (
        <>

            <div className="navbar absolute z-10 pl-5 pr-5 bg-transparent">
                <div className="flex-1">
                    <a href='/' className="btn hover:bg-transparent bg-transparent border-none normal-case text-xl">
                        <img src={logo} className='invert w-14 h-8' alt="" />
                    </a>
                </div>
                <div className="flex-none">
                    <div className="flex items-stretch text-white">
                        <a className="btn bg-transparent border-none hover:bg-transparent hover:text-black">Member</a>
                        <a className="btn bg-transparent border-none hover:bg-transparent hover:text-black">Gallery</a>
                        <a className="btn bg-transparent border-none hover:bg-transparent hover:text-black">Project</a>
                    </div>
                </div>
            </div>

        </>
    )
}
