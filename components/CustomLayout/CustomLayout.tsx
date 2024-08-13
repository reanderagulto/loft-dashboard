import React from 'react';
import Sidebar from '@components/Sidebar/Sidebar';
import Topbar from '@components/Topbar/Topbar';

const CustomLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <main>
        <Sidebar />
        <section className="main-section">
            <Topbar />
            <div className="main-container">
                {children}
            </div>
        </section>
    </main>
  )
}

export default CustomLayout