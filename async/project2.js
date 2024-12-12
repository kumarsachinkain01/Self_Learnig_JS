// Select the first element with the class 'insert'

const insert = document.querySelector('.insert'); 

// Add a single keydown event listener
window.addEventListener('keydown', (e) => {
    console.log(e); // Log the event for debugging

    // Update the innerHTML of the 'insert' element
    
    insert.innerHTML = `
        <div class='color'>
            <table>
                <tr>
                    <th>Key</th>
                    <th>Key-Code</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === " " ? "Space" : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>`;
},false);
