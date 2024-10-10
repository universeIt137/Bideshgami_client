import dashboardIcon from '../../../assets/userDashboardSidebar/icons/dashboard.png'
import myBookingIcon from '../../../assets/userDashboardSidebar/icons/myBooking.png'
import messagesIcon from '../../../assets/userDashboardSidebar/icons/messages.png'
import favoriteIcon from '../../../assets/userDashboardSidebar/icons/favorite.png'
import checkStatusIcon from '../../../assets/userDashboardSidebar/icons/checkStatus.png'
import changepassIcon from '../../../assets/userDashboardSidebar/icons/changepass.png'
import logoutIcon from '../../../assets/userDashboardSidebar/icons/logout.png'
import { MdAccountCircle, MdFavoriteBorder, MdLock, MdMessage } from "react-icons/md";
import { Link, NavLink, useLocation, useParams } from 'react-router-dom'
import { RiCalendarEventFill, RiShieldCheckFill } from 'react-icons/ri'
import { TbDeviceHeartMonitorFilled } from 'react-icons/tb'
const UserDashboardSidebar = () => {
    const { pathname } = useLocation();
    const isDashboard = pathname.split('/')[2] ? false : true;
    console.log(isDashboard);

    const menuItems = [
        { icon: <MdAccountCircle />, label: 'My Account', link: 'my-account' },
        { icon: <RiCalendarEventFill />, label: 'My Booking', link: 'my-booking' },
        { icon: <MdMessage />, label: 'Message', link: 'message' },
        { icon: <MdFavoriteBorder/>, label: 'Favorite', link: 'favorite' },
        { icon: <RiShieldCheckFill />, label: 'Check Status', link: 'checking-status' },
        { icon: <MdLock />, label: 'Change Password', link: 'change-password' }
    ];
    return (
        <aside className="lg:min-w-[280px] lg:max-w-[280px] mainBoxShadow p-4 pb-10 border-b md:border-r h-max rounded-md" >
            <div className="flex flex-col items-center">
                {/* Profile Image */}
                <img
                    src="https://i.ibb.co.com/CsPB17H/profile.png"
                    alt="Profile"
                    className="size-[150px] object-cover rounded-full shadow-lg"
                />
                <h2 className="mt-4 text-xl font-bold text-center">Junayet Alam</h2>
            </div>

            {/* Menu Items */}
            <nav className="mt-6">
                <ul className="space-y-4 userDashboard">
                    <Link to={'/user-dashboard'}>
                        <li

                            className={`flex items-center text-lg my-2 hover:bg-primary px-2 rounded-lg hover:text-white ${isDashboard && 'text-primary'}`}
                        >
                            <span className="mr-2 text-lg"><TbDeviceHeartMonitorFilled /></span> <span className={``}>Dashboard</span>
                        </li>
                    </Link>
                    {menuItems.map((item, index) => (
                        <NavLink key={index} to={item?.link}>
                            <li

                                className="flex items-center   text-lg my-2 hover:bg-primary px-2 rounded-lg hover:text-white transition-all duration-300"
                            >
                                <span className="mr-2 text-lg">{item.icon}</span> <span className=''>{item.label}</span>
                            </li>
                        </NavLink>
                    ))}
                    <li
                        className="flex items-center text-gray-800 hover:text-black text-lg"
                    >
                        <span className="mr-2 text-lg"><img src={logoutIcon} className='size-[18px] object-cover' /></span> <span className='text-[#A6A6A6]'>Log Out</span>
                    </li>
                </ul>
            </nav>
        </aside >
    );
};

export default UserDashboardSidebar;