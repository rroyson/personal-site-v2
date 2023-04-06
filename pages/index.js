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
        <div className='fixed rotate-90 -right-12 bottom-1/4'>
          <p className='text-center text-slate-400'>rroyson2@gmail.com</p>
        </div>
        <div className='fixed flex flex-col text-slate-400 bottom-1/4 left-6'>
          <ul>
            <li className='py-4'>
              <a href='http://github.com/rroyson'>
                <Image src='/github.png' alt='' height={50} width={50} />
              </a>
            </li>
            <li className='py-4'>
              <a href='http://github.com/rroyson'>
                <Image src='/linkedin.png' alt='' height={50} width={50} />
              </a>
            </li>
            <li className='py-4' s>
              <a href='http://github.com/rroyson'>
                <Image src='/codepen.png' alt='' height={50} width={50} />
              </a>
            </li>
          </ul>
        </div>
        <div id='home' className='pt-24'>
          <section className='flex flex-col items-center min-h-screen'>
            <h1 className='py-3 text-4xl font-bold'>Welcome</h1>
            <Image
              className='items-center mx-auto rounded-full '
              height={250}
              width={250}
              src='/Profile.jpeg'
              alt='headshot'
            />

            <p className='max-w-3xl'>
              Welcome to my personal portfolio! I'm a highly motivated software
              developer with a passion for creating innovative and user-friendly
              solutions. With a background in computer science and a love for
              technology, I bring a unique perspective to every project I work
              on. Whether it's developing a mobile app, building a website, or
              automating a process, I'm always looking for ways to make a
              positive impact through my work. Let's work together to turn your
              ideas into reality!
            </p>
          </section>
        </div>
        <div id='technologies' className='min-h-screen pt-24 leading-7'>
          <section className='flex flex-col items-center text-center'>
            <h1 className='py-8 text-4xl font-bold'>Technologies</h1>
            <p className='max-w-3xl'>
              Welcome to my personal portfolio! I'm a highly motivated software
              developer with a passion for creating innovative and user-friendly
              solutions. With a background in computer science and a love for
              technology, I bring a unique perspective to every project I work
              on. Whether it's developing a mobile app, building a website, or
              automating a process, I'm always looking for ways to make a
              positive impact through my work. Let's work together to turn your
              ideas into reality!
            </p>
          </section>
        </div>
        <div id='projects' className='min-h-screen pt-24'>
          <section className='flex flex-col items-center'>
            <h1 className='py-3 text-4xl font-bold'>Projects</h1>
            <p className='max-w-3xl'>
              Welcome to my personal portfolio! I'm a highly motivated software
              developer with a passion for creating innovative and user-friendly
              solutions. With a background in computer science and a love for
              technology, I bring a unique perspective to every project I work
              on. Whether it's developing a mobile app, building a website, or
              automating a process, I'm always looking for ways to make a
              positive impact through my work. Let's work together to turn your
              ideas into reality!
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
