import { createApp } from './app.js'
import { connectDatabase } from './config/database.js'
import { getBaseUrl } from './config/runtime.js'

const port = Number(process.env.PORT ?? 8000)
const app = createApp()

await connectDatabase()

app.listen(port, () => {
  console.log(`API listening on ${getBaseUrl()} (port ${port})`)
})