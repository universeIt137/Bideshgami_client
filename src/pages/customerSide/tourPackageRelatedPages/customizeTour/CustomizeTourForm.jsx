import React from "react";

const CustomizeTourForm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-lg border">
                {/* Header */}
                <h2 className="text-center text-2xl font-semibold mb-4">Customize Tour</h2>

                <form action="" className="">
                    {/* Name and Phone */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Applying From */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                        <input
                            type="text"
                            placeholder="Applying From"
                            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Applying From"
                            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-gray-200 text-blue-500 rounded p-2 hover:bg-blue-500 hover:text-white transition">
                            Add another city
                        </button>
                    </div>

                    {/* Traveling Date and Travelers */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="date"
                            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Travelers"
                            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Traveler Counts */}
                    <div className=" flex justify-end">
                        <div className="space-y-8 mb-6">
                            {/* Adult */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-blue-600 font-semibold">Adult</h4>
                                    <p className="text-gray-500 text-sm">12 Years and above</p>
                                </div>
                                <div className="flex items-center">
                                    <button className="text-blue-500 px-2">-</button>
                                    <span className="px-2">1</span>
                                    <button className="text-blue-500 px-2">+</button>
                                </div>
                            </div>

                            {/* Children */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-blue-600 font-semibold">Children</h4>
                                    <p className="text-gray-500 text-sm">5 Years - under 12 Years</p>
                                </div>
                                <div className="flex items-center">
                                    <button className="text-blue-500 px-2">-</button>
                                    <span className="px-2">0</span>
                                    <button className="text-blue-500 px-2">+</button>
                                </div>
                            </div>

                            {/* Kids */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-blue-600 font-semibold">Kids</h4>
                                    <p className="text-gray-500 text-sm">2 Years - under 5 Years</p>
                                </div>
                                <div className="flex items-center">
                                    <button className="text-blue-500 px-2">-</button>
                                    <span className="px-2">0</span>
                                    <button className="text-blue-500 px-2">+</button>
                                </div>
                            </div>

                            {/* Kids */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-blue-600 font-semibold">Kids</h4>
                                    <p className="text-gray-500 text-sm">2 Years - under 5 Years</p>
                                </div>
                                <div className="flex items-center">
                                    <button className="text-blue-500 px-2">-</button>
                                    <span className="px-2">0</span>
                                    <button className="text-blue-500 px-2">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="w-1/4 mx-auto">
                        <button className="bg-primary font-bold text-white w-full py-2 rounded hover:bg-blue-600 transition">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CustomizeTourForm;
