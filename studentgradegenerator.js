//function get grade
function getGrade(marks){
    if (marks >=79){
        return 'A';
    }else if(marks >=60){
        return 'B';
    }else if (marks >=50){
        return 'c';
    }else if(marks >=40){
        return 'D';
    }else {
        return 'E';
    }

}
function main(){
    let marks = parseInt(prompt('Enter student marks (0-100.'));
    while (marks < 0 || marks > 100){
        alert('invalid input.please neter a number between 0 and 100.')
        marks = parseInt(prompt('Enter students marks(0-100);'));
    }
    let grade = getGrade(marks);
    console.log('Grade: ${ grade }');
}




