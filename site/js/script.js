
            var rIndex, table = document.getElementById("table");
            
            // check the empty input
            function checkEmptyInput()
            {
                var isEmpty = false,
                    INDEX = document.getElementById("INDEX").value, 
                    CODE = document.getElementById("CODE").value;
                    NAME = document.getElementById("NAME").value;
                    DESC = document.getElementById("DESC").value;
                    CANT = document.getElementById("CANT").value;
            
                if(INDEX === ""){
                    alert("Index Connot Be Empty");
                    isEmpty = true;
                }
                else if(CODE === ""){
                    alert("Cod. Art. Connot Be Empty");
                    isEmpty = true;
                }
                else if(NAME === ""){
                    alert("Nombre Art. Connot Be Empty");
                    isEmpty = true;
                }
                else if(DESC === ""){
                    alert("Desc. Art. Connot Be Empty");
                    isEmpty = true;
                }
                else if(CANT === ""){
                    alert("Cant. Art. Connot Be Empty");
                    isEmpty = true;
                }
                return isEmpty;
            }
            
            // add Row
            function addHtmlTableRow()
            {
                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's
                INDEX = document.getElementById("INDEX").value;

                if(!checkEmptyInput()){
                var newRow = table.insertRow(INDEX),
                    cell1 = newRow.insertCell(0);
                    cell2 = newRow.insertCell(1);
                    cell3 = newRow.insertCell(2);
                    cell4 = newRow.insertCell(3);
                    cell5 = newRow.insertCell(4);

                    INDEX = document.getElementById("INDEX").value;
                    CODE = document.getElementById("CODE").value;
                    NAME = document.getElementById("NAME").value;
                    DESC = document.getElementById("DESC").value;
                    CANT = document.getElementById("CANT").value;
            
                cell1.innerHTML = INDEX;
                cell2.innerHTML = CODE;
                cell3.innerHTML = NAME;
                cell4.innerHTML = DESC;
                cell5.innerHTML = CANT;
                // call the function to set the event to the new row
                selectedRowToInput();

                }
                for(var i = 1; i < table.rows.length; i++)
                {
                    

                    table.rows[i].cells[0].innerHTML = i;
                      
                    
                }
            }
            
            // display selected row data into input text
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("INDEX").value = this.cells[0].innerHTML;
                      document.getElementById("CODE").value = this.cells[1].innerHTML;
                      document.getElementById("NAME").value = this.cells[2].innerHTML;
                      document.getElementById("DESC").value = this.cells[3].innerHTML;
                      document.getElementById("CANT").value = this.cells[4].innerHTML;
                    };
                }
            }
            selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var INDEX = document.getElementById("INDEX").value;
                    CODE = document.getElementById("CODE").value;
                    NAME = document.getElementById("NAME").value;
                    DESC = document.getElementById("DESC").value;
                    CANT = document.getElementById("CANT").value;

               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = INDEX;
                table.rows[rIndex].cells[1].innerHTML = CODE;
                table.rows[rIndex].cells[2].innerHTML = NAME;
                table.rows[rIndex].cells[3].innerHTML = DESC;
                table.rows[rIndex].cells[4].innerHTML = CANT;
              }
              for(var i = 1; i < table.rows.length; i++)
                {
                    

                    table.rows[i].cells[0].innerHTML = i;
                      
                    
                }
            }
            
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                // clear input text
                document.getElementById("INDEX").value = "";
                document.getElementById("CODE").value = "";
                document.getElementById("NAME").value = "";
                document.getElementById("DESC").value = "";
                document.getElementById("CANT").value = "";

                
                for(var i = 1; i < table.rows.length; i++)
                {
                    

                    table.rows[i].cells[0].innerHTML = i;
                      
                    
                }
            }


