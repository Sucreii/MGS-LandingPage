export default function Header() {
  return (
    <div className="w-full flex justify-center">
      <div className="header max-w-7xl">
        <img src='./assets/MGS-Logo.png' className='p-3' />

        <div className="buttons flex gap-5 px-5">
          <button>
            <h5>About Us</h5>
          </button>
          <button>
            <h5>Contacts</h5>
          </button>
        </div>
      </div>
    </div>
  )
}