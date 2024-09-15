/* eslint-disable react/prop-types */

const VisibleDay = ({ comingDay = new Date() }) => {

    const options = {
        month: 'short',
        day: 'numeric',
        weekday: 'long'
    };

    // Convert the date to the desired format
    const formattedDate = comingDay.toLocaleDateString('en-US', options);

    // Split the formatted date to separate the day of the week
    const [monthDay, weekday] = formattedDate.split(',');
    return (
        <>
            <p className="lg:text-xl font-bold">{weekday.trim()}</p>
            <p className="text-[12px]">{monthDay}</p>
        </>
    );
};

export default VisibleDay;