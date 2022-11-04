import logo from './../Assets/logo.png';

export default function Footer() {
    return (
        <>

            <footer className="footer footer-center p-10 bg-transparent text-primary-content">
                <div>
                    <img src={logo} className='w-44 invert' alt="" />
                    <p className="font-bold text-lg text-white mt-10">
                        Sun.Daydreamss - ArthePhoto - AvturFuel
                    </p>
                    <p className='mt-3'>Providing reliable story since 2022</p>
                    <p>//SKTE © 2022 - All right reserved</p>
                </div>
            </footer>


        </>
    )
}