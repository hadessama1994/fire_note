var express = require('express');
var router = express.Router();
const Nota = require('../models/note.js');
const withAuth = require('../middleware/auth');
const WithAuth = require('../middleware/auth');
const note = require('../models/note.js');


router.post('/', WithAuth, async(req,res)=>{
    const {title, body} = req.body;
    
    try {

        let note = new Nota({title: title, body: body, author: req.user._id }) //veja auth.js com req.user
        await note.save();
        res.status(200).json({note, 
            authorName: req.user.name})
    } catch (error) {
        res.status(500).json({error: 'problema de criar nota'})
         
    }

})

router.get('/search', withAuth, async(req,res)=>{
    const {query} = req.query
    try {
        let notes = await Nota
        .find({author: req.user._id})
        .find({$text: {$search: query}})
        res.json(notes)


        
    } catch (error) {
        res.status(500).json({error: 'deu ruim na busca'})
    }
})


router.get('/:id', withAuth, async(req,res)=>{

    try {
        const {id} = req.params; //vai vir da url
        let note = await Nota.findById(id);        
        if (isOwner(req.user, note))
        res.json({note, authorName: req.user.name});
        else
        res.status(403).json({error :'Sem permissão'})

        
    } catch (error) {
        res.status(500).json({error: 'problema de pegar nota'})
        
    }
})



router.get('/', withAuth, async(req,res)=>{ //listar todas as notas pelo autor
    try {
        let notes = await Nota.find({author: req.user._id})
        res.json(notes);
    } catch (err) {
        res.json({error: error}).status(500);
        
    }
})


router.put('/:id', withAuth, async(req,res)=>{
    const {title, body} = req.body;
    const {id} = req.params;
    

    

    try { 


        let note = await Nota.findById(id)
        
       
        
            
            if(isOwner(req.user, note)){
                
                let note = await Nota.findOneAndUpdate(
                {_id: id},
                {$set: {title: title, body: body}},
                {upsert: true, 'new': true}
            )   
            res.json(note)         
        }  
            
    

    
        
    
    } catch (error) {
        res.status(500).json({error: 'deu ruim no update'})
    }

})




router.delete('/:id', withAuth, async(req, res)=>{
    const {id} = req.params;

    try {
        let note = await Nota.findById(id);
        if(isOwner(req.user, note)){
            await note.delete();
            res.json({message: 'ok'}).status(204)
        }
        else{
            res.status(403).json({error: 'negado'})
        }
        
    } catch (error) {
        res.status(500).json({error: 'deu ruim no delete'})
    }
    }
)



const isOwner = (user, note)=>{ //verificar se a nota é do usuario que ta puxando
    if(JSON.stringify(user._id) == JSON.stringify(note.author._id))
    return true;
    else
    return false;
}   

module.exports = router;