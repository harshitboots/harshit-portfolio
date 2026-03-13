"use client"

import { useEffect, useState } from "react"

export default function GithubProjects() {

const [repos,setRepos] = useState([])

useEffect(()=>{
fetch("/api/github")
.then(res=>res.json())
.then(data=>setRepos(data))
},[])

return(

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"30px",
marginTop:"20px"
}}
>

{/* GITHUB PROFILE CARD */}

<a href="https://github.com/harshitboots" target="_blank">

<div style={{
height:"100%",
border:"1px solid #374151",
borderRadius:"12px",
overflow:"hidden",
cursor:"pointer",
background:"#0f172a",
transition:"all .3s"
}}

onMouseEnter={e=>e.currentTarget.style.boxShadow="0 0 25px rgba(56,189,248,.5)"}
onMouseLeave={e=>e.currentTarget.style.boxShadow="none"}
>

<img
src="/github-profile.jpg"
style={{
width:"100%",
height:"200px",
objectFit:"cover"
}}
/>

<div style={{padding:"18px"}}>

<h3 style={{fontSize:"18px",marginBottom:"6px"}}>
My GitHub
</h3>

<p style={{
fontSize:"14px",
color:"#94a3b8"
}}>
Data Engineering Projects • AI Tools • Data Platforms
</p>

</div>

</div>

</a>


{/* REPO 1 */}

{repos[0] && (

<a href={repos[0].url} target="_blank">

<div style={{
height:"100%",
border:"1px solid #374151",
borderRadius:"12px",
overflow:"hidden",
background:"#0f172a",
transition:"all .3s"
}}

onMouseEnter={e=>e.currentTarget.style.boxShadow="0 0 25px rgba(56,189,248,.5)"}
onMouseLeave={e=>e.currentTarget.style.boxShadow="none"}
>

<img
src={repos[0].image}
style={{
width:"100%",
height:"200px",
objectFit:"cover"
}}
/>

<div style={{padding:"18px"}}>

<h3 style={{fontSize:"18px"}}>
{repos[0].name}
</h3>

<p style={{
fontSize:"14px",
color:"#94a3b8"
}}>
{repos[0].description}
</p>

</div>

</div>

</a>

)}


{/* REPO 2 */}

{repos[1] && (

<a href={repos[1].url} target="_blank">

<div style={{
height:"100%",
border:"1px solid #374151",
borderRadius:"12px",
overflow:"hidden",
background:"#0f172a",
transition:"all .3s"
}}

onMouseEnter={e=>e.currentTarget.style.boxShadow="0 0 25px rgba(56,189,248,.5)"}
onMouseLeave={e=>e.currentTarget.style.boxShadow="none"}
>

<img
src={repos[1].image}
style={{
width:"100%",
height:"200px",
objectFit:"cover"
}}
/>

<div style={{padding:"18px"}}>

<h3 style={{fontSize:"18px"}}>
{repos[1].name}
</h3>

<p style={{
fontSize:"14px",
color:"#94a3b8"
}}>
{repos[1].description}
</p>

</div>

</div>

</a>

)}

</div>

)

}