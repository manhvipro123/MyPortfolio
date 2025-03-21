import {Button} from "@/components/ui/button.tsx"
import {Github, Linkedin, Mail} from "lucide-react"
import ProjectCard from "@/components/project-card.tsx";
import TechStack from "@/components/tech-stack.tsx";
import ContactForm from "@/components/contact-form.tsx";
import {Link} from "react-router";


export default function PortfolioLayout() {
    return (
        <>
            <header
                className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                    <div className="mr-4 hidden md:flex">
                        <Link className="mr-6 flex items-center space-x-2" to="/public">
                            <span className="hidden font-bold sm:inline-block">Honekawai.dev</span>
                        </Link>
                        <nav className="flex items-center space-x-6 text-sm font-medium">
                            <Link to="#about" className="transition-colors hover:text-foreground/80">
                                About
                            </Link>
                            <Link to="#projects" className="transition-colors hover:text-foreground/80">
                                Projects
                            </Link>
                            <Link to="#contact" className="transition-colors hover:text-foreground/80">
                                Contact
                            </Link>
                        </nav>
                    </div>
                    <Button variant="outline" className="ml-auto">
                        Resume
                    </Button>
                </div>
            </header>

            <main className="container px-4 md:px-6">
                <section id="about" className="py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Software Engineer
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Experienced Software Engineer with over 2 years in the industry, specializing in Web
                                    Fullstack Development (React, Angular), Mobile Development (Flutter), Data Analysis,
                                    UI/UX Design (Figma), and AI Engineering. Adept at designing and developing
                                    scalable, high-performance applications with a strong focus on user experience and
                                    data-driven decision-making. Passionate about leveraging cutting-edge technologies
                                    to build efficient, user-centric solutions. Skilled in collaborating across teams to
                                    deliver impactful software products that drive business success.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Link to="https://github.com/manhvipro123" target="_blank">
                                    <Button variant="outline" size="icon">
                                        <Github className="h-4 w-4"/>
                                        <span className="sr-only">GitHub</span>
                                    </Button>
                                </Link>
                                <Link to="https://www.linkedin.com/in/ducmanh1810/" target="_blank">
                                    <Button variant="outline" size="icon">
                                        <Linkedin className="h-4 w-4"/>
                                        <span className="sr-only">LinkedIn</span>
                                    </Button>
                                </Link>
                                <Link to="mailto:manhvp1810@gmail.com">
                                    <Button variant="outline" size="icon">
                                        <Mail className="h-4 w-4"/>
                                        <span className="sr-only">Email</span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <ProjectCard
                                title="E-commerce Platform"
                                description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
                                image="https://images.ctfassets.net/lzny33ho1g45/6fQdc54nNz8mgDLVrroe9q/10759d0461920a3bb853d4fa4f35d3c2/Best_eCommerce_platforms.jpg?w=1520&fm=jpg&q=31&fit=thumb&h=760"
                                link="https://github.com"
                                tags={["Next.js", "Prisma", "Stripe"]}
                            />
                            <ProjectCard
                                title="Task Management App"
                                description="A real-time task management application with team collaboration features."
                                image="https://vectopus.com/_next/image?url=https%3A%2F%2Fcdn.vectopus.com%2Fgetillustrations%2Fillustrations%2F1565692729B5%2F7DE9DFA1E4AB%2Fuploads-task-management-tasks-task-workshop-personal-goals-target-achievement-accomplishment-1024.png&w=3840&q=75"
                                link="https://github.com"
                                tags={["React", "Node.js", "Socket.io"]}
                            />
                            <ProjectCard
                                title="AI Chat Interface"
                                description="An AI-powered chat interface with natural language processing capabilities."
                                image="https://img.freepik.com/free-vector/chatbot-conversation-vectorart_78370-4105.jpg"
                                link="https://github.com"
                                tags={["OpenAI", "Next.js", "TailwindCSS"]}
                            />
                        </div>
                    </div>
                </section>

                <section className="py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                            Tech Stack
                        </h2>
                        <TechStack/>
                    </div>
                </section>

                <section id="contact" className="py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="mx-auto max-w-2xl">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                                Get in Touch
                            </h2>
                            <ContactForm/>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t">
                <div
                    className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
                    <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Honekawai.dev. All rights
                        reserved.</p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <Link className="text-xs hover:underline underline-offset-4" to="#">
                            Terms of Service
                        </Link>
                        <Link className="text-xs hover:underline underline-offset-4" to="#">
                            Privacy
                        </Link>
                    </nav>
                </div>
            </footer>
        </>
    )
}

