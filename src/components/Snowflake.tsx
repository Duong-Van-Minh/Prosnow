const Snowflake = (props : any) => {
  console.log(props)
  return (
    <p className="Snowflake" id={`item${props.id}`} style={props.style}>* </p>
  )
}
export default Snowflake