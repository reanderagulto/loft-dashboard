import React from 'react';
import Link from 'next/link';

const Topbar = () => {
  return (
    <div className="navbar bg-[#D9D9D9] rounded-[8px] sticky top-[38px] right-0">
        <div className="flex flex-1 justify-end px-2">
            <div className="flex items-stretch">
            <Link className="btn btn-ghost" href="mailto: hello@loft.ph">hello@loft.ph</Link>
            <Link className="btn btn-ghost" href="tel: (632) 8284 8789">(632) 8284 8789</Link>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Username</div>
                <ul
                    tabIndex={0}
                    className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
                >
                    <li><Link href="#">Account Settings</Link></li>
                    <li><Link href="#">Logout</Link></li>
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar