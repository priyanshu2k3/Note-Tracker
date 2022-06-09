const router = require('express').Router();
const Note =require('../models/note.model.js');

router.route('/').get((req, res) => {
    Note.find()
      .then(notes => res.json(notes))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/add').post((req, res) => {
    
    const title=  req.body.title;
    const author= req.body.author;
    const des=    req.body.des;
    const tag=    req.body.tag;
  
    const newNote = new Note({title,author,des,tag});
  
    newNote.save()
      .then(() => res.send("Note added"))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Note.findByIdAndDelete(req.params.id)
      .then(() => res.json('Note deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

//UPDATE UPDATE UPDATE UPDATE UPDATE UPDATE UPDATE UPDATE UPDATE UPDATE UPDATE 

  router.route('/update/:id').post((req, res) => {
    Note.findById(req.params.id)
    
      .then(note => {
        note.title=  req.body.title;
        note.author= req.body.author;
        note.des=    req.body.des;
        note.tag=    req.body.tag;
  
        note.save()
          .then(() => res.json('note updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;

