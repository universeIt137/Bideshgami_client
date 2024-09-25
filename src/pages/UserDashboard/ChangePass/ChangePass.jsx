import InputLabel from "../UserProfile/InputLabel";
import { inputStyle } from "../UserProfile/inputStyle";

const ChangePass = () => {
    return (
        <div className="w-full px-5 py-7 mainBoxShadow rounded-lg h-max">
            <h2 className="text-2xl font-bold text-center uppercase">Change <span className="text-primary">Password</span></h2>
            <div className="w-full max-w-[500px] space-y-3 mx-auto py-10 ">
                <div className="flex flex-col gap-1">
                    <InputLabel text="Current password" />
                    <input type="text"
                        placeholder="Current password"
                        name="currentPassword"
                        className={`${inputStyle}`} />
                </div>
                <div className="flex flex-col gap-1">
                    <InputLabel text="New password" />
                    <input type="text"
                        placeholder="New password"
                        name="newPassword"
                        className={`${inputStyle}`} />
                </div>
                <div className="flex flex-col gap-1">
                    <InputLabel text="Confirm password" />
                    <input type="text"
                        placeholder="Confirm password"
                        name="confirmPassword"
                        className={`${inputStyle}`} />
                </div>
                <div className="text-center space-x-3 pt-5">
                    <button>Cancel</button>
                    <button className="bg-primary text-white rounded-lg h-9 px-5">Update Password</button>
                </div>
            </div>
        </div>
    );
};

export default ChangePass;