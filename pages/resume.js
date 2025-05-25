import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { Button } from '../components/ui/button'
import { Download, ExternalLink, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Resume() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/rob_royson_resume.pdf'
    link.download = 'Rob_Royson_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenInNewTab = () => {
    window.open('/rob_royson_resume.pdf', '_blank')
  }

  return (
    <>
      <Head>
        <title>Resume - Rob Royson</title>
        <meta
          name='description'
          content="Rob Royson's professional resume and CV"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <div className='min-h-screen bg-background'>
        <Header />

        <main className='pt-20'>
          {/* Header Section */}
          <section className='px-4 py-12 sm:px-6 lg:px-8'>
            <div className='max-w-6xl mx-auto'>
              <div className='flex flex-col items-start justify-between gap-6 mb-8 sm:flex-row sm:items-center'>
                <div>
                  <Link
                    href='/'
                    className='inline-flex items-center gap-2 mb-4 transition-colors text-muted-foreground hover:text-foreground'
                  >
                    <ArrowLeft className='w-4 h-4' />
                    Back to Portfolio
                  </Link>
                  <h1 className='mb-2 heading-lg text-gradient'>Resume</h1>
                  <p className='body-md text-muted-foreground'>
                    Download or view my professional resume
                  </p>
                </div>

                <div className='flex flex-col gap-3 sm:flex-row'>
                  <Button
                    onClick={handleDownload}
                    className='flex items-center gap-2 btn-primary-modern'
                  >
                    <Download className='w-4 h-4' />
                    Download PDF
                  </Button>
                  <Button
                    onClick={handleOpenInNewTab}
                    variant='outline'
                    className='flex items-center gap-2 btn-outline-modern'
                  >
                    <ExternalLink className='w-4 h-4' />
                    Open in New Tab
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* PDF Viewer Section */}
          <section className='px-4 pb-12 sm:px-6 lg:px-8'>
            <div className='max-w-6xl mx-auto'>
              <div className='overflow-hidden rounded-lg card-modern'>
                {isMobile ? (
                  /* Mobile: Show download prompt instead of embedded PDF */
                  <div className='p-8 text-center'>
                    <div className='mb-6'>
                      <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10'>
                        <Download className='w-8 h-8 text-primary' />
                      </div>
                      <h3 className='mb-2 heading-md'>View Resume</h3>
                      <p className='mb-6 body-md text-muted-foreground'>
                        For the best viewing experience on mobile, please
                        download the PDF or open it in a new tab.
                      </p>
                    </div>

                    <div className='flex flex-col max-w-sm gap-3 mx-auto'>
                      <Button
                        onClick={handleDownload}
                        className='flex items-center justify-center gap-2 btn-primary-modern'
                      >
                        <Download className='w-4 h-4' />
                        Download PDF
                      </Button>
                      <Button
                        onClick={handleOpenInNewTab}
                        variant='outline'
                        className='flex items-center justify-center gap-2 btn-outline-modern'
                      >
                        <ExternalLink className='w-4 h-4' />
                        Open in Browser
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Desktop: Show embedded PDF */
                  <div className='relative'>
                    <iframe
                      src='/rob_royson_resume.pdf'
                      className='w-full h-[800px] border-0'
                      title='Rob Royson Resume'
                    />

                    {/* Overlay for better UX */}
                    <div className='absolute flex gap-2 top-4 right-4'>
                      <Button
                        onClick={handleDownload}
                        size='sm'
                        className='flex items-center gap-2 shadow-lg btn-primary-modern'
                      >
                        <Download className='w-3 h-3' />
                        Download
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Additional Info */}
              <div className='mt-8 text-center'>
                <p className='body-md text-muted-foreground'>
                  Having trouble viewing the PDF?{' '}
                  <button
                    onClick={handleOpenInNewTab}
                    className='text-primary hover:underline'
                  >
                    Try opening it in a new tab
                  </button>{' '}
                  or{' '}
                  <button
                    onClick={handleDownload}
                    className='text-primary hover:underline'
                  >
                    download it directly
                  </button>
                  .
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
