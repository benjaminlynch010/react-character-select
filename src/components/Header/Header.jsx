function Header(props) {
  console.log(`Header props : ${props}`)
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

export default Header