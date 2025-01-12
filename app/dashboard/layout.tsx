export default function DashboardLayout(
  {children}: {children: React.ReactNode}
) {
  return (
    <div className='grid grid-cols-[250px_1fr] h-screen'>
      <div className='bg-[#ff4500] text-[#111] overflow-auto'>sidebar</div>
      <div className='overflow-auto'>{children}</div>
    </div>
  )
}