import { useState } from 'react';
import editIcon from '../../../assets/userDashboardSidebar/icons/edit.png'
import Container from "../../../shared/Container";
import { FaCamera } from 'react-icons/fa';
import UserData from './UserData';
import UserDataUpdateForm from './UserDataUpdateForm';
import { FiEdit } from 'react-icons/fi';
const UserProfile = () => {
    const [edit, setEdit] = useState(false)


    return (
        <main className="w-full bg-white px-6 md:px-8 mainBoxShadow rounded-md pb-14 pt-6 md:pt-8">
            <div className="flex justify-between">
                <div className="flex flex-wrap items-center gap-5">
                    <img
                        src="https://i.ibb.co.com/CsPB17H/profile.png"
                        alt="Profile"
                        className="size-[150px] object-cover rounded-full mainBoxShadow"
                    />
                    <div className='space-y-3'>
                        <h1 className="text-4xl md:text-3xl font-bold"> Junayet Alam</h1>
                        {
                            edit && <button className=' px-2 h-[43px] border-2 border-primary rounded-lg flex items-center justify-center gap-2 text-primary'>
                                <p className='bg-primary size-[30px] rounded-full flex justify-center items-center text-lg  text-white'>
                                    <FaCamera />
                                </p>
                                Upload Photo
                            </button>
                        }
                    </div>
                </div>
                <button onClick={() => setEdit(true)} className={`transition-all duration-300 hover:bg-primary hover:text-white hover:border-0 mt-4 md:mt-0 px-4 py-2 border-black rounded-full border-2 text-black font-semibold text-lg items-center gap-2 w-[110px] h-[46px] justify-center ${edit ? 'hidden' : 'flex'}`}>
                <FiEdit />  Edit
                </button>
            </div>

            {/* Personal Details */}
            {
                !edit && <UserData />
            }
            {
                edit && <UserDataUpdateForm setEdit={setEdit}  />
            }
            {/* basic info  */}

            
        </main>
    );
};

export default UserProfile;