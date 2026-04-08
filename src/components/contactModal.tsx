import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseCircleOutline } from "react-icons/io5";

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactUsModal: React.FC<ContactUsModalProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      dialog.close();
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleClickClose = () => {
    onClose();
    const dialog = dialogRef.current;
    if (dialog) dialog.close();
    document.body.style.overflow = 'unset';
  }

  const formFields = [
    { label: 'NAME', placeholder: 'John Doe', type: 'text' },
    { label: 'EMAIL', placeholder: 'JohnDoe@email.com', type: 'email' },
    { label: 'PHONE NUMBER', placeholder: '(+63) 907 888 0077', type: 'tel' },
  ];

  if (!isOpen) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={handleClickClose}
      className="backdrop:bg-slate-900/40 backdrop:backdrop-blur-sm bg-transparent p-0 m-auto focus:outline-none"
    >
      <div className="contact-us-dialog animate-in fade-in zoom-in duration-200">
        <img src="/assets/ContactUsBG.png" className='contact-us-img' alt="Contact Us BG" />
        <div className="contact-us-content">
          <button
            onClick={handleClickClose}
            className="absolute top-5 right-5 text-white hover:text-gray-100 text-2xl hover:cursor-pointer"
          >
            <IoCloseCircleOutline />
          </button>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col justify-end">
              <h2 className="text-white uppercase font-extrabold">ONE SAN MIGUEL AVE.</h2>
              <h2 className="text-white/50 uppercase">(02) 8556 3078 / (02) 5310 4096</h2>\\
              <h2 className="text-white uppercase font-extrabold">ONE CORPORATE CENTER</h2>
              <h2 className="text-white/50 uppercase">(02) 5310 1741</h2>
            </div>
            <div className="p-5">
              <div className='rounded-lg border border-[#202020] bg-[#121212] px-6 py-8 md:p-10 justify-between'>
                <form className="max-w-xl w-full text-white space-y-12">
                  {formFields.map((field, index) => (
                    <div key={index}>
                      <label className="text-sm text-white font-bold tracking-widest block text-left">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="bg-transparent border-b-2 border-[#C4C4C4] w-full text-base placeholder:text-[#5f5a5a] focus:outline-none focus:border-white"
                      />
                    </div>
                  ))}
                </form>
                <button className="mt-20 w-full max-w-xl  h-15 rounded-4xl bg-[#B4E700] text-white text-2xl">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>,
    document.body
  );
};

export default ContactUsModal;