import Typical from 'react-typical'
function TypicalBase() {
    return (
        <Typical
        steps={["I live in Da Nang", 1000, " And i'm a web developer", 3000]}
        loop={2}
        wrapper="span" className="d-block mt-3"
      />
    )
}

export default TypicalBase