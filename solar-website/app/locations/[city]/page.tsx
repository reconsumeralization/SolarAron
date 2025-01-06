import { cityData, validateCityData } from './city-data'
import { CityPageContent } from './city-page-content'

// Error boundary component
function ErrorFallback({ error, resetErrorBoundary }: { 
  readonly error: Error
  readonly resetErrorBoundary: () => void 
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">
          {error.message || "We're having trouble loading this page. Please try again."}
        </p>
        <button
          onClick={resetErrorBoundary}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

export default function CityPage({ params }: { readonly params: { readonly city: string } }) {
  const data = cityData[params.city]

  if (!data || !validateCityData(data)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
          <p className="mb-8">The location you're looking for doesn't exist.</p>
          <a href="/locations" className="text-blue-600 hover:underline">
            View All Locations
          </a>
        </div>
      </div>
    )
  }

  return <CityPageContent cityData={data} />
}

export { generateStaticParams } from './generateStaticParams' 