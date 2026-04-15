import { useState } from "react";
import { useNavigate } from "react-router-dom"
import ContactUsModal from "./contactModal";
import { FadeInDown } from "../utils/animation";

export default function Header() {
  const router = useNavigate()
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenContactDialog = () => {
    setOpenDialog(true)
  }

  return (

    <div className="header-bg w-full flex justify-center relative">
      <div className="fixed z-999 w-full header-bg">
        <FadeInDown>
          <div className="header max-w-7xl mx-auto">
            <img src='./assets/MGS-Logo.png' className='p-3 cursor-pointer' onClick={() => router('/')} />

            <div className="buttons flex gap-5 px-5">
              <button onClick={() => router('/about-us')}>
                <h5>About Us</h5>
              </button>
              <button onClick={handleOpenContactDialog}>
                <h5>Contacts</h5>
              </button>
            </div>
          </div>
        </FadeInDown>
      </div>


      <ContactUsModal isOpen={openDialog} onClose={() => setOpenDialog(false)} />
    </div>
  )
}