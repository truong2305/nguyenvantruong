import Typical from 'react-typical'
function TypicalBase() {
    return (
        <Typical
        steps={[1000, "Live in Da Nang", 2000, "Web Developer", 5000]}
        loop={2}
        wrapper="span" className="d-block mt-3 text-typical"
      />
    )
}

export default TypicalBase