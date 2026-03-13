import OpenAI from 'openai'

if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is missing in .env.local')
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const { question } = await req.json()

  const context = `
You are an AI assistant for Harshit Tripathi's portfolio.

Harshit Tripathi is a Lead Data Engineer.

Technologies:
Databricks, Azure, GCP, Kafka, Airflow, dbt, Snowflake, Kubernetes, Docker, Power BI.

Architectures:
Lakehouse, Data Mesh, Data Vault, Knowledge Graph.
`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: context },
      { role: 'user', content: question },
    ],
  })

  return Response.json({
    answer: completion.choices[0].message.content,
  })
}
