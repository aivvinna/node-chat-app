const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Someone';
    const text = 'Hello';
    const message = generateMessage(from, text);

    expect(typeof(message.createdAt)).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Someone';
    const latitude = '35';
    const longitude = '139';
    const locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(typeof(locationMessage.createdAt)).toBe('number');
    expect(locationMessage).toMatchObject({
      from,
      url: `https://www.google.com/maps?q=${latitude},${longitude}`
    });
  });
});