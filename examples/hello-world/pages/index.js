import Link from 'next/link'
export default () => (
  <div>
    Hello World.{' '}
    <Link href="/about">
      <a>About</a>
    </Link>{' '}
    <Link href="/day">
      <a>Day</a>
    </Link>
  </div>
)
