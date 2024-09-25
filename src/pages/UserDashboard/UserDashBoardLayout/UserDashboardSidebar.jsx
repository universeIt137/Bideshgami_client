import dashboardIcon from '../../../assets/userDashboardSidebar/icons/dashboard.png'
import myBookingIcon from '../../../assets/userDashboardSidebar/icons/myBooking.png'
import messagesIcon from '../../../assets/userDashboardSidebar/icons/messages.png'
import favoriteIcon from '../../../assets/userDashboardSidebar/icons/favorite.png'
import checkStatusIcon from '../../../assets/userDashboardSidebar/icons/checkStatus.png'
import changepassIcon from '../../../assets/userDashboardSidebar/icons/changepass.png'
import logoutIcon from '../../../assets/userDashboardSidebar/icons/logout.png'
import { MdAccountCircle } from "react-icons/md";
import { Link, NavLink, useLocation, useParams } from 'react-router-dom'
const UserDashboardSidebar = () => {
    const { pathname } = useLocation();
    const isDashboard = pathname.split('/')[2] ? false : true;
    console.log(isDashboard);

    const menuItems = [


        { icon: <MdAccountCircle />, label: 'My Account', link: 'my-account' },
        { icon: <img src={myBookingIcon} className='size-[18px] object-cover' />, label: 'My Booking', link: 'my-booking' },
        { icon: <img src={messagesIcon} className='size-[18px] object-cover' />, label: 'Message', link: 'message' },
        { icon: <img src={favoriteIcon} className='size-[18px] object-cover' />, label: 'Favorite', link: 'favorite' },
        { icon: <img src={checkStatusIcon} className='size-[18px]  object-cover' />, label: 'Check Status', link: 'checking-status' },
        { icon: <img src={changepassIcon} className='size-[18px] object-cover' />, label: 'Change Password', link: 'change-password' },
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

                            className="flex items-center text-lg my-2"
                        >
                            <span className="mr-2 text-lg"><img src={dashboardIcon} className='size-[18px] object-cover' /></span> <span className={`${isDashboard && 'text-primary'}`}>Dashboard</span>
                        </li>
                    </Link>
                    {menuItems.map((item, index) => (
                        <NavLink key={index} to={item?.link}>
                            <li

                                className="flex items-center   text-lg my-2"
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