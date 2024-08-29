import React, { useState } from 'react';
import InputWithHint from './InputWithHint';

const ApplyForm = () => {

    const [isVisible, setIsVisible] = useState(true); // Initially visible

    // Handle the toggle button click to change visibility
    const toggleVisibility = () => {
        setIsVisible(!isVisible); // Toggle visibility state
    };

    // Initialize the form state
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        passport: '',
        from: '',
        to: '',
        due: '',
        center: '',
        service: '',
        total: '',
    });

    // Handle changes in the form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();// Prevent the default form submission
        console.log(formData); // Log the form data to the console
        // Reset form data
        setFormData({
            name: '',
            phoneNumber: '',
            email: '',
            passport: '',
            from: '',
            to: '',
            due: '',
            center: '',
            service: '',
            total: '',
        });

    };

    return (
        <div className='border p-2 w-full   lg:w-3/4 mx-auto shadow-2xl mb-10 rounded-md'>
            <p className='text-4xl text-center font-bold '>Apply Form</p>
            <div className="border border-blue-400 rounded-xl m-5">
                <section className='p-5 '>
                    <form onSubmit={handleSubmit} className=''>
                        <div className={`grid md:grid-cols-2 gap-5 lg:gap-12`}>
                            <InputWithHint
                                type="text"
                                name="name"
                                placeholder="Name"
                                hintText="আপনার পুরো নাম লিখুন"
                                value={formData.name}
                                onChange={handleChange}
                            >
                            </InputWithHint>

                            <InputWithHint
                                type="text"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                hintText="আপনার ফোন নম্বর লিখুন"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            >
                            </InputWithHint>

                            <InputWithHint
                                type="email"
                                name="email"
                                placeholder="Email"
                                hintText="আপনার ইমেইল লিখুন"
                                value={formData.email}
                                onChange={handleChange}
                            >
                            </InputWithHint>

                            <InputWithHint
                                type="text"
                                name="passport"
                                placeholder="Passport Number"
                                hintText="আপনার পাসপোর্ট নম্বর লিখুন"
                                value={formData.passport}
                                onChange={handleChange}
                            >
                            </InputWithHint>

                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    name="from"
                                    value={formData.from}
                                    onChange={handleChange}
                                    className="grow pr-[150px] text-[11px] lg:text-[14px]"
                                    placeholder="From(Auto Fill)"
                                />
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    name="to"
                                    value={formData.to}
                                    onChange={handleChange}
                                    className="grow pr-[150px] text-[11px] lg:text-[14px]"
                                    placeholder="To(Auto Fill)"
                                />
                            </label>
                        </div>


                        <div className="grid md:grid-cols-3 gap-4 mt-12">
                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="grow pr-[150px] text-[11px] lg:text-[14px]"
                                    placeholder="Service Type (Auto Fill)"
                                />
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    name="total"
                                    value={formData.total}
                                    onChange={handleChange}
                                    className="grow pr-[150px] text-[11px] lg:text-[14px]"
                                    placeholder="Total Pyment (Auto Fill)"
                                />
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    name="due"
                                    value={formData.due}
                                    onChange={handleChange}
                                    className="grow pr-[150px] text-[11px] lg:text-[14px]"
                                    placeholder="Due Pyment (Auto Fill)"
                                />
                            </label>
                        </div>



                        <div className={`grid md:grid-cols-2 gap-4 mt-12 `}>
                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    name="due"
                                    value={formData.due}
                                    onChange={handleChange}
                                    className="grow lg:pr-[150px] text-[11px] lg:text-[14px]"
                                    placeholder="Due Pyment (Auto Fill)"
                                />
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    name="center"
                                    value={formData.center}
                                    onChange={handleChange}
                                    className="grow lg:pr-[150px] text-[11px] lg:text-[14px]"
                                    placeholder="Choose Your Application Center"
                                />
                            </label>
                        </div>

                        <div className={`${isVisible ? '' : 'hidden'} mt-5 p-5 lg:border border-blue-500 rounded-lg `}>

                            <div className="grid md:grid-cols-3 gap-4 mt-12">
                                <label className="input input-bordered flex items-center gap-2">
                                    <input
                                        type="text"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="grow pr-[150px] text-[11px] lg:text-[14px]"
                                        placeholder="Service Type (Auto Fill)"
                                    />
                                </label>

                                <label className="input input-bordered flex items-center gap-2">
                                    <input
                                        type="text"
                                        name="total"
                                        value={formData.total}
                                        onChange={handleChange}
                                        className="grow pr-[150px] text-[11px] lg:text-[14px]"
                                        placeholder="Total Pyment (Auto Fill)"
                                    />
                                </label>

                                <label className="input input-bordered flex items-center gap-2">
                                    <input
                                        type="text"
                                        name="due"
                                        value={formData.due}
                                        onChange={handleChange}
                                        className="grow pr-[150px] text-[11px] lg:text-[14px]"
                                        placeholder="Due Pyment (Auto Fill)"
                                    />
                                </label>
                            </div>



                            <div className={`grid md:grid-cols-2 gap-4 mt-12 `}>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input
                                        type="text"
                                        name="due"
                                        value={formData.due}
                                        onChange={handleChange}
                                        className="grow lg:pr-[150px] text-[11px] lg:text-[14px]"
                                        placeholder="Due Pyment (Auto Fill)"
                                    />
                                </label>

                                <label className="input input-bordered flex items-center gap-2">
                                    <input
                                        type="text"
                                        name="center"
                                        value={formData.center}
                                        onChange={handleChange}
                                        className="grow lg:pr-[150px] text-[11px] lg:text-[14px]"
                                        placeholder="Choose Your Application Center"
                                    />
                                </label>
                            </div>
                        </div>









                        <div className=" mt-8 flex justify-between">
                            <div className="flex gap-2 text-[14px] items-center">
                                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                                <p>*Condition Applied.</p>
                            </div>
                            <div className="text-[14px]">
                                <button onClick={toggleVisibility}>Add More Apply</button>

                            </div>
                        </div>



                        <div className="mx-auto w-40  flex justify-center">
                            <button type="submit" className="bg-blue-600 py-2 hover:bg-blue-700 px-10 rounded-lg mt-4 col-span-2 text-white">
                                Submit
                            </button>
                        </div>
                    </form>
                </section>


            </div>


        </div>
    );
};

export default ApplyForm;
