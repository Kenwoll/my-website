const calculate = () => {
  
    let name = document.querySelector("#name").value;
    let surname = document.querySelector("#surname").value;
    let s_percentage = document.querySelector("#percentage").value;
    let grade = "";
    
    percentage = parseFloat(s_percentage);
    percentage = Math.round(percentage)

    if (percentage >= 94) {
        grade = "A";
    } else if (percentage >= 90) {
        grade = "A-";
    } else if (percentage >= 87) {
        grade = "B+";
    } else if (percentage >= 83) {
        grade = "B";
    } else if (percentage >= 80) {
        grade = "B-";
    } else if (percentage >= 77) {
        grade = "C+";
    } else if (percentage >= 73) {
        grade = "C";
    } else if (percentage >= 70) {
        grade = "C-";
    } else if (percentage >= 67) {
        grade = "D+";
    } else if (percentage >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    if (name == "" || surname == "" || s_percentage == "") {
        document.querySelector("#showdata").innerHTML = "Please enter all the fields!!!!";
    } else {
        if (percentage >= 59.5) {
            document.querySelector("#showdata").innerHTML = 
                ` Congratulations ${name} ${surname}! <br> 
                You have passed the course with ${grade}`;
        } else {
            document.querySelector("#showdata").innerHTML = 
                ` Hello ${name} ${surname}! <br>
                Unfortunately you have failed the course. Your grade is ${grade}`;
        }
    }
};