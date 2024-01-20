export default function LoginLayout({ children }) {
  return (
    <div className="flex-grow">
      <h1 className="text-slate-50">I&apos;m the beginning of LoginPage</h1>
      {children}
      <h3 className="text-purple-50">I&apos;m the end of LoginPage</h3>
    </div>
  );
}
