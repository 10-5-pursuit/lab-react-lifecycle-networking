const generateName = (employee) => {
    return employee.postfix === "" ? `${employee.prefix} ${employee.firstName} ${employee.lastName}` : employee.prefix === "" ? `${employee.firstName} ${employee.lastName} ${employee.postfix}` : `${employee.firstName} ${employee.lastName}`
}

export default generateName;