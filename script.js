 var res = fetch("https://api.openbrewerydb.org/v1/breweries")
  .then((data)=>data.json()).then((data1)=>bar(data1)).catch(error => console.error(error));
  
  var container=document.createElement("div");
  container.className="container"
  var row=document.createElement("div");
  row.className="row"
  
  
  function bar(data1){
    
    for(var i =0;i<data1.length;i++){
      var col=document.createElement("div");
      col.className="col-md-4"
      col.innerHTML=`<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
      <div class="card-header ">${data1[i].name}</div>
      <div class="card-body">
        <p class="card-text">Brewery_type:${data1[i].brewery_type}</p>
        <p class="card-text">Street:${data1[i].street}</p>
        <p class="card-text">City:${data1[i].city}</p>
        <p class="card-text">Country:${data1[i].country}</p>
        <p class="card-text">Postal_code:${data1[i].postal_code}</p>
        <p class="card-text">Phone:${data1[i].phone}</p>
        </div>
        </div>`
  
     row.append(col)
      container.append(row)
      document.body.append(container);
     
    }
    }
    


  

