 function displayPerson(){

        
    const firstname = document.getElementById('fname').value.trim();
    const surname = document.getElementById('sname').value.trim();
    const phonenumber = document.getElementById('phoneno').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();

    

         const person = {
            firstname: firstname,
            surname: surname,
            phonenumber: phonenumber,
            email: email,
            address: address
         }


         const resultpanel = document.getElementById('resultpanel');

         resultpanel.innerHTML=`

         <style>
         th, td, table{
          border: 2px solid black; 
         }

         th, td{
         padding: 12px;
         text-align: left;
         }

         th{
         font-weight: bold;
         }

         table{
         border-collapse: collapse;
         width: 100%;
         margin: 20px 0;
         }
         </style>
          <h2><u>${firstname} ${surname} Information</u></h2>

          <table>
          <thead>
          <tr>
          <th>Details</th>
          <th>Info</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>Firstname</td>
          <td>${person.firstname}</td>
          </tr>
          <tr>
          <td>Surname</td>
          <td>${person.surname}</td>
          </tr>
          <tr>
          <td>Phone Number</td>
          <td>${person.phonenumber}</td>
          </tr>
          <tr>
          <td>Email</td>
          <td>${person.email}</td>
          </tr>
          <tr>
          <td>Address</td>
          <td>${person.address}</td>
          </tr>
          </tbody>
          </table>
         <br> <hr> <br>
         <button class="btn">Clear</button>
         <button class="btn">Search</button>
         
         `;


         resultpanel.style.display = 'block';


        }





































