"use strict";

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let result = [];
    const groupCount = students.length / 3;
    const kidsCountInGroup = 3;
    
    for(let groupId = 0; groupId < groupCount; groupId++) {
        let newgroup = [];
        
        if(3 <= groupId) {
            result[groupId] = newgroup;
        }

        for(let i = 0; i < kidsCountInGroup; ++i) {
            newgroup[i] = arr[groupId + i];
        }
    }

    if (groupCount <= 3) {
        
    }
    
    return result;
    //console.log(result);
}

console.log(sortStudentsByGroups(students));