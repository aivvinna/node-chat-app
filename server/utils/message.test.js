const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Someone';
    const text = 'Hello';
    const message = generateMessage(from, text);

    expect(typeof(message.createdAt)).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});