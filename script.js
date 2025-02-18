
        // // create a function to update the date and time
        // function updateDateTime() {
        //   // create a new `Date` object
        //   const now = new Date();
  
        //   // get the current date and time as a string
        //   const currentDateTime = now.toLocaleString();
  
        //   // update the `textContent` property of the `span` element with the `id` of `datetime`
        //   document.querySelector('#datetime').textContent = currentDateTime;
        // }
  
        // // call the `updateDateTime` function every second
        // setInterval(updateDateTime, 1000);

//   ------------Date&Time-------------------------------------        

        function updateDateTime() {
            const now = new Date();
            const options = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit',
                hour12: true 
            };
            const formattedDateTime = now.toLocaleString('en-US', options);
            document.getElementById('dateTime').textContent = formattedDateTime;
            document.getElementById('dateTime').setAttribute('datetime', now.toISOString());
        }

        setInterval(updateDateTime, 1000); // Update every second


          
//   ------------greetings-------------------------------------


          function getGreeting() {
            const now = new Date();
            const hours = now.getHours();

            let greeting;
            if (hours < 12) {
                greeting = "Good Morning! FSE";
            } else if (hours < 18) {
                greeting = "Good Afternoon! FSE";
            } else {
                greeting = "Good Evening! FSE";
            }

            document.getElementById("greeting").textContent = greeting;
        }

        getGreeting();


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const text = "Field Support Engineer";
        let index = 0;

        function type() {
            if (index < text.length) {
                document.getElementById("typing").textContent += text.charAt(index);
                index++;
                setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
            }
        }

  type();
          
