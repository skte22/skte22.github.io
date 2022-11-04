import wedeh from './../Assets/wedeh.png';

export default function Power() {
    return (

        <>

            <div className="hero pl-5 pr-5">
                <div className="hero-content flex-col lg:flex-row">
                    
                    <div>
                        <p className="py-6 text-white text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <img src={wedeh} className="max-w-sm gradient-mask-b-30 bg-gradient-to-t from-black to-transparent" />
                </div>
            </div>

        </>

    )
}