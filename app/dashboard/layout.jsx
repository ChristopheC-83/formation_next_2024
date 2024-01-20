export default function DashboardLayout({ children }) {
  return (
    <div className="flex-grow">
      <h1>I&apos;m the beginning of dashboard</h1>
      {children}
      <h3>I&apos;m the end of dashboard</h3>
    </div>
  );
}
