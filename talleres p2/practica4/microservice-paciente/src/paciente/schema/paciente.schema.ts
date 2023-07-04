import * as mongoose from 'mongoose';

export const PacienteSchema = new mongoose.Schema(
  {
    identificacion: { type: String, required: true },
    nombre: { type: String, required: true },
  },
  { timestamps: true },
);

