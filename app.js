function addRow() {

 var t=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    const row = document.createElement('tr');
    row.setAttribute("id",`${t}`);
    row.innerHTML = `
        <td><input class="fl-table" id='dn' type="text" value="" /></td>
        <td><input class="fl-table" id='ds' type="date" value="" /></td>
        <td><input class="fl-table" id='de' type="date" value="" /></td>
         <td><input class="fl-table" id='ah' type="number" value="" /></td>
         <td><input class="fl-table" id='rs' type="text" value="" /></td>
         <td><input class="fl-table" id='tl' type="text" value="" /></td>
         <td><input class="fl-table" id='pl' type="text" value="" /></td>
         <td><button onclick="submit(${t})" style="background-color: transparent;border: none;"><img src="https://www.pngmart.com/files/8/Save-Button-PNG-File-Download-Free.png" width="15" height="15"/></button></td>

    `;
    table.rows[table.rows.length - (table.rows.length-1)].insertAdjacentElement('beforebegin',row);
   
}


function submit(t){
    let dn = document.getElementById("dn").value;
    let ds = document.getElementById("ds").value;
    let de = document.getElementById("de").value;
    let ah = document.getElementById("ah").value;
    let rs = document.getElementById("rs").value;
    let tl = document.getElementById("tl").value;
    let pl = document.getElementById("pl").value;

    let row=t.id;
console.log(row)
    const html=`
    <td>${dn}</td>
    <td>${ds}</td>
    <td>${de}</td>
     <td>${ah}</td>
     <td>${rs}</td>
     <td>${tl}</td>
     <td>${pl}</td>
     <td><button onclick="edit(${row})" style="background-color: transparent;border: none;"><img src="https://th.bing.com/th/id/R.acaa7c349408056527b28b4c1255004f?rik=Z%2f4PQpGGHcW8zQ&riu=http%3a%2f%2fimage.flaticon.com%2ficons%2fpng%2f512%2f61%2f61456.png&ehk=BXzOA%2buWRz4eHna%2f2XWLaXCKWHxQuiQso6YY1p%2bVFDc%3d&risl=&pid=ImgRaw&r=0" width="15" height="15"/></button></td>
`
t.innerHTML=html;
}

function edit(r){
    let row=r.id;
    r.innerHTML = `
    <td><input class="fl-table" id='aa' type="text" value="" /></td>
    <td><input class="fl-table" id='bb' type="date" value="" /></td>
    <td><input class="fl-table" id='cc' type="date" value="" /></td>
     <td><input class="fl-table" id='dd' type="number" value="" /></td>
     <td><input class="fl-table" id='ee' type="text" value="" /></td>
     <td><input class="fl-table" id='ff' type="text" value="" /></td>
     <td><input class="fl-table" id='gg' type="text" value="" /></td>
     <td><button onclick="editnow(${row})" style="background-color: transparent;border: none;"><img src="https://th.bing.com/th/id/R.acaa7c349408056527b28b4c1255004f?rik=Z%2f4PQpGGHcW8zQ&riu=http%3a%2f%2fimage.flaticon.com%2ficons%2fpng%2f512%2f61%2f61456.png&ehk=BXzOA%2buWRz4eHna%2f2XWLaXCKWHxQuiQso6YY1p%2bVFDc%3d&risl=&pid=ImgRaw&r=0" width="15" height="15"/></button></td>
`;
}

function editnow(r){
      
    let dn = document.getElementById("aa").value;
    let ds = document.getElementById("bb").value;
    let de = document.getElementById("cc").value;
    let ah = document.getElementById("dd").value;
    let rs = document.getElementById("ee").value;
    let tl = document.getElementById("ff").value;
    let pl = document.getElementById("gg").value;

    const html=`
    <td>${dn}</td>
    <td>${ds}</td>
    <td>${de}</td>
     <td>${ah}</td>
     <td>${rs}</td>
     <td>${tl}</td>
     <td>${pl}</td>
     <td><button style="background-color: transparent;border: none;"><img src="https://th.bing.com/th/id/R.acaa7c349408056527b28b4c1255004f?rik=Z%2f4PQpGGHcW8zQ&riu=http%3a%2f%2fimage.flaticon.com%2ficons%2fpng%2f512%2f61%2f61456.png&ehk=BXzOA%2buWRz4eHna%2f2XWLaXCKWHxQuiQso6YY1p%2bVFDc%3d&risl=&pid=ImgRaw&r=0" width="15" height="15"/></button></td>
`
r.innerHTML=html;
}