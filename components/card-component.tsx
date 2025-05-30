import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import Image from 'next/image'
export default function CardComponent() {
 
 const projects=[
    {title:"Discord Clone",description:"End to end discord clone usign websockts",
    technologies:["Next.js","Socket.io","MongoDb","Zustand","Tanstack Query"],imageUrl:"/discord1.avif", githubLink:"https://github.com/Anshik-02/Discord_clone"
    ,liveLink:"https://discord-clone-utgn.onrender.com/",},
   
    {title:"Lm united",description:"Trucks and transportation website",
        technologies:["Next.js","Resend","TypeScript"],imageUrl:"/lm.png",githubLink:"https://github.com/Anshik-02/Lm-united",liveLink:"https://lmunitedtransport.com/"}, 

        { title: "Portfolio Website (Minimal & Game Mode)",
    description: "A responsive portfolio website to showcase projects and skills.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Phaser.js"],imageUrl:"/portfolio.png",githubLink:"",liveLink:""}     
 
 ]
 
 
 
 
    return (
    <div className='mt-8 md:ml-0 ml-0.5'>
        <div className="grid gap-8 md:grid-cols-2 ">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden border-1 border-foreground/20 bg-transparent text-foreground">
              <div className="h-48 bg-transparent">
                
                <div className="flex h-full  items-center justify-center  text-muted-foreground">
                <Image src={project.imageUrl||""} alt='discord clone' className='w-90 h-52 md:!w-110 md:!h-54 rounded-xl'  width={400} height={200}>
                </Image>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className='text-forground' variant={"secondary"} >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <a href={project.githubLink}><Button variant="outline" className='text-foreground gap-1 hover:!text-background hover:brightness-75 cursor-pointer' size="sm" >
                  <Github className="h-3.5 w-3.5" />
                  Code
                </Button></a>
                <a href={project.liveLink}>
                <Button size="sm" className="gap-1 border cursor-pointer">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Demo
                </Button></a>
              </CardFooter>
            </Card>
          ))}
        </div>
    </div>
  )
}
