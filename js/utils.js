var months = {
    1: "Jan",
    2: "Feb",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
};

const formatDate = (date) => {
    const dateSplit = date.split('-');
    return months[dateSplit[1]] + ' ' + dateSplit[2];
}

const convertKelvinToFahrenheit = (temp) => {
    return Math.round((temp - 273.15) * (9/5) + 32)
}

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

const calcAverageTemp = (organizedData) => {

    let tempArray = [];

    for(const key in organizedData)
    {
        if(organizedData.hasOwnProperty(key))
        {
            let totalTemp = 0;
            const weatherItems = organizedData[key];

            for(const index in weatherItems)
            {
                if(weatherItems.hasOwnProperty(index))
                {
                    totalTemp += weatherItems[index].main.temp;
                }
            }
            const averageTemp = totalTemp / weatherItems.length;
            tempArray.push(convertKelvinToFahrenheit(averageTemp));
        }

    }
    
    return tempArray;
}

export { organizeDataByDay, formatDate, convertKelvinToFahrenheit, calcAverageTemp }