export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f8fafc] to-[#e0f2fe] flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-[#2ec4cc]/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-[#2ec4cc] rounded-full animate-spin"></div>
        </div>
        <p className="text-[#64748b] font-medium">Loading course...</p>
      </div>
    </div>
  )
}

