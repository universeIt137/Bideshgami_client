export const getTimeDifference = (obj1, obj2) => {
  // Combine the date and time into a full Date string and create Date objects
  const dateTime1 = new Date(`${obj1.date} ${obj1.time}`);
  const dateTime2 = new Date(`${obj2.date} ${obj2.time}`);

  // Get the difference in milliseconds
  const diffInMilliseconds = dateTime2 - dateTime1;

  // Convert the difference to total minutes
  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));

  // Extract hours and minutes from the total minutes
  const hours = Math.floor(diffInMinutes / 60);
  const minutes = diffInMinutes % 60;

  // Build the result string conditionally
  let result = "";
  if (hours > 0) {
    result += `${hours} hours `;
  }
  if (minutes > 0 || hours === 0) { // Always show minutes if hours is 0
    result += `${minutes} minutes`;
  }

  return result.trim();
}