var assert = require('assert');
var app = require('../app.js')
var request = require('supertest')(app);
var url = "http://localhost:"+process.env.PORT;


describe('app endpoint', function() {
  it('should return a 200 on a get to "/"', function(done) {
    request
      .get('/')
      .expect(200)
      .end(function(err, res){
        if (err) done(err);
        else done();
      });
  });
  describe("user api endpoint test", function(){
    it('사용자 api 테스트 입니다', function(done){
      request
        .get('/users')
        .expect('respond with a resource')
        .end(function(err, res){
          if(err) done(err);
          else  done();
        });
    });
    it('사용자 api put', function(done){
      request
        .put('/users')
        .end(function(err, res){
          if(err) done(err);
          else  done();
        });
    });
    it('사용자 api post', function(done){
      request
        .post('/users')
        .end(function(err, res){
          if(err) done(err);
          else  done();
        });
    });
  });
});


after(function(done){
  console.log("end!! ",process.env.PORT);
  done();
});  
