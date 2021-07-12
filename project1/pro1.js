function createTable(colNum,rowNum) {
	


					var div1=document.createElement("div");
					div1.setAttribute("id","container");

					document.body.appendChild(div1);


				var table1=document.createElement('table');
			document.getElementById("container").appendChild(table1);

			var tablebody=document.createElement('tbody');
			table1.appendChild(tablebody);
					
				
					//cell creation
					for(var i=0;i<rowNum;i++)
					{


						var row=document.createElement("tr");

						for(var j=0;j<colNum;j++){

						var cell=document.createElement('td');
						/*if((j%2===0) && (i%2===0)){
						cell.setAttribute("id", "black")
					}
						else if(){
							cell.setAttribute("id","white")
							}*/
								if(i%2==0 ){
									if(j%2==0){

									cell.setAttribute("id","black");
								}else{
									cell.setAttribute("id","white");
								}

								}


								else {
									if(j%2==0){
								cell.setAttribute("id","white");

									}else{

								cell.setAttribute("id","black");
							}
							}

						row.appendChild(cell);
					}
								tablebody.appendChild(row);

					}	


console.log(document.table1);
console.log(row);



}




function Setvalue(){


	var rowNum=document.getElementById("rn").value;
//	rowNum=parseInt(rowNum);
//	console.log(typeof rowNum);
	var colNum=document.getElementById("cn").value;
//	colNum=parseInt(colNum);

//	console.log(colNum, rowNum);
//	check(colNum,rowNum);
	
if((rowNum < 9 && colNum <9) && (rowNum > 0 && colNum > 0  ) && ( rowNum !=null && colNum != null) ) {

var disButton=	document.getElementById("bt").disabled=true;
	

	createTable(colNum,rowNum);
}
else{
	alert("row and column size is only between 1 and 8")

	throw "invalid input"
}

}


