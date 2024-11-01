class DataStorage<T extends String | Number | Boolean> {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<String>()
textStorage.addItem('Hello')
textStorage.addItem('World')
textStorage.removeItem('Hello')
console.log(textStorage.getItems());

const numberStorage = new DataStorage<Number>()

// Partial
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date
}

function createCourseGoal (
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUntil = date
    return courseGoal as CourseGoal
}

// Readonly
const names2: Readonly<string[]> = ['Max', 'Manu']
console.log(names2);
