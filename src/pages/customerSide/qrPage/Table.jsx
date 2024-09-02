import React from 'react';

const Table = () => {
    return (
        <>
            <div className="border border-black">
                        <div className="grid grid-cols-3 text-center lg:text-xl text-[12px] font-bold">
                            <div className="border border-black">Name</div>
                            <div className="border border-black">Passport No.</div>
                            <div className="border border-black">Adress</div>
                        </div>

                        <div className="grid grid-cols-3 text-center font-bold h-7">
                            <div className="border border-black"></div>
                            <div className="border border-black"></div>
                            <div className="border border-black"></div>
                        </div>
                        <div className="grid grid-cols-3 text-center font-bold h-7">
                            <div className="border border-black"></div>
                            <div className="border border-black"></div>
                            <div className="border border-black"></div>
                        </div>
                    </div>
        </>
    );
};

export default Table;