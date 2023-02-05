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
      <main className='scroll-smooth'>
        <Header />
        <div className='min-h-screen leading-7 bg-gray-900'>
          <section
            id='home'
            className='flex flex-col items-center h-full p-6 text-slate-300'
          >
            <h1 className='py-3 text-4xl font-bold'>Welcome</h1>
            <Image
              className='items-center mx-auto rounded-full '
              height={250}
              width={250}
              src='/Profile.jpeg'
              alt='headshot'
            />

            <p className='mx-24 text-justify'>
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
        <div className='flex items-center justify-center h-screen text-slate-300'>
          <section
            id='technologies'
            className='flex flex-col w-3/4 p-6 text-center gap-y-10 columns-3 h-3/4'
          >
            <h1 className='py-3 text-4xl font-bold'>Technologies</h1>
            {/* <Image
              className='items-center mx-auto rounded-full '
              height={250}
              width={250}
              src='/Profile.jpeg'
              alt='headshot'
            /> */}

            <p className='mx-24 text-justify'>
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
        <div className='min-h-screen leading-7 bg-gray-900'>
          <section
            id='projects'
            className='flex flex-col items-center h-full p-6 text-slate-300'
          >
            <h1 className='py-3 text-4xl font-bold'>Projects</h1>
            {/* <Image
              className='items-center mx-auto rounded-full '
              height={250}
              width={250}
              src='/Profile.jpeg'
              alt='headshot'
            /> */}

            <p className='mx-24 text-justify'>
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
