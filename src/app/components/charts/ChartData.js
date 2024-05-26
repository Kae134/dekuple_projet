function DataForChart(infos) {

    let infos_labels = []
    let infos_data = []

    console.log(infos)
    
    switch (infos.type) {
        case "duration_per_day":
            for (const ele of infos.data){
                infos_labels.push(ele.day)
                infos_data.push(ele.avg_duration)
            }
            break;
        
        case "humidity_distribution" :
            for (const ele of infos.data){
                infos_labels.push(ele.user_id)
                infos_data.push(ele.average_humidity)
            }
            break;
        
        default:
            break;
    }

    return [infos_labels, infos_data]
}

const backgroundColor = 
[
    'rgba(255, 99, 132, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(255, 205, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(255, 159, 64, 0.5)',
    'rgba(123, 239, 178, 0.5)',
    'rgba(255, 127, 80, 0.5)',
    'rgba(240, 128, 128, 0.5)',
    'rgba(70, 130, 180, 0.5)',
    'rgba(255, 182, 193, 0.5)',
    'rgba(60, 179, 113, 0.5)',
    'rgba(221, 160, 221, 0.5)',
    'rgba(135, 206, 250, 0.5)',
    'rgba(250, 128, 114, 0.5)',
    'rgba(255, 218, 185, 0.5)',
    'rgba(176, 224, 230, 0.5)',
    'rgba(244, 164, 96, 0.5)',
    'rgba(173, 255, 47, 0.5)',
    'rgba(205, 92, 92, 0.5)',
    'rgba(138, 43, 226, 0.5)'
]

const borderColor = [
    'rgba(255, 99, 132, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(255, 205, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(255, 159, 64, 0.5)',
    'rgba(123, 239, 178, 0.5)',
    'rgba(255, 127, 80, 0.5)',
    'rgba(240, 128, 128, 0.5)',
    'rgba(70, 130, 180, 0.5)',
    'rgba(255, 182, 193, 0.5)',
    'rgba(60, 179, 113, 0.5)',
    'rgba(221, 160, 221, 0.5)',
    'rgba(135, 206, 250, 0.5)',
    'rgba(250, 128, 114, 0.5)',
    'rgba(255, 218, 185, 0.5)',
    'rgba(176, 224, 230, 0.5)',
    'rgba(244, 164, 96, 0.5)',
    'rgba(173, 255, 47, 0.5)',
    'rgba(205, 92, 92, 0.5)',
    'rgba(138, 43, 226, 0.5)'
]

export { DataForChart, backgroundColor, borderColor }