import { Schema, model } from 'mongoose'

const workoutSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    focusArea: { type: String, required: true, trim: true },
    difficulty: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 0 },
    instructions: { type: [String], default: [] },
  },
  { timestamps: true },
)

export const Workout = model('Workout', workoutSchema)
