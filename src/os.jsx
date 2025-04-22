import OSLogo from './assets/OSLogo.svg';

export default function OS() {
    return (
    <div className="min-h-screen bg-customBlack text-white flex flex-col justify-center items-center py-8">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
        <img src={OSLogo} alt="OS logo" className="h-64 w-64 md:mr-4" />
        <div>
            <h1 className="text-2xl md:text-4xl font-bold text-white text-left">NETLAB OS</h1>
            <div className="bg-black rounded-lg p-4 mt-4">
            <p className="text-md md:text-xl text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere , magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            </p>
            <p className="text-md md:text-xl text-white mt-4">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
            </p>
            </div>
        </div>
        </div>
    </div>
    );
}