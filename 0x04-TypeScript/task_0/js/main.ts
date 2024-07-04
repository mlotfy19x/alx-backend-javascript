export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: 'Mostafa',
    lastName: 'Mahmoud',
    age: 24,
    location: 'Cairo',
};

const studentTwo: Student = {
    firstName: 'Ahmed',
    lastName: 'Adel',
    age: 22,
    location: 'Cairo',
};

const studentsList: Array<Student> = [
    studentOne,
    studentTwo,
];

export const renderTable = (studentsList: Array<Student>): void => {
    const table = document.createElement('table');
    const headRow = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headRow);

    headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
    headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

    for (const student of studentsList) {
        const studentRow = document.createElement('tr')
        studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
        table.insertAdjacentElement('beforeend', studentRow);
    }

    document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentsList);
