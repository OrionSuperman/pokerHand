const rewire = require('rewire');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe("index.js", () => {
  let index;
  
  beforeEach(() => {
    index = rewire('./');
  });
  
  describe("happy path", () => {
    it("returns the correct hand based on input cards", () => {
      let testCards = ['5s', '5c', '5h', 'Td', 'Th'];
      let expectedHand = "Full House, 5's over 10's";
      let result = index(testCards);
      
      expect(result).to.eql(expectedHand);
    });
  });
  
  describe("errors", () => {
    let consoleErrorStub;
    
    beforeEach(() => {
      consoleErrorStub = sinon.stub(console, "error");
    });
    
    afterEach(() => {
      consoleErrorStub.restore();
    })
    
    it("when input type is not array", () => {
      let testCards = 'Kh Qh 6h 2h 9h';
      try{
        index(testCards);
      }catch(err){
        expect(consoleErrorStub).to.have.been.calledOnce;
        expect(err.message).to.eql("Function 'findHand' requires an array of cards as input. ex: ['5s', '5c', '5h', 'Td', 'Th']")
      }
    });
    
    it("when input is an empty array", () => {
      let emptyArray = [];
      try{
        index(emptyArray);
      }catch(err){
        expect(consoleErrorStub).to.have.been.calledOnce;
        expect(err.message).to.eql("Function 'findHand' requires an array of cards as input. ex: ['5s', '5c', '5h', 'Td', 'Th']")
      }
    })
  });
});