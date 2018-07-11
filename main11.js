var myObj =
           [{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
           {'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
           {'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
           {'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
           {'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
           {'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
          for(i=0;i<myObj.length;i++)
           {
          if(myObj[i].occupation=="Programmer")
          console.log(myObj[i]);
          }
          console.log(myObj.sort(function(a, b)
          {
                 return a.age < b.age
          }));
            var empnames= myObj.map(function(_name)
            {
                return _name.name;
            });
            console.log(empnames);

           
                var newObj={}
                for (var z of myObj){
                  newObj[z['occupation']]=[];
                }
                for (var z of myObj){
                  newObj[z['occupation']].push(z);
                }
                for (var k in newObj){
                  for (var l of newObj[k]){
                        delete l['occupation']
                  }
                }
                console.log(newObj)
              
             