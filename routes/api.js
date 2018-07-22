const router = require('express').Router();
const saved = require('../models/saved.js');
//post articles of saved articles
router.post("./api/saved",(req,res)=>{
  saved.create(req.body)
  .then(()=>{
    res.json(true);
  })
  .catch((err)=>{
    res.json(err)
  });
});

// router.get("./api/saved/:id?",(req,res)=>{
//   if(!req.params.id){
//   saved.find({})
//   .then((data)=>{
//     res.json(data);
//   })
//   }else{
//     saved.find({
//       id : req.params
//     })
//   .then((data)=>{
//     res.json(data);
//   }).catch((err)=>{
//     res.json(err);
//   });
// }//end else
// });


module.exports = router;
