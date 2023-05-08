export const Item = ({item}) => {
	console.log(item)
	return (
		<>
		<h1>Item</h1>
			{(() => {
				let jsxArray = []
				for(let i in item){
					jsxArray.push(`${i}: ${item[i]}`)
				}
				return jsxArray.map((el, i) => (
					<p key={i}>{el}</p>
				))
			})()}
		</>
	)
}