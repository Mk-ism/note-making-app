const Notes = require('../models/Notes');

module.exports.getNotes = (req, res) => {
    Notes.findAll()
    .then(notes => {
        const noteArray = notes.map(notes => notes.toJSON());
        console.log({
            notes: noteArray
        });
        res.send(noteArray);
    })
    .catch(err => console.log(err))
};

module.exports.addNotes = (req, res) => {
    let { id, title, description } = req.body;
    let errors = [];

    if(!id) {
        errors.push({ text: 'Please add a id' });
    }

    if(!title) {
        errors.push({ text: 'Please add a title' });
    }

    if(!description) {
        errors.push({ text: 'Please add a description' });
    }

    //check for errors
    if(errors.length > 0) {
        console.log('info incomplete');
    } else {
        //Insert into table 
        Notes.create({
            id,
            title,
            description,
        })
        .then(notes => res.redirect('/notes'))
        .catch(err => console.log(err));
    }
}

module.exports.removeNote = (req, res) => {
    const { id } = req.params;
    Notes.destroy({
        where: {
            id
        }
    })
    .then(
        res.redirect('/notes')
    )
    .catch(err => console.log(err));
}

module.exports.updateNote = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    Notes.update(
        { 
            title,
            description
        },{
            where: { id }
        }
    )
    .then(notes => res.redirect('/notes'))
    .catch(err => handleError(err))
}