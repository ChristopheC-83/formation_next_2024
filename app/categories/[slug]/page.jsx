export default function LoginPage({params}) {
  const {slug} = params
  return (
    <div className="flex-grow ">
      <h1 className="mt-40 text-6xl font-bold text-center text-purple-200 underline underline-offset-8">
        Slug : {slug}
      </h1>
    </div>
  );
}
