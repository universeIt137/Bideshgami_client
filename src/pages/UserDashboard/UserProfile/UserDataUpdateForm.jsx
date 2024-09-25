import { FaArrowLeftLong } from "react-icons/fa6";
import InputLabel from "./InputLabel";
import { inputStyle } from "./inputStyle";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// import 'flag-icon-css/css/flag-icon.min.css';
const UserDataUpdateForm = ({ setEdit }) => {
    const handleOnChange = (value) => {
        console.log(value);  // handle the input value
    };
    return (
        <div className="pt-7 space-y-10">
            <div>
                <h2 className="text-lg md:text-2xl font-semibold pb-2">Personal Details</h2>
                <p className="text-black mb-4">
                    As mentioned on your passport or government-approved IDs
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1">
                        <InputLabel text="First Name" />
                        <input type="text"
                            placeholder="First Name"
                            name="firstName"
                            className={`${inputStyle}`} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputLabel text="Last Name" />
                        <input type="text"
                            placeholder="Last Name"
                            name="lastName"
                            className={`${inputStyle}`} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputLabel text="Gender" />
                        <select type="text"
                            placeholder="Gender"
                            name="gender"
                            className={`${inputStyle}`} >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputLabel text="Date Of Birth" />
                        <input type="date" name="dateOfBirth" className={`${inputStyle}`} id="" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-lg md:text-2xl font-semibold pb-2">Contact Details</h2>
                <p className="text-black mb-4">
                    Receive booking confirmation & updates
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1">
                        <InputLabel text="Contact Number" />
                        <PhoneInput
                            country={'bd'}   // Bangladesh country code default
                            value={'+880'}   // Initial value for Bangladesh
                            onChange={handleOnChange}
                            // className={`${inputStyle}`}
                            inputClass=""
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputLabel text="Address" />
                        <input type="text"
                            placeholder="Address"
                            name="address"
                            className={`${inputStyle}`} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputLabel text="Country" />
                        <input type="text"
                            placeholder="Country"
                            name="country"
                            className={`${inputStyle}`} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputLabel text="City" />
                        <input type="text"
                            placeholder="City"
                            name="city"
                            className={`${inputStyle}`} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputLabel text="District" />
                        <input type="text"
                            placeholder="District"
                            name="district"
                            className={`${inputStyle}`} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputLabel text="Police Station" />
                        <input type="text"
                            placeholder="Police Station"
                            name="policeStation"
                            className={`${inputStyle}`} />
                    </div>


                </div>
            </div>
            <div>
                <h2 className="text-lg md:text-2xl font-semibold pb-2">Passport information</h2>
                <p className="text-black mb-4">
                    Travelers holding passport can fill up the the below form which will save more time during flight booking.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1">
                        <InputLabel text="Passport Number" />
                        <input type="text"
                            placeholder="Passport Number"
                            name="passportNumber"
                            className={`${inputStyle}`} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputLabel text="Passport Expiry Date" />
                        <input type="text"
                            placeholder="Passport Expiry Date"
                            name="passportExpiryDate"
                            className={`${inputStyle}`} />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5">
                <button onClick={() => setEdit(false)} className="w-[110px] h-12 border-2 rounded-lg border-black font-semibold text-lg flex items-center justify-center gap-1"><FaArrowLeftLong /> Back</button>
                <button className="w-[110px] h-12 border-2 rounded-lg font-semibold text-lg border-primary text-primary">Save</button>
            </div>
        </div>
    );
};

export default UserDataUpdateForm;