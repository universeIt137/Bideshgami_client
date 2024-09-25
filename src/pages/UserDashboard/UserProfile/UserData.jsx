
const UserData = () => {
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
    return (
        <section className="mt-8">
            <h2 className="text-lg md:text-2xl font-semibold">Personal Details</h2>
            <p className="text-black mb-4">
                As mentioned on your passport or government-approved IDs
            </p>

            <div className='space-y-5'>
                <div className="border rounded-md p-4 border-black">
                    <h3 className="text-md md:text-2xl font-bold mb-2">Basic Info</h3>
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <div className='flex '>
                                <label className="block">
                                    Name
                                </label>
                                <p className="text-center w-full"> Junayet Alam</p>
                            </div>
                            <hr className='w-full border-[#616161] mt-2' />
                        </div>
                        <div>
                            <div className='flex '>
                                <label className="block">
                                    Birthday
                                </label>
                                <p className="text-center w-full">----------------------------</p>
                            </div>
                            <hr className='w-full border-[#616161] mt-2' />
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="border rounded-md p-4 border-black">
                    <h3 className="text-md md:text-2xl font-bold mb-2">Contact Info</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {contactInfo.map((item, index) => (
                            <div key={index}>
                                <div className='flex '>
                                    <label className="block">
                                        {item.label}
                                    </label>
                                    <p className="text-center w-full">{item.value}</p>
                                </div>
                                <hr className='w-full border-[#616161] mt-2' />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Passport Info */}
                <div className="border rounded-md p-4 border-black">
                    <h3 className="text-md md:text-2xl font-bold mb-2">passport Info</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {passportInfo.map((item, index) => (
                            <div key={index}>
                                <div className='flex '>
                                    <label className="block">
                                        {item.label}
                                    </label>
                                    <p className="text-center w-full">{item.value}</p>
                                </div>
                                <hr className='w-full border-[#616161] mt-2' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserData;