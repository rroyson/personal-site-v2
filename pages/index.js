/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Header from '../components/Header'
import { Button } from '../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card'

export default function Home() {
  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section')
    const cards = document.querySelectorAll('.card-modern')

    sections.forEach((section) => {
      section.classList.add('animate-on-scroll')
      observer.observe(section)
    })

    cards.forEach((card) => {
      card.classList.add('animate-on-scroll')
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      category: 'Frontend',
      items: [
        'React',
        'Next.js',
        'HTML/CSS',
        'JavaScript',
        'TypeScript',
        'Tailwind CSS',
      ],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'GraphQL', 'RESTful APIs'],
    },
    {
      category: 'Database',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
    },
    { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Git'] },
  ]

  const projects = [
    {
      title: 'E-commerce Platform',
      description:
        'A full-stack e-commerce application with user authentication, product listings, shopping cart, and payment processing',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      image: '/project1.jpg',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management solution with real-time updates and team workspaces',
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
      image: '/project2.jpg',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Data Visualization Dashboard',
      description:
        'Interactive dashboard for visualizing complex datasets with filtering and custom views',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      image: '/project3.jpg',
      demoLink: '#',
      codeLink: '#',
    },
  ]

  return (
    <>
      <Head>
        <title>Rob Royson | Software Developer</title>
        <meta
          name='description'
          content='Software developer portfolio showcasing my skills, projects, and experience'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-col min-h-screen bg-background text-foreground'>
        <Header />

        {/* Floating Social Links - Enhanced */}
        <div className='fixed z-40 hidden rotate-90 -right-14 bottom-1/4 md:block'>
          <div className='flex items-center space-x-4'>
            <div className='w-20 h-px bg-gradient-to-r from-transparent to-primary'></div>
            <p className='font-mono text-sm tracking-widest text-center text-muted-foreground'>
              rroyson2@gmail.com
            </p>
          </div>
        </div>

        <div className='fixed z-40 flex-col hidden text-muted-foreground bottom-1/4 left-6 md:flex'>
          <ul className='space-y-8'>
            <li className='social-icon-container'>
              <a
                href='http://github.com/rroyson'
                className='relative block transition-all duration-300 hover:opacity-80'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/github.png'
                  alt='GitHub Profile'
                  height={28}
                  width={28}
                  className='social-icon'
                />
              </a>
            </li>
            <li className='social-icon-container'>
              <a
                href='https://linkedin.com/in/robroyson'
                className='relative block transition-all duration-300 hover:opacity-80'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/linkedin.png'
                  alt='LinkedIn Profile'
                  height={28}
                  width={28}
                  className='social-icon'
                />
              </a>
            </li>
            <li className='social-icon-container'>
              <a
                href='https://codepen.io/rroyson'
                className='relative block transition-all duration-300 hover:opacity-80'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/codepen.png'
                  alt='CodePen Profile'
                  height={28}
                  width={28}
                  className='social-icon'
                />
              </a>
            </li>
          </ul>
          <div className='w-px h-20 mx-auto mt-8 bg-gradient-to-b from-primary to-transparent'></div>
        </div>

        <main className='flex-grow'>
          {/* Hero Section - Enhanced */}
          <section
            id='home'
            className='relative flex flex-col items-center justify-center min-h-screen py-20 overflow-hidden md:py-32'
          >
            {/* Clean Background */}
            <div className='absolute inset-0'>
              {/* Solid background for optimal readability */}
              <div className='absolute inset-0 bg-background'></div>

              {/* Very subtle floating elements for minimal visual interest */}
              <div className='absolute inset-0'>
                <div className='absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-primary/3 dark:bg-primary/5 blur-3xl animate-float'></div>
                <div
                  className='absolute rounded-full bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/3 dark:bg-blue-500/5 blur-3xl animate-float'
                  style={{ animationDelay: '2s' }}
                ></div>
              </div>

              {/* Minimal decorative particles */}
              <div className='absolute inset-0'>
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className='absolute w-1 h-1 rounded-full bg-slate-300/30 dark:bg-slate-600/30 animate-float'
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 6}s`,
                      animationDuration: `${8 + Math.random() * 4}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className='container relative z-10 grid items-center gap-12 mx-auto lg:grid-cols-2 max-w-7xl'>
              <div className='flex flex-col items-center order-2 space-y-8 text-center lg:items-start lg:order-1 lg:text-left'>
                <div className='space-y-6'>
                  <div className='inline-block'>
                    <span className='font-mono text-sm tracking-wider uppercase md:text-base text-primary'>
                      Software Developer
                    </span>
                  </div>
                  <h1 className='heading-xl animate-slide-in-up'>
                    <span className='text-foreground'>Hi, I'm </span>
                    <span className='text-gradient'>Rob Royson</span>
                  </h1>
                  <h2
                    className='max-w-2xl heading-md text-foreground/90 animate-slide-in-up'
                    style={{ animationDelay: '0.2s' }}
                  >
                    Building exceptional digital experiences with modern
                    technologies
                  </h2>
                  <p
                    className='max-w-xl body-lg text-foreground/80 animate-slide-in-up'
                    style={{ animationDelay: '0.4s' }}
                  >
                    I craft performant, accessible, and beautiful web
                    applications with a focus on user experience and clean code
                    architecture.
                  </p>
                </div>

                <div
                  className='flex flex-col gap-4 mt-8 sm:flex-row animate-slide-in-up'
                  style={{ animationDelay: '0.6s' }}
                >
                  <Button className='btn-primary-modern group' asChild>
                    <a href='#projects' className='flex items-center gap-2'>
                      View Projects
                      <svg
                        className='w-4 h-4 transition-transform group-hover:translate-x-1'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </a>
                  </Button>
                  <Button className='btn-outline-modern' asChild>
                    <a
                      href='/resume.pdf'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>

              <div
                className='flex justify-center order-1 lg:justify-center lg:order-2 animate-fade-in-scale'
                style={{ animationDelay: '0.3s' }}
              >
                <div className='relative w-80 h-80 lg:w-96 lg:h-96'>
                  {/* Interactive cosmic constellation */}
                  <div className='absolute inset-0'>
                    {/* Central portal with enhanced glow */}
                    <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                      <div className='w-12 h-12 rounded-full bg-gradient-to-r from-primary/15 to-blue-500/15 dark:from-primary/20 dark:to-blue-500/20 blur-sm animate-pulse'></div>
                      <div className='absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-primary/50 dark:bg-primary/60 animate-pulse'></div>
                    </div>

                    {/* Floating elements with enhanced visibility */}
                    <div className='absolute w-4 h-4 border rounded-full top-1/4 left-1/4 bg-gradient-to-r from-purple-400/30 to-blue-400/30 dark:from-purple-400/40 dark:to-blue-400/40 blur-sm animate-float border-purple-300/20 dark:border-purple-300/30'></div>
                    <div
                      className='absolute w-3 h-3 border rounded-full top-3/4 right-1/4 bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 dark:from-emerald-400/40 dark:to-cyan-400/40 blur-sm animate-float border-emerald-300/20 dark:border-emerald-300/30'
                      style={{ animationDelay: '1s', animationDuration: '13s' }}
                    ></div>
                    <div
                      className='absolute top-1/2 left-1/6 w-3.5 h-3.5 bg-gradient-to-r from-pink-400/30 to-purple-400/30 dark:from-pink-400/40 dark:to-purple-400/40 rounded-full blur-sm animate-float border border-pink-300/20 dark:border-pink-300/30'
                      style={{ animationDelay: '2s', animationDuration: '15s' }}
                    ></div>
                    <div
                      className='absolute w-3 h-3 border rounded-full bottom-1/3 right-1/3 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 dark:from-blue-400/40 dark:to-cyan-400/40 blur-sm animate-float border-blue-300/20 dark:border-blue-300/30'
                      style={{ animationDelay: '3s', animationDuration: '11s' }}
                    ></div>
                    <div
                      className='absolute top-1/6 right-1/2 w-2.5 h-2.5 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 dark:from-yellow-400/40 dark:to-orange-400/40 rounded-full blur-sm animate-float border border-yellow-300/20 dark:border-yellow-300/30'
                      style={{ animationDelay: '4s', animationDuration: '18s' }}
                    ></div>
                    <div
                      className='absolute w-3 h-3 border rounded-full bottom-1/4 left-1/3 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 dark:from-indigo-400/40 dark:to-purple-400/40 blur-sm animate-float border-indigo-300/20 dark:border-indigo-300/30'
                      style={{ animationDelay: '5s', animationDuration: '14s' }}
                    ></div>
                    <div
                      className='absolute top-2/3 right-1/6 w-2.5 h-2.5 bg-gradient-to-r from-teal-400/30 to-emerald-400/30 dark:from-teal-400/40 dark:to-emerald-400/40 rounded-full blur-sm animate-float border border-teal-300/20 dark:border-teal-300/30'
                      style={{ animationDelay: '6s', animationDuration: '16s' }}
                    ></div>
                    <div
                      className='absolute top-1/3 left-2/3 w-3.5 h-3.5 bg-gradient-to-r from-rose-400/30 to-pink-400/30 dark:from-rose-400/40 dark:to-pink-400/40 rounded-full blur-sm animate-float border border-rose-300/20 dark:border-rose-300/30'
                      style={{ animationDelay: '7s', animationDuration: '12s' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Me Section - Enhanced */}
          <section id='about' className='container py-24 md:py-32'>
            <div className='grid items-start gap-16 mx-auto lg:grid-cols-2 max-w-7xl'>
              <div className='space-y-8'>
                <div className='space-y-4'>
                  <span className='font-mono text-sm tracking-wider uppercase text-primary'>
                    About Me
                  </span>
                  <h2 className='heading-lg text-foreground'>
                    Passionate about creating digital solutions
                  </h2>
                </div>

                <div className='space-y-6 text-muted-foreground body-md'>
                  <p>
                    I'm a passionate software developer with expertise in
                    building robust web applications. My journey in tech started
                    with a fascination for solving problems through code, and
                    I've been hooked ever since.
                  </p>
                  <p>
                    I specialize in creating clean, maintainable code with a
                    strong focus on user experience. I'm constantly learning new
                    technologies and methodologies to enhance my skillset and
                    build better solutions.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new
                    technologies, contributing to open source, or enjoying
                    outdoor activities to maintain a healthy work-life balance.
                  </p>
                </div>
              </div>

              <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                {skills.map((skillGroup, index) => (
                  <Card
                    key={index}
                    className='card-modern group hover:scale-105'
                  >
                    <CardHeader className='pb-4'>
                      <CardTitle className='heading-md text-primary'>
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className='space-y-3'>
                        {skillGroup.items.map((skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className='flex items-center gap-3 transition-colors text-muted-foreground group-hover:text-foreground'
                          >
                            <div className='w-1.5 h-1.5 bg-primary/60 rounded-full'></div>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Technologies Section - Enhanced */}
          <section
            id='technologies'
            className='py-24 md:py-32 section-alternate'
          >
            <div className='container mx-auto max-w-7xl'>
              <div className='mb-20 space-y-4 text-center'>
                <span className='font-mono text-sm tracking-wider uppercase text-primary'>
                  Technical Skills
                </span>
                <h2 className='heading-lg text-foreground'>
                  Technologies I work with
                </h2>
                <p className='max-w-3xl mx-auto body-lg text-muted-foreground'>
                  I have experience with a wide range of technologies and
                  continuously expand my skillset to stay current with industry
                  trends.
                </p>
              </div>

              <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
                {[
                  'JavaScript',
                  'TypeScript',
                  'React',
                  'Next.js',
                  'Node.js',
                  'Express',
                  'MongoDB',
                  'PostgreSQL',
                  'HTML5',
                  'CSS3',
                  'Tailwind CSS',
                  'GraphQL',
                  'REST APIs',
                  'Git',
                  'AWS',
                  'Docker',
                ].map((tech, index) => (
                  <div
                    key={index}
                    className='p-6 text-center cursor-default card-modern group hover:scale-105'
                  >
                    <div className='space-y-3'>
                      <div className='flex items-center justify-center w-12 h-12 mx-auto transition-all duration-300 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl group-hover:from-primary/30 group-hover:to-blue-500/30'>
                        <div className='w-6 h-6 rounded bg-gradient-to-br from-primary to-blue-500'></div>
                      </div>
                      <span className='text-sm font-medium transition-colors text-foreground group-hover:text-primary'>
                        {tech}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section - Enhanced */}
          <section
            id='projects'
            className='container py-24 mx-auto md:py-32 max-w-7xl'
          >
            <div className='mb-20 space-y-4 text-center'>
              <span className='font-mono text-sm tracking-wider uppercase text-primary'>
                Portfolio
              </span>
              <h2 className='heading-lg text-foreground'>Featured Projects</h2>
              <p className='max-w-3xl mx-auto body-lg text-muted-foreground'>
                Here are some of my recent projects. Each one presented unique
                challenges that helped me grow as a developer.
              </p>
            </div>

            <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className='flex flex-col h-full overflow-hidden card-modern group hover:scale-105'
                >
                  <div className='relative h-56 overflow-hidden bg-gradient-to-br from-muted/50 to-muted/80'>
                    {/* Enhanced placeholder with gradient overlay */}
                    <div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='space-y-2 text-center'>
                        <div className='flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-2xl'>
                          <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-500'></div>
                        </div>
                        <span className='text-lg font-semibold text-primary'>
                          {project.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col flex-grow'>
                    <CardHeader className='pb-4'>
                      <CardTitle className='transition-colors heading-md group-hover:text-primary'>
                        {project.title}
                      </CardTitle>
                      <CardDescription className='text-muted-foreground body-md'>
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <div className='flex flex-col justify-end flex-grow'>
                      <CardContent className='pb-4'>
                        <div className='flex flex-wrap gap-2'>
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className='px-3 py-1 text-xs font-medium transition-colors border rounded-full bg-primary/10 text-primary border-primary/20 hover:bg-primary/20'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className='flex gap-3 pt-0'>
                        <Button
                          variant='outline'
                          size='sm'
                          className='flex-1 group/btn'
                          asChild
                        >
                          <a
                            href={project.demoLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center justify-center gap-2'
                          >
                            Live Demo
                            <svg
                              className='w-3 h-3 transition-transform group-hover/btn:translate-x-1'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                              />
                            </svg>
                          </a>
                        </Button>
                        <Button
                          variant='secondary'
                          size='sm'
                          className='flex-1'
                          asChild
                        >
                          <a
                            href={project.codeLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center justify-center gap-2'
                          >
                            View Code
                            <svg
                              className='w-3 h-3'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                              />
                            </svg>
                          </a>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section - Enhanced */}
          <section id='contact' className='py-24 md:py-32 section-alternate'>
            <div className='container max-w-4xl mx-auto text-center'>
              <div className='space-y-8'>
                <div className='space-y-4'>
                  <span className='font-mono text-sm tracking-wider uppercase text-primary'>
                    Get In Touch
                  </span>
                  <h2 className='heading-lg text-foreground'>
                    Let's work together
                  </h2>
                  <p className='max-w-2xl mx-auto body-lg text-muted-foreground'>
                    I'm currently open to new opportunities. Whether you have a
                    question or just want to say hi, I'll do my best to get back
                    to you!
                  </p>
                </div>

                <div className='pt-4'>
                  <Button
                    className='px-8 py-4 text-lg btn-primary-modern group'
                    asChild
                  >
                    <a
                      href='mailto:rroyson2@gmail.com'
                      className='flex items-center gap-2'
                    >
                      Say Hello
                      <svg
                        className='w-5 h-5 transition-transform group-hover:translate-x-1'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                        />
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className='border-t border-border/40 bg-background/80 backdrop-blur-sm'>
          <div className='container py-12'>
            <div className='flex flex-col items-center space-y-8'>
              <div className='flex space-x-8'>
                <a
                  href='https://github.com/rroyson'
                  className='transition-all duration-300 social-icon-container text-muted-foreground hover:text-primary'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='sr-only'>GitHub</span>
                  <Image
                    src='/github.png'
                    alt='GitHub'
                    width={24}
                    height={24}
                    className='social-icon'
                  />
                </a>
                <a
                  href='https://linkedin.com/in/robroyson'
                  className='transition-all duration-300 social-icon-container text-muted-foreground hover:text-primary'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='sr-only'>LinkedIn</span>
                  <Image
                    src='/linkedin.png'
                    alt='LinkedIn'
                    width={24}
                    height={24}
                    className='social-icon'
                  />
                </a>
                <a
                  href='https://codepen.io/rroyson'
                  className='transition-all duration-300 social-icon-container text-muted-foreground hover:text-primary'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='sr-only'>CodePen</span>
                  <Image
                    src='/codepen.png'
                    alt='CodePen'
                    width={24}
                    height={24}
                    className='social-icon'
                  />
                </a>
              </div>

              <div className='space-y-2 text-center'>
                <p className='text-sm text-muted-foreground'>
                  © {new Date().getFullYear()} Rob Royson. All rights reserved.
                </p>
                <p className='text-xs text-muted-foreground/60'>
                  Built with Next.js & Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
