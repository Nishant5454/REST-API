import express from "express"; 
import bodyParser from "body-parser"; 
const app=express(); 
const PORT=3000;
let hotels=[
    {  
        name:"TAJ",
        id:1, 
        location:"Bhopal"

    },
    { 
        name:"Raddison", 
        id:2, 
        location:"MP-NAGAR"
    },
    { 
        name:"KAILASH",
        id:3, 
        location:"PATEL-NAGAR"
    }
]; 
app.use(bodyParser.json()); 

app.post('/post',(req,res)=>{ 
    const newhotel=req.body
    hotels.push(newhotel); 
    console.log(newhotel);
    res.status(201).json(newhotel);
});

app.get('/hotels',(req,res)=>{  

    res.json(hotels)
    console.log(hotels);
}); 
app.get('/hotels/:ID',(req,res)=>{ 
    const ID=parseInt(req.params.ID) 
    const hotel=hotels.find(hotel=>hotel.id===ID)    
    if(hotel){ 
        res.status(201).json(hotel);
    }
    else{ 
        res.status(404).json({message:`Error in the server`})
    }

});  
app.put('/hotels/put/:ID',(req,res)=>{ 
    const ID=parseInt(req.params.ID); 
    const updatehotel=req.body 
    const index=hotels.findIndex(hotel=>hotel.id===ID); 
    if(index!=-1){ 
        hotels[index]={ ...hotels[index], ...updatehotel}; 
        res.json(hotels[index]);
    }
    else{ 
        res.status(404).json({message:`Error`})
    }
}); 
app.delete('/hotels/:hotelId', (req, res) => {
    const hotelId = parseInt(req.params.hotelId);
    hotels = hotels.filter(hotel => hotel.id !== hotelId);
    res.json({ message: 'Hotel deleted successfully' });
});

app.listen(PORT)