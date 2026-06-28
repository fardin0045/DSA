const studentData = ["onik","fardin","ajmayen"];

function findStudent  (studentData, stuName) {
    for (let i = 0; i<studentData.length; i++){
        if(studentData[i] === stuName){
            console.log(`Found ${stuName}`)
            
        }
    }
}

findStudent(studentData,'ajmayen');