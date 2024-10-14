// Nested objects and types
const person = {
    name: 'John Doe',
    age: 30,
    hobbies: ['swimming', 'dancing'],
    address: { postal: 2323, city: 'Nairobi' }
}

// Array types
const person1: {
    name: string;
    age: number;
    hobbies: string[],
    address: {
        postal: number;
        city: string;
    }
} = {
    name: 'John Doe',
    age: 30,
    hobbies: ['swimming', 'dancing'],
    address: { postal: 2323, city: 'Nairobi' }
}

// tuples
const person2: {
    name: string;
    age: number;
    hobbies: string[],
    address: {
        postal: number;
        city: string;
    };
    // tuple
    description: [number, string]
} = {
    name: 'John Doe',
    age: 30,
    hobbies: ['swimming', 'dancing'],
    address: { postal: 2323, city: 'Nairobi' },
    // tuple
    description: [1, 'lorem ipsum']
}

// enum
enum Color { RED, BLUE, GREEN }

const person3 = {
    name: 'John Doe',
    age: 30,
    color: Color.RED,
    color1: Color.BLUE,
    color2: Color.GREEN,
    hobbies: ['swimming', 'dancing'],
    address: { postal: 2323, city: 'Nairobi' }
}

// any 
// any type is used to bypass type checking
const person4: {
    name: string;
    age: number;
    hobbies: string[],
    address: {
        postal: number;
        city: string;
    },
    city: any[]
} = {
    name: 'John Doe',
    age: 30,
    hobbies: ['swimming', 'dancing'],
    address: { postal: 2323, city: 'Nairobi' },
    city: [1, 'Nairobi']
}


