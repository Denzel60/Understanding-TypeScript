function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: true,
        get() {
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }
    return adjDescriptor
}

class Printer{
    message = 'This works'

    @Autobind
    showMessage() {
        console.log(this.message)
    }
}

const p = new Printer()

const button = document.querySelector('button')!
button.addEventListener('click', p.showMessage)
// button.addEventListener('click', p.showMessage.bind(p))

interface ValidatorConfig {
    [property: string]: {
        [ValidatableProp: string]: string[]
    }
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['Required']
        // [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    }
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['Positive']
        // [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    }
}

function Validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name]
    if (!objValidatorConfig) {
        return true
    }
    let isValid = true
    for(const prop in objValidatorConfig) {
        for(const validator of objValidatorConfig[prop]) {
            switch(validator) {
                case 'Required':
                    isValid = isValid && !!obj[prop]
                    break
                case 'Positive':
                    isValid = isValid && obj[prop] > 0
                    break
            }
        }
    }
    return isValid
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t
        this.price = p
    }
}

const courseform = document.querySelector('form')!
courseform.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = (document.querySelector('#title') as HTMLInputElement).value
    const price = +(document.querySelector('#price') as HTMLInputElement).value
    const createdCourse = new Course(title, price)

    if(!Validate(createdCourse)) {
        alert('Invalid input, please try again')
        return;
    }
    console.log(createdCourse);
})

