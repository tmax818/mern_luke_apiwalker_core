import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {Item} from "./Item";

export const Search = () => {
	const [item, setItem] = useState({});
	const {search, id} = useParams()
	useEffect(() => {
		axios.get(`https://swapi.dev/api/${search}/${id}`).then(data => {
			setItem(data.data)
		}).catch(e => {
			setItem(e)
		})
	}, [search, id])
	console.log(item)
	return (
		<>
			<Item item={item} />
		</>
	)
}