export default function LoginLayout({ children }) {
  return (
    <div className="flex-grow">
      <h1 className="text-purple-50">I&apos;m the beginning of BikesPage</h1>
      {children}
      <h3 className="text-purple-50">I&apos;m the end of BikesPage</h3>
    </div>
  );
}
