import React from 'react';
import InputWithHint from '../InputWithHint';

const FormComponents = ({handleSubmit,formData, handleChange, labelStyle, isVisible, toggleVisibility }) => {
    return (
        <div className='bg-[#f4f8fe] p-5 rounded-lg shadow-lg'>
            <form onSubmit={handleSubmit} className='max-w-[774px] mx-auto'>
                        <div className='  mx-auto  p-5'>
                            <div className={`grid md:grid-cols-1 gap-5 lg:gap-12 w-8/12 mx-auto`}>

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

                                <label className={`${labelStyle}`}>
                                    <input
                                        type="text"
                                        name="from"
                                        value={formData.from}
                                        onChange={handleChange}
                                        className="grow  text-[11px] lg:text-[14px]"
                                        placeholder="From(Auto Fill)"
                                    />
                                </label>

                                <label className={`${labelStyle}`}>
                                    <input
                                        type="text"
                                        name="to"
                                        value={formData.to}
                                        onChange={handleChange}
                                        className="grow  text-[11px] lg:text-[14px]"
                                        placeholder="To(Auto Fill)"
                                    />
                                </label>
                            </div>

                            <div className={`grid md:grid-cols-1 gap-10 mt-12 w-8/12 mx-auto`}>
                                
                            <label className={`${labelStyle}`}>
                                    <input
                                        type="text"
                                        name="center"
                                        value={formData.center}
                                        onChange={handleChange}
                                        className="grow    text-[11px] lg:text-[14px]"
                                        placeholder="Choose Your Application Center"
                                    />
                                </label>

                                <label className={`${labelStyle}`}>
                                    <input
                                        type="text"
                                        name="due"
                                        value={formData.due}
                                        onChange={handleChange}
                                        className="grow    text-[11px] lg:text-[14px]"
                                        placeholder="Service Type (Auto Fill)"
                                    />
                                </label>

                                <label className={`${labelStyle}`}>
                                    <input
                                        type="text"
                                        name="due"
                                        value={formData.due}
                                        onChange={handleChange}
                                        className="grow    text-[11px] lg:text-[14px]"
                                        placeholder="Total Payment (Auto Fill)"
                                    />
                                </label>

                                
                            </div>

                           




                        </div>

                        <div className={`${isVisible ? '' : 'hidden'}   mx-auto border border-primary p-5 mt-5`}>

                            <div className="grid md:grid-cols-3 gap-4">
                                <label className={`${labelStyle}`}>
                                    <input
                                        type="text"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="grow     text-[11px] lg:text-[14px]"
                                        placeholder="Service Type (Auto Fill)"
                                    />
                                </label>

                                <label className={`${labelStyle}`}>
                                    <input
                                        type="text"
                                        name="total"
                                        value={formData.total}
                                        onChange={handleChange}
                                        className="grow     text-[11px] lg:text-[14px]"
                                        placeholder="Total Pyment (Auto Fill)"
                                    />
                                </label>

                                <label className={`${labelStyle}`}>
                                    <input
                                        type="text"
                                        name="due"
                                        value={formData.due}
                                        onChange={handleChange}
                                        className="grow     text-[11px] lg:text-[14px]"
                                        placeholder="Due Pyment (Auto Fill)"
                                    />
                                </label>
                            </div>



                            <div className={`grid md:grid-cols-2 gap-4 mt-12 `}>
                                <label className={`${labelStyle}`}>
                                    <input
                                        type="text"
                                        name="due"
                                        value={formData.due}
                                        onChange={handleChange}
                                        className="grow    text-[11px] lg:text-[14px]"
                                        placeholder="Due Pyment (Auto Fill)"
                                    />
                                </label>

                                <label className={`${labelStyle}`}>
                                    <input
                                        type="text"
                                        name="center"
                                        value={formData.center}
                                        onChange={handleChange}
                                        className="grow    text-[11px] lg:text-[14px]"
                                        placeholder="Choose Your Application Center"
                                    />
                                </label>
                            </div>
                        </div>


                        <div className=" mt-8 flex justify-between">
                            <div className="flex gap-2 text-[14px] items-center">
                                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                                <p>*I Agree to the website terms and conditions and privacy policy.</p>
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
        </div>
    );
};

export default FormComponents;