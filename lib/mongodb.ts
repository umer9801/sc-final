import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) throw new Error('MONGODB_URI is not defined')

// Cache connection across hot reloads in dev
const globalWithMongoose = global as typeof global & {
  _mongooseConn?: typeof mongoose
  _mongoosePromise?: Promise<typeof mongoose>
}

let cached = globalWithMongoose._mongoosePromise

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return mongoose
  if (cached) return cached

  cached = mongoose.connect(MONGODB_URI, { bufferCommands: false })
  globalWithMongoose._mongoosePromise = cached
  return cached
}
