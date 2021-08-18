import lambdaTester from 'lambda-tester';
import { expect } from 'chai';
import { hello } from '../handler';
import "mocha";

const helloGet = lambdaTester(hello);

describe('hello [GET]', () => {
 it('Response status code must be 200', () => {
    try {

      helloGet
      .expectResult((result: any) => {
        expect(result.statusCode).to.equal(200);
        const body = JSON.parse(result.body);
        expect(body.message).to.equal('Hello World, desde AWS utilizando serverless');
      });
    } catch (err) {
      console.log(err);
    }
  });
  it('Response Message must be Hello World, desde AWS utilizando serverless', () => {
    try {

      helloGet
      .expectResult((result: any) => {
        const body = JSON.parse(result.body);
        expect(body.message).to.equal('Hello World, desde AWS utilizando serverless');
      });
    } catch (err) {
      console.log(err);
    }
  });
});