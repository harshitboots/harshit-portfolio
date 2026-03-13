"use client"

import { useEffect } from "react"

export default function TawkChat() {

  useEffect(() => {

    const tawk = document.createElement("script")
    const firstScript = document.getElementsByTagName("script")[0]

    tawk.async = true
    tawk.src = "https://embed.tawk.to/69b372d46d0a751c3733782e/1jjifh3h0"
    tawk.charset = "UTF-8"
    tawk.setAttribute("crossorigin","*")

    firstScript.parentNode?.insertBefore(tawk, firstScript)

  }, [])

  return null
}