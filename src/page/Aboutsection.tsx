import car from '../assets/Rectangle 5.svg'
export default function Aboutsection() {
  return (
    <div className="h-screen bg-gray-50 py-12">
      <div className="flex flex-col items-center justify-center ">
        <h4 className="text-3xl">About us</h4>
        <hr className="w-31 h-px my-3 bg-main-orange border-0"></hr>
      </div>
      <div>
        <div>
            <p>
              We are a specialized team committed to providing reliable car rental services. One of the advantages of renting a car from us is offering competitive and transparent prices.
              By providing services such as comprehensive insurance ......
            </p>
            <span className="text-main-orange">
              Read more 
            </span>
        </div>
        <div>
          <img src={car} alt="car" className="w-96 h-96 object-cover mx-auto mt-8" />
        </div>
      </div>
    </div>
  )
}
