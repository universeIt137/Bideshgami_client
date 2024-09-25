
const UserDashboard = () => {
    return (
        <div className="space-y-5">
            <h2 className="text-xl font-bold">CUSTOMER <span className="text-primary">DASHBOARD</span></h2>
            <div className="grid grid-cols-1  sm:grid-cols-2 gap-5 w-full sm:w-max">
                <div className="w-[278px] h-[140px] bg-primary rounded-lg text-white flex justify-center items-center flex-col font-semibold mx-auto">
                    <p className="text-xl">Total File</p>
                    <p className="text-[64px] leading-none">0</p>
                </div>
                <div className="w-[278px] h-[140px] bg-gray-300 rounded-lg text-primary flex justify-center items-center flex-col font-semibold mx-auto">
                    <p className="text-xl">Success File</p>
                    <p className="text-[64px] leading-none">0</p>
                </div>
                <div className="w-[278px] h-[140px] bg-gray-300 rounded-lg text-primary flex justify-center items-center flex-col font-semibold mx-auto">
                    <p className="text-xl">Pending File</p>
                    <p className="text-[64px] leading-none">0</p>
                </div>
                <div className="w-[278px] h-[140px] bg-gray-300 rounded-lg text-primary flex justify-center items-center flex-col font-semibold mx-auto">
                    <p className="text-xl">Failed File</p>
                    <p className="text-[64px] leading-none">0</p>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;