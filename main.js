let calculation = localStorage.getItem('storeExpression') || '';

        //display calculation when the page first loads
        showResult(calculation);

        //function to display the calculation
        function showResult(expression) {
            document.querySelector('.js-operation').innerHTML = expression;
        }

        //function to take input any expression
        function operation(num) {
            calculation += num;
            console.log(calculation);
            showResult(calculation);

            localStorage.setItem('storeExpression', calculation);
        }

        //function to calculate the result
        function result(expression) {
            calculation = eval(expression);
            console.log(calculation);
            showResult(calculation);

            localStorage.setItem('storeExpression', calculation);
        }

        //function to erase the calculation
        function erase(expression) {
            calculation = '';
            console.log(calculation);
            showResult('Cleared!');
            localStorage.removeItem('storeExpression');
        }

         // Function to handle keyboard input
         document.addEventListener('keydown', function (event) {
            const key = event.key;

            // Allow numbers, operators, and dot
            if (/[0-9.+\-*/]/.test(key)) {
                operation(key);
            }
            
            // Handle Enter key for result
            if (key === 'Enter') {
                result(calculation);
            }

            // Handle Escape key for clear
            if (key === 'Escape') {
                erase();
            }

            // Handle Backspace to remove last character
            if (key === 'Backspace') {
                calculation = calculation.slice(0, -1);
                showResult(calculation);
                localStorage.setItem('storeExpression', calculation);
            }
        });