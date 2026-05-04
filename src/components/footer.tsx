export default function Footer() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-between max-w-7xl mx-auto font-extralight">
        <h5 className="uppercase text-gray-400">© 2025 MGS CONSULTING SOLUTIONS</h5>

        <div className="buttons flex gap-5 px-5">
            <button>
                <h5 className="uppercase text-gray-400">About Us</h5>
            </button>
            <button>
                <h5 className="uppercase text-gray-400">Contacts</h5>
            </button>
        </div>
    </div>
  )
}