export default function BikesPage({params}) {
    const {id} = params
    return (
      <div className="flex-grow ">
        <h1 className="mt-40 text-6xl font-bold text-center text-purple-200 underline underline-offset-8">
          Id bike : {id}
        </h1>
      </div>
    );
  }