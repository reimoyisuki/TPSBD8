import Logo from './assets/Logo.svg';

export default function Navbar() {
    return (
    <nav className="bg-black text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
            <img src={Logo} alt="Logo" className="h-12 w-12" />
            <h1 className="text-sm md:text-lg font-bold">Network Laboratory</h1>
        </div>
        <ul className="flex space-x-2 md:space-x-4 text-sm md:text-xl font-semibold">
            <li className="hover:text-gray-400 cursor-pointer">
                <a href="#home" className="text-white">Home</a>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
                <a href="#sbd" className="text-white">SBD</a>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
                <a href="#dmj" className="text-white">DMJ</a>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
                <a href="#os" className="text-white">OS</a>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
                <a href="#ntlab" className="text-white">NTLAB</a>
            </li>
        </ul>
        </div>
    </nav>
    );
}