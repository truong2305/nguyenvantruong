import Typical from 'react-typical'
function TypicalBase() {
    return (
        <Typical
        steps={["I'm from Da Nang city", 1000, "I'm a web developer", 500, 3000]}
        loop={2}
        wrapper="span" className="d-block mt-3"
      />
    )
}

export default TypicalBase