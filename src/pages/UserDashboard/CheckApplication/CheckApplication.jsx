import InputLabel from "../UserProfile/InputLabel";
import { inputStyle } from "../UserProfile/inputStyle";

const CheckApplication = () => {
    return (
        <div className="w-full space-y-7">
            <h2 className="text-xl font-bold uppercase">Check your <span className="text-primary">application</span></h2>
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
            <div className="flex flex-col gap-3 justify-center items-center">
                <button className="w-[140px] h-7 bg-primary text-white font-medium rounded-lg uppercase">Submit</button>
                <button className="w-[140px] h-7 bg-primary text-white font-medium rounded-lg uppercase">Clear</button>
            </div>
        </div>
    );
};

export default CheckApplication;