// I tried to do the tests in mocha chai.
// I didn't succeed to find the reason why it doesn’t work in the time frame of this exercise.
// "npm test" runs the following tests

// const chai = require('chai');
// const chaiFetchMock = require('chai-fetch-mock');
// const fetchMock = require('fetch-mock');
 
// chai.use(chaiFetchMock);
 
// describe('test', () => {
//   before(() => fetchMock.get('http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&count=4&source.type=video&source.id=214321562187&source.url=http://www.site.com/videos/214321562187.html'))
 
//   it('calls fetch', () => {
//     return fetch('http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&count=4&source.type=video&source.id=214321562187&source.url=http://www.site.com/videos/214321562187.html').then(() => {
//       expect(fetchMock).route('http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&count=4&source.type=video&source.id=214321562187&source.url=http://www.site.com/videos/214321562187.html').to.have.been.called;
//     });
//   });
 
//   after(() => fetchMock.restore());
// });