const assignPets = (pets, employee) => {

    return pets.filter(pet => pet.employeeId === employee.id)
}

export default assignPets;