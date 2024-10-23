import { pubSub } from '../alertServiceHelper';
describe('pubSub', () => {
  it('should provide be UTC', () => {
    expect(JSON.stringify(pubSub())).toEqual(
      JSON.stringify({ publish: function publish() {}, subscribe: function subscribe() {} })
    );
  });
});
