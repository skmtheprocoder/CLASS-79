var students_name_array=[];

function submit()
{
    var st1= document.getElementById("student1").value;
    var st2= document.getElementById("student2").value;
    var st3= document.getElementById("student3").value;
    var st4= document.getElementById("student4").value;
    students_name_array.push(st1);
    students_name_array.push(st2);
    students_name_array.push(st3);
    students_name_array.push(st4);

    console.log(students_name_array);

    document.getElementById("display_name").innerHTML=students_name_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display= "inline-block"
}
    function sort()
    {
        students_name_array.sort();
        console.log(students_name_array);
        document.getElementById("display_name").innerHTML=students_name_array
    }

