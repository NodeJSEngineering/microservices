// const Cube = require('./app').Cube;
// let request = require("chai");
import { expect } from 'chai'; 
import { sinon } from 'sinon'; 
import { faker } from 'faker'; 

import Cube from './app.js';


// const expect = require('chai').expect;
// import {expect} from 'chai';
// const { expect } = require('chai');

describe('Testing the Cube Functions', function() {
    const stubValue = {
        id: faker.random.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      };
it.only('1. The side length of the Cube', function(done) {
let c1 = new Cube(2);
console.log(c1.getSideLength(), 'getSideLength()')
expect(c1.getSideLength()).to.equal(2);
done();
});

it('2. The surface area of the Cube', function(done) {
let c2 = new Cube(5);
expect(c2.getSurfaceArea()).to.equal(150);
done();
});

it('3. The volume of the Cube', function(done) {
let c3 = new Cube(7);
expect(c3.getVolume()).to.equal(343);
done();
});

it("should add a new user to the db", async function() {
    const stub = sinon.stub(UserModel, "create").returns(stubValue);
    const userRepository = new UserRepository();
    const user = await userRepository.create(stubValue.name, stubValue.email);
    expect(stub.calledOnce).to.be.true;
    expect(user.id).to.equal(stubValue.id);
    expect(user.name).to.equal(stubValue.name);
    expect(user.email).to.equal(stubValue.email);
    expect(user.createdAt).to.equal(stubValue.createdAt);
    expect(user.updatedAt).to.equal(stubValue.updatedAt);
  });

  it("should retrieve a user with specific id", async function() {
    const stub = sinon.stub(UserModel, "findOne").returns(stubValue);
    const userRepository = new UserRepository();
    const user = await userRepository.getUser(stubValue.id);
    expect(stub.calledOnce).to.be.true;
    expect(user.id).to.equal(stubValue.id);
    expect(user.name).to.equal(stubValue.name);
    expect(user.email).to.equal(stubValue.email);
    expect(user.createdAt).to.equal(stubValue.createdAt);
    expect(user.updatedAt).to.equal(stubValue.updatedAt);
  });

});