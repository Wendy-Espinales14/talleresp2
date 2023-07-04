export enum RabbitMQ {
  StudentQueue = 'students',
  PacienteQueue = 'pacientes',
}

export enum StudentMsg {
  CREATE = 'CREATE_STUDENT',
  FIND_ALL = 'FIND_STUDENTS',
  FIND_ONE = 'FIND_STUDENT',
  UPDATE = 'UPDATE_STUDENT',
  DELETE = 'DELETE_STUDENT',
}

export enum PacienteMsg {
  CREATE = 'CREATE_PACIENTE',
  FIND_ALL = 'FIND_PACIENTES',
  FIND_ONE = 'FIND_PACIENTE',
  UPDATE = 'UPDATE_PACIENTE',
  DELETE = 'DELETE_PACIENTE',
}
