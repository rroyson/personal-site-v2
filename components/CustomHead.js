import Head from 'next/head'

function CustomHead({ title } = props) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='description'
        content='initial-scale=1.0, width=device-width'
        key='title'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
export default CustomHead
