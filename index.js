function createEmployeeRecord(employee) {

return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
}}

function createEmployeeRecords(employee) {
return employee.map(createEmployeeRecord)
}

function createTimeInEvent(record, dateStamp) {
    const splitDateStamp = dateStamp.split(' ')
    
            record.timeInEvents.push({
            type: "TimeIn", 
            hour: parseInt(splitDateStamp[1], 10),
            date: splitDateStamp[0]
            })
            return record
    }  

function createTimeOutEvent(record, dateStamp) {
    const splitDateStamp = dateStamp.split(' ')
    record.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(splitDateStamp[1], 10),
        date: splitDateStamp[0]
    })
    return record
}