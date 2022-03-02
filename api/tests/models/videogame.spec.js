const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Super Mario Bros' });
      });
    });
  });
  
  describe('Dates', () => {
    it('should throw an error if  rating is not a number', (done) =>{
      Videogame.create({name: 'actionman', rating: "hola", platforms: "PC", genres: "action"})
        .then(() => done(new Error ('Rating should be a number')))
        .catch(() => done())
    })
    
    it('should throw an error if  platforms is not a string', (done) =>{
      Videogame.create({name: 'actionman', rating: 2, platforms: ["PC"], genres: "action"})
        .then(() => done(new Error ('Platforms should be a string')))
        .catch(() => done())
    })
  })
});

