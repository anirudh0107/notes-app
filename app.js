const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandoption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)        
    }
})

yargs.command({
    command: 'add',
    describe: 'Add a new  note',
    builder : {
        body:{
             describe: 'note body',
             demandoption: true,
             type: 'string'
        },
        title:{
            describe: 'note title',
            demandoption : true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing a note',
    handler(argv) {
        notes.listNotes(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'note title',
            demandoption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// console.log(process.argv)
// console.log(yargs.argv)
yargs.parse()