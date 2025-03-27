const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Integration Test: Nginx Web Server', () => {
  it('should return status 200 and the greeting from the HTML file', (done) => {
    chai.request('http://localhost:8080')  // Fixed syntax issue
      .get('/')
      .end((err, res) => {
        if (err) {
          console.error('Error in request:', err);
          return done(err);
        }
        console.log('Response Status:', res.status);
        console.log('Response Text:', res.text);  // Debug response output
        
        expect(res).to.have.status(200);  // Check for successful response
        expect(res.text).to.include('Hello from Docker!');  // Ensure correct content

        done();
      });
  });
});
