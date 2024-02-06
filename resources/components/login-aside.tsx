import { Logo } from './logo'

export function LoginAside() {
  return (
    <div className="relative flex-col hidden h-full p-10 text-white 2xl:col-span-3 bg-muted dark:border-r lg:flex">
      <div className="absolute inset-0 bg-center bg-cover bg-zinc-900 backdrop-blur-sm" />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-950"></div> */}
      <Logo />

      <div className="relative z-20 mt-auto">
        <blockquote className="space-y-2">
          <p className="text-lg">
            &ldquo;This library has saved me countless hours of work and helped me deliver stunning
            designs to my clients faster than ever before.&rdquo;
          </p>
          <footer className="text-sm">Sofia Davis</footer>
        </blockquote>
      </div>
    </div>
  )
}
