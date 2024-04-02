import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className=" rounded-3xl py-10 items-center my-10" style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPiyPQur0EPlJr7AnsW-4bZO6zHAdd-DpMUtLWKLXhQ&s')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="text-center text-white">
            <div className="w-[80%] space-y-10 mx-auto">
                <h2 className="text-7xl font-extrabold text-white ">Exploring Firebase :<br /><span className="text-amber-500"> The Complete Toolkit</span></h2>
                <p >Firebase is a versatile platform that empowers developers to effortlessly build and scale feature-rich applications. With its suite of tools spanning from real-time databases to authentication and analytics, Firebase streamlines the development process while offering robust backend services.</p>
                <button className="btn bg-[#800080] text-lg text-white font-bold"><Link to={'/login'}>Go Log In Page</Link></button>
            </div>
        </div>
    </div>
    );
};

export default Banner;
