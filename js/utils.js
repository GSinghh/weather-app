var months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
};

const organizeDataByDay = (weatherData) => {
    const dayData = {}
    
    weatherData.list.forEach(index => {
        const date = index.dt_txt.split(' ')[0];
        
        if(!dayData[date]) {
            dayData[date] = [];
        }

        dayData[date].push(index);
    })

    return dayData;
}

const formatDate = (date) => {
    const dateSplit = date.split('-');
    return months[dateSplit[1]] + ' ' + dateSplit[2];
}

export { organizeDataByDay, formatDate }