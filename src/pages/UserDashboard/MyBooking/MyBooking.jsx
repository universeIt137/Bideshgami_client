import { HiDocumentDownload } from 'react-icons/hi';
import qrImg from '../../../assets/icon/qr.png'
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
const MyBooking = () => {
    const data = [
        {
            id: 1,
            date: "12-05-2024",
            category: "work permit",
            passportNo: "A0004550",
            name: "MD. MAHAMUDUL HASAN FAHAD",
            bookingID: "000445566788",
            qr: "QR Code 1 URL"
        },
        {
            id: 2,
            date: "13-05-2024",
            category: "work permit",
            passportNo: "A0004551",
            name: "MD. SAIFUR RAHMAN",
            bookingID: "000445566789",
            qr: "QR Code 2 URL"
        },
        {
            id: 3,
            date: "14-05-2024",
            category: "work permit",
            passportNo: "A0004552",
            name: "MD. KAMRUL HASAN",
            bookingID: "000445566790",
            qr: "QR Code 3 URL"
        },
        {
            id: 4,
            date: "15-05-2024",
            category: "work permit",
            passportNo: "A0004553",
            name: "MD. NASIR UDDIN",
            bookingID: "000445566791",
            qr: "QR Code 4 URL"
        },
        {
            id: 5,
            date: "16-05-2024",
            category: "work permit",
            passportNo: "A0004554",
            name: "MD. ASHRAF ALI",
            bookingID: "000445566792",
            qr: "QR Code 5 URL"
        },
        {
            id: 6,
            date: "17-05-2024",
            category: "work permit",
            passportNo: "A0004555",
            name: "MD. FARHAN AHMED",
            bookingID: "000445566793",
            qr: "QR Code 6 URL"
        },
        {
            id: 7,
            date: "18-05-2024",
            category: "work permit",
            passportNo: "A0004556",
            name: "MD. RAKIB HOSSAIN",
            bookingID: "000445566794",
            qr: "QR Code 7 URL"
        },
        {
            id: 8,
            date: "19-05-2024",
            category: "work permit",
            passportNo: "A0004557",
            name: "MD. TANVIR ISLAM",
            bookingID: "000445566795",
            qr: "QR Code 8 URL"
        },
        {
            id: 9,
            date: "20-05-2024",
            category: "work permit",
            passportNo: "A0004558",
            name: "MD. SHAHIN ALAM",
            bookingID: "000445566796",
            qr: "QR Code 9 URL"
        },
        {
            id: 10,
            date: "21-05-2024",
            category: "work permit",
            passportNo: "A0004559",
            name: "MD. RONY AHMED",
            bookingID: "000445566797",
            qr: "QR Code 10 URL"
        }
    ]

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-primary/10 text-primary text-sm">
                        <tr>
                            <th>Serial No</th>
                            <th>Date Entered</th>
                            <th>Passport No</th>
                            <th>Full Name</th>
                            <th>Booking ID</th>
                            <th>QR</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs font-semibold ">
                        {/* row 1 */}
                        {
                            data.map((item, key) => <tr key={key}>
                                <th className="text-primary text-center">{key + 1}</th>
                                <td className='text-center'>{item.date}</td>
                                <td>{item.passportNo}</td>
                                <td>{item.name}</td>
                                <td>{item.bookingID}</td>
                                <td>
                                    <div className='flex items-center'>
                                        <img className='size-5' src={qrImg} alt="" />
                                        <div>
                                            <HiDocumentDownload className='text-xl text-primary' />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div  className='flex items-center justify-center gap-1'>
                                        <FaCloudDownloadAlt className='text-xl text-primary' />
                                        <HiDocumentDownload className='text-xl text-primary' />
                                        <RiDeleteBin6Fill className='text-xl text-red-500' />
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <div className='flex gap-2 justify-end py-2 pr-7'>
                    <button className='bg-primary text-white flex items-center gap-1 px-2 rounded-full hover:bg-primary/90 transition-all duration-300 hover:px-[9px] hover:gap-0.5'><FaArrowLeftLong /> Previous </button>
                    <button className='bg-primary text-white flex items-center gap-1 px-2 rounded-full hover:bg-primary/90 transition-all duration-300 hover:gap-2 hover:px-1.5'>Next <FaArrowRightLong /></button>
                </div>
            </div>
        </div>
    );
};

export default MyBooking;