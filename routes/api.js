const router = require('express').Router();
const saved = require('../models/saved.js');

//post articles of saved articles
router.post("/api/saved",(req,res)=>{
  saved.create(req.body)
  .then( data=>{
    res.json(data);
  })
  .catch(err=>{
    res.json(err)
  });
});
//get route for saved articles
router.get("/api/saved/:id?",(req,res)=>{
  if(!req.params.id){
  saved.find({})
  .then((data)=>{
    res.json(data);
  })
  }else{
    saved.find({
      id : req.params.id
    })
  .then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.json(err);
  });
}//end else
});

router.delete("/api/saved/:id",(req,res)=>{
  saved.deleteOne({_id:req.params.id}).then(
results => {res.json(results)
})

})
module.exports = router;
