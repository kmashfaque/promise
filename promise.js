
const hasMeeting = false


    const meeting = new Promise((resolve, error)=>{
        if(!hasMeeting){
            const meetingDetails={
                name: "Technical meeting",
                platform: "google meet",
                time: "10 PM"
            };
            resolve(meetingDetails)
        }else{
            error(new Error("Meeting has been scheduled"));
        }
    })

    // const addToCalender=(meetingDetails)=>{
    //     return new Promise((resolve, error)=>{
    //         const calender=`${meetingDetails.name} has been scheduled on ${meetingDetails.platform} at ${meetingDetails.time}`
    //         resolve(calender)
    //     })
       
    // }
    const addToCalender=(meetingDetails)=>{
        
            const calender=`${meetingDetails.name} has been scheduled on ${meetingDetails.platform} at ${meetingDetails.time}`
            return Promise.resolve(calender)
        
       }

    meeting
        .then(addToCalender)
        .then((res)=>{
            console.log(JSON.stringify(res))
        })
        .catch((err)=>{
            console.log(err.message)
        })