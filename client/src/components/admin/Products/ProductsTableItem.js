import React from "react";
import { BASE_URL } from "../../../services/api/base";
import useDeleteProject from "./useDeleteProject";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router";

const ProductsTableItem = ({ product }) => {
	const { name, price, countInStock, brand, user, category, img, _id } =
		product;

	const navigate = useNavigate();

	const { deleteProject } = useDeleteProject();

	return (
		<tr>
			<td>
				<img src={BASE_URL + `/${img}`} alt='' style={{ maxWidth: "50px" }} />
			</td>
			<td>{name}</td>
			<td>{price}</td>
			<td>{countInStock}</td>
			<td>{brand}</td>
			<td>{category}</td>
			<td>{user}</td>
			<td>
				<button
					onClick={() => {
						navigate(`/admin/manageproducts/${_id}`);
					}}
				>
					<AiFillEdit className='text-2xl text-green-500' />
				</button>
				<button
					onClick={() => {
						if (window.confirm("Are you sure?")) deleteProject(_id);
					}}
				>
					<BsFillTrashFill className='text-2xl ml-2 text-red-500' />
				</button>
			</td>
		</tr>
	);
};

export default ProductsTableItem;
