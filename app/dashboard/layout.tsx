export default function DashboardLayout(
  {children}: {children: React.ReactNode}
) {
  return (
    <div className='grid grid-cols-[250px_1fr] h-screen'>
      <div className='bg-[#000] overflow-auto p-4'>sidebar</div>
      <div className='overflow-auto py-2 px-4'>
        <h1 className='pb-4'>Monday 27th January 2025</h1>
        {children}
      </div>
    </div>
  )
}