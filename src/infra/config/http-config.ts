import * as http from 'http'
import * as https from 'https'

const isEnabledHttpAgent = process.env.HTTP_AGENT_ENABLED === '1'
const agentOptions = { keepAlive: process.env.HTTP_AGENT_KEEP_ALIVE === '1' }

export const httpAgentConfig = {
  httpAgent: isEnabledHttpAgent ? new http.Agent(agentOptions) : null,
  httpsAgent: isEnabledHttpAgent ? new https.Agent(agentOptions) : null
}
