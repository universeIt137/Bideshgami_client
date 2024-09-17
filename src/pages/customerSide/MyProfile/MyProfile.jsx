import { RiProfileLine } from "react-icons/ri";
import Container from "../../../shared/Container";
import { FaTachometerAlt, FaUser, FaCalendarAlt, FaEnvelope, FaHeart, FaTasks, FaLock, FaSignOutAlt } from 'react-icons/fa';
import { MdAccountCircle } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
const MyProfile = () => {
    const contactInfo = [
        { label: "Email", value: "example@email.com" },
        { label: "Phone", value: "----------------------------" },
        { label: "Address", value: "----------------------------" },
        { label: "City", value: "----------------------------" },
        { label: "Country", value: "----------------------------" },
        { label: "District", value: "----------------------------" },
    ];
    const passportInfo = [
        { label: "Passport Number", value: "xxxxxxxxxxxxxxx" },
        { label: "Passport Expiry Date", value: "----------------------------" },
        { label: "Passport Issue Date", value: "----------------------------" },
    ];
    const menuItems = [
        { icon: <RiProfileLine />, label: 'Dashboard' },
        { icon: <MdAccountCircle />, label: 'My Account' },
        { icon: <FaCalendarAlt />, label: 'My Booking' },
        { icon: <TiMessages />, label: 'Message' },
        { icon: <FaHeart />, label: 'Favorite' },
        { icon: <FaTasks />, label: 'Check Status' },
        { icon: <FaLock />, label: 'Change Password' },
        { icon: <FaSignOutAlt />, label: 'Log Out' },
    ];
    return (
        <Container>
            <div className="flex gap-5 flex-col md:flex-row min-h-screen py-5">
                {/* Sidebar */}
                <aside className="w-full md:w-64 mainBoxShadow p-4 border-b md:border-r h-max">
                    <div className="flex flex-col items-center">
                        {/* Profile Image */}
                        <img
                            src="https://i.ibb.co.com/CsPB17H/profile.png"
                            alt="Profile"
                            className="size-28 object-cover rounded-full shadow-lg"
                        />
                        <h2 className="mt-4 text-lg font-bold text-center">Junayet Alam</h2>
                    </div>

                    {/* Menu Items */}
                    <nav className="mt-6">
                        <ul className="space-y-4">
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center text-gray-700 hover:text-black"
                                >
                                    <span className="mr-2 text-lg">{item.icon}</span> {item.label}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Main Profile Section */}
                <main className="flex-1 bg-white p-6 md:p-8 mainBoxShadow">
                    <div className="flex justify-between">
                        <div className="flex flex-wrap items-center gap-5">
                            <img
                                src="https://i.ibb.co.com/CsPB17H/profile.png"
                                alt="Profile"
                                className="size-28 object-cover rounded-full mainBoxShadow"
                            />
                            <h1 className="text-2xl md:text-3xl font-bold"> Junayet Alam</h1>
                        </div>
                        <button className="mt-4 md:mt-0 px-4 py-2 border rounded-full text-gray-700 hover:bg-gray-200 h-max">
                            <i className="fas fa-edit"></i> Edit
                        </button>
                    </div>

                    {/* Personal Details */}
                    <section className="mt-8">
                        <h2 className="text-lg md:text-xl font-semibold">Personal Details</h2>
                        <p className="text-gray-500 mb-4">
                            As mentioned on your passport or government-approved IDs
                        </p>

                        <div className="border rounded-md p-4">
                            <h3 className="text-md md:text-lg font-bold mb-2">Basic Info</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Name
                                    </label>
                                    <p className="border-b-2 border-gray-300 text-center"> Junayet Alam</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Birthday
                                    </label>
                                    <p className="border-b-2 border-gray-300 text-center">----------------------------</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="border rounded-md p-4 mt-4">
                            <h3 className="text-md md:text-lg font-bold mb-2">Contact Info</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {contactInfo.map((item, index) => (
                                    <div key={index}>
                                        <label className="block text-sm font-semibold text-gray-700">
                                            {item.label}
                                        </label>
                                        <p className="border-b-2 border-gray-300 text-center">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Passport Info */}
                        <div className="border rounded-md p-4 mt-4">
                            <h3 className="text-md md:text-lg font-bold mb-2">passport Info</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {passportInfo.map((item, index) => (
                                    <div key={index}>
                                        <label className="block text-sm font-semibold text-gray-700">
                                            {item.label}
                                        </label>
                                        <p className="border-b-2 border-gray-300 text-center">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Container>
    );
};

export default MyProfile;