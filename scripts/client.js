//console.log('js';
//works!
const employees = [
    /*{
    FirstName: 'Michael', 
    LastName: 'Scott',
    employeeID: '1234',
    employeeTitle: 'Regional Manager',
    annualSalary: '65,0000'
  },
  {
    FirstName: 'Pam',
    LastName: 'Beesly',
    employeeID: '4567',
    employeeTitle:'Office Manager',
    annualSalary: '43,000'
  },
  {
    FirstName: 'Dwight',
    LastName: 'Schrute',
    employeeID: '6666',
    employeeTitle:'Assistant to the Regional Manager',
    annualSalary:'59,000'
  },
  {
    FirstName: 'Jim',
    LastName: 'Halpert',
    employeeID: '7890',
    employeeTitle:'Paper Salesman',
    annualSalary:'57,000'
  }*/


];

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery')
    //works!

    //click event 
    $('#submit-button').on('click', addEmployee);
    //delete button
    $('table').on('click', '.deleteBtn', deleteEmployee);

    function deleteEmployee() {
        console.log('click delete');
        $(this).closest('tbody').empty('');
    }
        
    function addEmployee() {
        console.log('click add!');
        let addEmployee = {
            firstName: $('#employee-firstname').val(),
            lastName: $('#employee-lastname').val(),
            employeeID: $('#employee-id').val(),
            employeeTitle: $('#employee-title').val(),
            annualSalary: $('#employee-annual-salary').val()
        }

        if (addEmployee.firstName === '' || addEmployee.lastName === '' || addEmployee.employeeID === '' || addEmployee.employeeTitle === '' || addEmployee.annualSalary === '') {
            alert('Please enter all fields.')
        } else {

            employees.push(addEmployee);

            appendItemsToDom();
            $('#employee-firstname').val('');
            $('#employee-lastname').val('');
            $('#employee-id').val('');
            $('#employee-title').val('');
            $('#employee-annual-salary').val('');
    
       }
    }


        function appendItemsToDom() {
            $('tbody').empty();


            for (let newEmployee of employees) {
                $('tbody').append(`<tr><
        <td>${newEmployee.firstName}</td>
        <td>${newEmployee.lastName}</td>
        <td>${newEmployee.employeeID}</td>
        <td>${newEmployee.employeeTitle}</td>
        <td>$${newEmployee.annualSalary}</td>
        <td> <button class ="deleteBtn">Delete</button> </td></tr>
        `)
            }

        let totalSalaryCost = 0; 
        for (let i = 0; i <employees.length; i++) {
        totalSalaryCost += employees[i].annualSalary/12;
        //console.log('in totalSalaryCost', totalSalaryCost);
        $('#monthly-total').text(`${totalSalaryCost}`);

        if (totalSalaryCost > 20000){
            $('#monthly-total').addClass('overBudget');
        } else {
            $('#monthly-total').removeClass('overBudget');
        }
        
            
        }


    }
}


//display monthly budget
//target annual salary 