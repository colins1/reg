import Validator from '../js/date';



test('name check 1', () => {
  expect(() => {
    new Validator('Maxim'); 
  }).toBe('Maxim');
});

test('name check 2', () => {
  expect(() => {
    new Validator('-Maxim'); 
  }).toThrow('You created the name incorrectly, read the rules for creating a name');
});

test('name check 3', () => {
  expect(() => {
    new Validator('_Maxim'); 
  }).toThrow('You created the name incorrectly, read the rules for creating a name');
});

test('name check 4', () => {
  expect(() => {
    new Validator('02Maxim'); 
  }).toThrow('You created the name incorrectly, read the rules for creating a name');
});

test('name check 5', () => {
  expect(() => {
    new Validator('Maxim00'); 
  }).toThrow('You created the name incorrectly, read the rules for creating a name');
});

test('name check 6', () => {
  expect(() => {
    new Validator('Maxim-'); 
  }).toThrow('You created the name incorrectly, read the rules for creating a name');
});

test('name check 7', () => {
  expect(() => {
    new Validator('Maxim_'); 
  }).toThrow('You created the name incorrectly, read the rules for creating a name');
});

test('name check 8', () => {
  expect(() => {
    new Validator('@Maxim_'); 
  }).toThrow('You created the name incorrectly, read the rules for creating a name');
});

test('name check 9', () => {
  expect(() => {
    new Validator('Max2222im'); 
  }).toThrow('You created the name incorrectly, read the rules for creating a name');
});


