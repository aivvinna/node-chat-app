const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Bob',
      room: 'room 1'
    }, {
      id: '2',
      name: 'James',
      room: 'room 2'
    }, {
      id: '3',
      name: 'Adam',
      room: 'room 1'
    }]
  })

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Bob',
      room: 'A room'
    };
    const resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    const userId = '1';
    const user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  })

  it('should not remove user', () => {
    const userId = '4';
    const user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  })

  it('should find user', () => {
    const userId = '2';
    const user = users.getUser(userId);

    expect(user.id).toBe(userId);
  })

  it('should not find user', () => {
    const userId = '4';
    const user = users.getUser(userId);

    expect(user).toBeFalsy();
  })

  it('should return names for room 1', () => {
    const userList = users.getUserList('room 1');
    expect(userList).toEqual(['Bob', 'Adam']);
  });

  it('should return names for room 2', () => {
    const userList = users.getUserList('room 2');
    expect(userList).toEqual(['James']);
  })
})