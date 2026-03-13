"use client"

import { Bot, Calendar, MessageCircle, Linkedin } from "lucide-react"

export default function Contact() {

const contacts = [
{
title:"AI Assistant",
description:"Ask questions about my work, projects, or schedule a meeting.",
link:"/assistant",
icon: Bot
},
{
title:"Book Meeting",
description:"Schedule a meeting to discuss data engineering, lakehouse architecture, or collaboration.",
link:"https://cal.com/harshit-tripathi-qsxhij",
icon: Calendar
},
{
title:"WhatsApp Chat",
description:"Start an instant conversation on WhatsApp.",
link:"https://wa.me/447824702731",
icon: MessageCircle
},
{
title:"LinkedIn",
description:"Connect professionally and send a direct message.",
link:"https://www.linkedin.com/in/harshit-tripathi-503b11193/",
icon: Linkedin
}
]

return(

<main
style={{
maxWidth:"1100px",
margin:"0 auto",
padding:"100px 40px",
color:"#e2e8f0"
}}
>

<h1 style={{
fontSize:"48px",
fontWeight:"800",
marginBottom:"20px"
}}>
Contact
</h1>

<p style={{
fontSize:"18px",
color:"#94a3b8",
marginBottom:"60px"
}}>
Choose the best way to reach me.
</p>


<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"30px"
}}
>

{contacts.map((item,index)=>{

const Icon = item.icon

return(

<a
key={index}
href={item.link}
target="_blank"
style={{textDecoration:"none"}}
>

<div className="contact-card">

<div className="icon-wrapper">
<Icon size={26}/>
</div>

<h3>{item.title}</h3>

<p>
{item.description}
</p>

</div>

</a>

)

})}

</div>

</main>

)

}