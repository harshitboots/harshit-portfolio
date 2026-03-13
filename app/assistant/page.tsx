'use client'

import { useState } from 'react'

export default function Assistant() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  async function askAI() {
    setLoading(true)

    const res = await fetch('/api/assistant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    })

    const data = await res.json()

    setAnswer(data.answer)
    setLoading(false)
  }

  return (
    <main
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '100px 40px',
        color: '#e2e8f0',
      }}
    >
      <h1 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '20px' }}>AI Assistant</h1>

      <p style={{ marginBottom: '40px', fontSize: '18px', color: '#94a3b8' }}>
        Ask questions about my projects, tech stack, architecture or experience.
      </p>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask something about my work..."
        style={{
          width: '100%',
          padding: '16px',
          borderRadius: '10px',
          border: '1px solid #1e293b',
          marginBottom: '20px',
          background: '#020617',
          color: '#e2e8f0',
        }}
      />

      <button
        onClick={askAI}
        style={{
          padding: '12px 24px',
          background: '#6366f1',
          borderRadius: '8px',
          color: 'white',
          fontWeight: '600',
        }}
      >
        {loading ? 'Thinking...' : 'Ask AI'}
      </button>

      <div style={{ marginTop: '40px', fontSize: '18px', lineHeight: '1.6' }}>{answer}</div>
    </main>
  )
}
