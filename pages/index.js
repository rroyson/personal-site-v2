import CustomHead from '../components/CustomHead'

export default function Home() {
  return (
    <div>
      <CustomHead title='Welcome'></CustomHead>
      <main className='flex justify-center h-full min-h-screen pt-8'>
        <h1 className='text-2xl'>Welcome</h1>
      </main>
    </div>
  )
}
