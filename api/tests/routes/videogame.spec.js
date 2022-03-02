/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description: 'hola mario bros super',
  platforms: 'PC'
};

// describe('Videogame routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Videogame.sync({ force: true })
//     .then(() => Videogame.create(videogame)));
//   describe('GET /videogames', () => {
//     it('should get 200', () => 
//       agent.get('/videogames').expect(200)
//     ).timeout(50000)
//   });
//   describe('GET /videogames?name=xxxxx', () => {
//     it("if gets a name, responds 200 ", () =>
//     agent.get('/videogames?name=portal'))
//   })
// });

// describe("Genres Routes", () => {
//   describe("GET /genres", () => {
//     it("should get 200", () => agent.get("/genres").expect(200));
//   });
// });