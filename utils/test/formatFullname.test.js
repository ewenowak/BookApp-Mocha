const cutText = require('../cutText.js');
const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
    
    it('should return an error if there is no arg "formatFullName"', () => {
        expect(formatFullname()).to.equal('Error');
    });

    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullname(22)).to.equal('Error');
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });

    it('should return an error if there is not <firstName> and <lastName>', () => {
        expect(formatFullname('John Doe Test')).to.equal('Error');
        expect(formatFullname('John')).to.equal('Error');
    });

    it('should return proper <firstName> <lastName>', () => {
        expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
        expect(formatFullname('jOHN DOE')).to.equal('John Doe');
        expect(formatFullname('jOhN DoE')).to.equal('John Doe');
    });
});