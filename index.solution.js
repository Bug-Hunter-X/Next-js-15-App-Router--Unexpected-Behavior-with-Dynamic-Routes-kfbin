```javascript
// pages/index.solution.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li><Link href="/about">Go to About</Link></li>
        <li><Link href="/contact">Go to Contact</Link></li>
      </ul>
    </div>
  );
}
```