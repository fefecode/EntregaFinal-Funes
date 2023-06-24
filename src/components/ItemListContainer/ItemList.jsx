import Item from "../Item/Item";
import Flex from "../Flex/Flex";
import Loader from "../Loader/Loader";

function ItemList({ platos, isLoading }) {
  if (isLoading) return <Loader />;

  if (platos.length === 0) return <h2>No hay productos para mostrar</h2>;

  return (
    <>
      <Flex title="Mi mený">
        {platos.map((itemInArray) => (
          <Item key={platos.id} {...itemInArray} />
        ))}
      </Flex>
    </>
  );
}

export default ItemList;
