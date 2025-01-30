/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name='description' content='Personal website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='leading-7 bg-gray-900 scroll-smooth text-slate-300'>
        <Header />

        {/* Social Links */}
        <div className='fixed rotate-90 -right-12 bottom-1/4'>
          <p className='text-center text-slate-400'>rroyson2@gmail.com</p>
        </div>
        <div className='fixed flex flex-col text-slate-400 bottom-1/4 left-6'>
          <ul className='space-y-6'>
            <li>
              <a
                href='http://github.com/rroyson'
                className='transition-opacity hover:opacity-70'
              >
                <Image
                  src='/github.png'
                  alt='GitHub Profile'
                  height={50}
                  width={50}
                />
              </a>
            </li>
            <li>
              <a
                href='http://github.com/rroyson'
                className='transition-opacity hover:opacity-70'
              >
                <Image
                  src='/linkedin.png'
                  alt='LinkedIn Profile'
                  height={50}
                  width={50}
                />
              </a>
            </li>
            <li>
              <a
                href='http://github.com/rroyson'
                className='transition-opacity hover:opacity-70'
              >
                <Image
                  src='/codepen.png'
                  alt='CodePen Profile'
                  height={50}
                  width={50}
                />
              </a>
            </li>
          </ul>
        </div>

        {/* Home Section */}
        <section
          id='home'
          className='flex flex-col items-center min-h-screen px-4 pt-32 pb-20'
        >
          <h1 className='mb-12 text-5xl font-bold text-green-400'>Welcome</h1>
          <Image
            className='rounded-full mb-14'
            height={250}
            width={250}
            src='/Profile.jpeg'
            alt='headshot'
          />
          <p className='max-w-3xl text-xl leading-8 text-center'>
            Welcome to my personal portfolio! I'm a highly motivated software
            developer with a passion for creating innovative and user-friendly
            solutions. With a background in computer science and a love for
            technology, I bring a unique perspective to every project I work on.
            Whether it's developing a mobile app, building a website, or
            automating a process, I'm always looking for ways to make a positive
            impact through my work. Let's work together to turn your ideas into
            reality!
          </p>
        </section>

        {/* Technologies Section */}
        <section
          id='technologies'
          className='min-h-screen px-4 py-32 bg-gray-800'
        >
          <div className='flex flex-col items-center text-center'>
            <h2 className='mb-12 text-5xl font-bold text-green-400'>
              Technologies
            </h2>
            <p className='max-w-3xl text-xl leading-8'>
              Welcome to my personal portfolio! I'm a highly motivated software
              developer with a passion for creating innovative and user-friendly
              solutions. With a background in computer science and a love for
              technology, I bring a unique perspective to every project I work
              on. Whether it's developing a mobile app, building a website, or
              automating a process, I'm always looking for ways to make a
              positive impact through my work. Let's work together to turn your
              ideas into reality!
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className='min-h-screen px-4 py-32'>
          <div className='flex flex-col items-center'>
            <h2 className='mb-12 text-5xl font-bold text-green-400'>
              Projects
            </h2>
            <p className='max-w-3xl text-xl leading-8 text-center'>
              Welcome to my personal portfolio! I'm a highly motivated software
              developer with a passion for creating innovative and user-friendly
              solutions. With a background in computer science and a love for
              technology, I bring a unique perspective to every project I work
              on. Whether it's developing a mobile app, building a website, or
              automating a process, I'm always looking for ways to make a
              positive impact through my work. Let's work together to turn your
              ideas into reality!
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
